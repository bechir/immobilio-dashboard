import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['dashboard']);
    }
    this.initForm();
  }

  initForm() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.errorMessage = null;
    this.authService
      .signin(this.signinForm.value)
      .subscribe(
        data => {
          try {
            localStorage.setItem('token', data.token);
            this.authService.emitAuthStateChanged();
            this.router.navigate(['/dashboard']);
          } catch (e) {
            alert('Votre navigateur ne supporte pas le stockage local. Êtes-vous en mode navigation privée?');
          }
        },
        resp => this.errorMessage = resp.error.message
      );
  }
}
