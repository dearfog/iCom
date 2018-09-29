import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../../../environments/environment';
import { CryptographerService } from '../../../shared/cryptographer.service';
import { CookiesService } from '../../../shared/cookies.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
    public sent: boolean;
    public loading: boolean;
    private confirmationResult: any;
    public phone_number:Number;
    public code : String;
    constructor(
        public encoderService:CryptographerService,
        public cookiesService:CookiesService,
        public router :Router
    ) {
        const firebaseConfig = environment.firebase.config;
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    ngOnInit() {
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    }

    onSubmit() {
        const appVerifier = this.recaptchaVerifier;
        const phoneNumberString = this.phone_number.toString();
        this.loading = true;
        firebase.auth().signInWithPhoneNumber(`+91 ${phoneNumberString}`, appVerifier)
            .then((confirmationResult) => {
                this.sent = true;
                this.confirmationResult = confirmationResult;
                this.loading = false;
            })
            .catch((err) => {
                this.loading = false;
                console.log('sms not sent', err);
            });
    };
    verify(verification, phone_number) {
        this.loading = true;
        this.confirmationResult.confirm(verification).then((good) => {
            // all checks out
            localStorage.setItem(this.encoderService.encode('token'),JSON.stringify(good));
            this.cookiesService.setCookie(this.encoderService.encode('phoneNumber'),this.encoderService.encode(phone_number.toString()),10);
            this.confirmationResult = false;
            this.loading = false;
            this.router.navigate(['/chat']);
        }).catch((bad) => {
            // code verification was bad.
            console.log(bad);
            this.loading = false;

            alert(JSON.stringify(bad));
        });
    }
}
