import { Injectable, signal } from "@angular/core";
import { ValidationService } from "../components/login/services/validation.service";
import { RegistrationService } from "../components/register/services/registration.service";

@Injectable({
    providedIn: 'root'
})
export class AuthFacadeService {

    isRegister = signal<boolean>(false);

    roterApiLogin: string = 'http://localhost:3000/auth';
    routerApiRegister: string = 'http://localhost:3000/auth/register';

    constructor(
        private validationService: ValidationService,
        private registrationService: RegistrationService
    ) { }

    async login(email: string, password: string) {
        this.validationService.validateCredentials(this.roterApiLogin, email, password);
    }

    async register(email: string, password: string) {
        this.registrationService.registrateUser(this.routerApiRegister, email, password);
    }

    async renderRegister() {
        this.isRegister.set(true);
    }

}