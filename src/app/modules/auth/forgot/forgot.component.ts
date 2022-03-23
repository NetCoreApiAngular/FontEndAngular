import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/api/app/account.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

    public forgotPasswordForm: any;
    public error: boolean;
    public success: boolean;
    public loading: boolean;
    public errorMessage: string = null;
    public successMessage: string = null;
    public messages = {
        'email': {
            'required': 'Đây là trường bắt buộc',
            'email': 'Hãy nhập email hợp lệ'
        },
        'success': "Hãy kiểm tra email của bạn để thực hiện đổi mật khẩu",
        'unknownError': 'Đã có lỗi xảy ra, vui lòng thử lại sau'
    }

    constructor(
        private _fb: FormBuilder,
        private accountService: AccountService,
    ) { }

    ngOnInit() {
        this.createForgotPasswordForm();
       
    }

    // Create Login Form
    createForgotPasswordForm() {
        this.forgotPasswordForm = this._fb.group({
            email: ['', [Validators.required, this.emailValidator]]
        })
    }

    get email() {
        return this.forgotPasswordForm.get('email');
    }
    
    onForgotPassword(f) {
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.disabledInput()
        this.loading = true;
        this.error = false;
        this.success = false;

        this.accountService.onForgotPassword(this.email.value).subscribe(
            res => {
                this.successMessage = this.messages.success;
                this.loading = false;
                this.success = true;
                this.enabledInput();
                this.createForgotPasswordForm();
                f.resetForm();
            }, error => {
                this.loading = false;
                this.errorMessage = this.messages.unknownError;
                error = true;
            }
        )
        
    }

    // Disable input fields
    disabledInput(): void {
        this.email.disable();
    }

    // Enable input fields
    enabledInput() {
        this.email.enable();
    }

    // Custom Validators
    emailValidator(control: AbstractControl): { [key: string]: any } | null {
        const value = control.value;
        const EMAIL_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        if(value) {
            const isValid = value.match(EMAIL_REGEX);
            return isValid ? null : { 'email': true };
        }
    }

}
