import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptographerService } from '../../shared/cryptographer.service';
import { CookiesService } from '../../shared/cookies.service';

@Injectable({
    providedIn: 'root'
  })
export class LoginGuard implements CanActivate {
    constructor(
        public decoder:CryptographerService,
        public router:Router,
        public cookiesService:CookiesService
    ){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // return true;
        var cred = JSON.parse(localStorage.getItem('token'));
        var cookie = this.cookiesService.getCookie('phoneNumber');
        if (!cred && !cookie ) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}
