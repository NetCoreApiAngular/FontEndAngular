import { Component, OnInit } from '@angular/core';
import { UserContextModel } from 'src/app/shared/models/user/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/api/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userLoginModel: UserContextModel = new UserContextModel();
  public loginForm: any;
  public isLoginError;
  public isLoading: boolean;
  private returnUrl: string;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // Create Login Form
    // Default value for dev 
    this.loginForm = this._fb.group({
      username: ['admin@nhonhoa.vn', Validators.required],
      password: ['abc123', Validators.required]
    })
  }

  onLogin() {
    if(this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.disabledInput();
    this.userService.onLogin(this.loginForm.value).subscribe(
      res => {
        this.isLoading = false;
        if(res && res.content) {
          localStorage.setItem('user', JSON.stringify(res.content));
          localStorage.setItem('token', res.content.token);
          this.router.navigate([this.returnUrl]);
        } else {
          this.isLoginError = true;
          this.enabledInput();
        }
      }, error => {
        this.isLoginError = true;
        this.isLoading= false;
        this.enabledInput();
      }
    );
  }

  disabledInput(): void {
    this.loginForm.get('username').disable();
    this.loginForm.get('password').disable();
  }

  enabledInput() {
    this.loginForm.get('username').enable();
    this.loginForm.get('password').enable();
  }
 
}
