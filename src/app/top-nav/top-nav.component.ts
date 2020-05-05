import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  @Input() appName: string;
  @Input() isAuth: boolean;
  @Output() toggled = new EventEmitter();

  // authSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.authSubscription = this.authService.authSubject.subscribe((isAuth: boolean) => {
    //   this.isAuth = isAuth;
    // });
    // this.authService.emitAuthStateChanged();
  }

  ngOnDestroy(): void {
    // this.authSubscription.unsubscribe();
  }

  onSignOut() {
    this.authService.signout();
    this.router.navigate(['/auth/signin']);
  }

  toggleMenu() {
    this.toggled.emit();
  }
}
