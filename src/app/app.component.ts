import { Config } from './config';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router, ChildActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // APP_NAME = 'ImmoBiLio'
  APP_NAME = Config.appName;
  isAuth: boolean = false;

  private _isToggled = false;

  authSubscription: Subscription;

  constructor(private authService: AuthService, public router: Router, private titleService: Title) {
    this.router.events
      .pipe(filter(event => event instanceof ChildActivationEnd))
      .subscribe(event => {
        let snapshot = (event as ChildActivationEnd).snapshot;
        while (snapshot.firstChild !== null) {
          snapshot = snapshot.firstChild;
        }
        this.titleService.setTitle(snapshot.data.title ? `${snapshot.data.title} | ${this.APP_NAME}` : this.APP_NAME);
      });
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authSubject.subscribe((isAuth: boolean) => {
      this.isAuth = isAuth;
    })
    this.authService.emitAuthStateChanged();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onToggleMenu() {
    this._isToggled = !this._isToggled;
  }

  get isToggled(): boolean {
    return this._isToggled;
  }
}
