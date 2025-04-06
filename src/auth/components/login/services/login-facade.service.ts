import { Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import { firstValueFrom, from, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginFacadeService {

    loginApi = 'http://localhost:3000/auth/login'

    constructor(
        private router: Router,
    ) { }

    async validateEmail(email: string): Promise<boolean> {
        return email.includes('@');
    }

    async validatePassword(password: string): Promise<boolean> {
        return password.length >= 8;
    }

    async entryHome(email: string, password: string) {
        const response = await firstValueFrom(this.validateCredentials(email, password))
        if(response) this.router.navigate(['/home'])
        console.log('Response:', response)
    }

    validateCredentials(email: string, password: string): Observable<any> {
        return from(fetch(`${this.loginApi}`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }    
        ).then(async response => {
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Erro desconhecido');
            }
            return response.json();
        }).catch(error => {
            console.error(error);
            throw error;
        }))
    }

}