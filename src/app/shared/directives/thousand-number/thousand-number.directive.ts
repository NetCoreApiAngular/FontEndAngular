import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
    selector: '[thousand-number],[thousandNumber]'
})

// 1. format digits automatically
// 2. disallow non-number characters (programmatically format user input)
// 3. decimal is not supported (eg. xxx.01)

export class ThousandNumberDirective {
    currencyChars = new RegExp('[\.,]', 'g'); // Remove commas and dots

    private specialKeys: Array<string> = [
        "Backspace",
        "Tab",
        "End",
        "Home",
        "-",
        "ArrowLeft",
        "ArrowRight",
        "Del",
        "Delete"
    ];

    constructor(public el: ElementRef, public renderer: Renderer2, private decimalPipe: DecimalPipe) { }

    ngOnInit() {
        this.format(this.el.nativeElement.value); // Format any initial values
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(e: KeyboardEvent) {
        if (
            this.specialKeys.indexOf(e.key) > -1) {
            return
        }

        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key)) && e.keyCode == 9) {
            e.preventDefault()
        }
    }

    @HostListener('input', ["$event.target.value"]) onInput(e: string) {
        this.format(e)
    };

    @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
        event.preventDefault()
        this.format(event.clipboardData.getData('text/plain'))
    }

    format(val: string) {
        // 1. Non-number characters and replace/remove them
        const numberFormat = parseInt(String(val).replace(this.currencyChars, ''))

        // 2. Format the number (add commas)
        const usd = this.decimalPipe.transform(numberFormat, '1.0', 'en-US')

        // 3. Replace the input value with formatted numbers
        this.renderer.setProperty(this.el.nativeElement, 'value', usd)
    }
}