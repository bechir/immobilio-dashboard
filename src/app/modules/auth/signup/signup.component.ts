import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('(\.){6,}')])
    });
  }

  onSubmit() {
    this.authService
      .signup(this.signupForm.value)
      .subscribe(
        data => {
          try {
            localStorage.setItem('token', data.token);
            this.authService.emitAuthStateChanged();
            this.router.navigate(['/dashboard']);
          } catch (e) {
            alert('Your web browser does not support storing settings locally.');
          }
        },
        res => this.errorMessage = res.error.message
    );
  }
}
