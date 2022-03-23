import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public registerForm: any;
    public error: boolean;
    public success: boolean;
    public loading: boolean;
    public errorMessage: string = null;
    public successMessage: string = null;
    public messages = {
        'emailExists': 'This email exists already',
        'email': {
            'required': 'This field is required.',
            'email': 'Please enter valid email.'
        },
        'notMatch': 'Password and confirm password does not match.',
        'password': {
            'required': 'This field is required.',
            'whitespace': 'Password cannot contain white spaces.',
            'pattern': 'Password must contain at least 6 characters, including uppercase, lowercase and number.'
        },
        'confirmPassword': {
            'required': 'This field is required.',
        },
        'success': 'Your account has been created successfully. You can login now.',
        'unknownError': 'Unknown error. Please try again later.'
    }

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.createRegisterForm();
    }

    // Create Form
    createRegisterForm() {
        this.registerForm = this._fb.group({
            email: ['', [Validators.required, this.emailValidator]],
            passwordGroup: this._fb.group({
                password: ['', [Validators.required, Validators.pattern("(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}"), this.noWhitespaceValidator]],
                confirmPassword: ['', [Validators.required]]
            }, { validator: this.matchPassword })
        })
    }
    // Get username
    get email() {
        return this.registerForm.get('email');
    }

    // Get Password Group
    get passwordGroup() {
        return this.registerForm.get('passwordGroup');
    }

    // Get password
    get password() {
        return this.registerForm.get('passwordGroup.password');
    }

    // Get confirm password
    get confirmPassword() {
        return this.registerForm.get("passwordGroup.confirmPassword");
    }

    // Register
    onRegister(f) {
        
    }

    // Disable input fields
    disabledInput(): void {
        this.email.disable();
        this.password.disable();
    }

    // Enable input fields
    enabledInput() {
        this.email.enable();
        this.password.enable();
    }


    // Custom validators
    noWhitespaceValidator(control: AbstractControl): { [key: string]: any } | null {
        if(control.value) {
            if ((control.value as string).indexOf(' ') >= 0) {
                return { 'whitespace': true }
            }
            return null
        }
        
    }

    emailValidator(control: AbstractControl): { [key: string]: any } | null {
        const value = control.value;
        const EMAIL_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        if(value) {
            const isValid = value.match(EMAIL_REGEX);
            return isValid ? null : { 'email': true };
        }
        
    }

    matchPassword(control: AbstractControl): { [key: string]: any } | null {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
        if (password.value === confirmPassword.value) {
            return null;
        }
        return { 'passwordNotMatch': true };
    }
}
