import { Injectable, signal } from "@angular/core";
import { LoginFacadeService } from "../components/login/services/login-facade.service";
import { RegisterFacadeService } from "../components/register/services/register-facade.service";

@Injectable({
    providedIn: 'root'
})
export class AuthFacadeService {

    isRegister = signal<boolean>(false);

    constructor() { }

    async renderRegister() {
        this.isRegister.set(true);
    }

    async renderLogin() {
        this.isRegister.set(false);
    }

}