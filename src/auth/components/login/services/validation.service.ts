import { Injectable } from "@angular/core";
import { from } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    constructor() { }

    async validateEmail(email: string): Promise<boolean> {
        return email.includes('@');
    }

    async validatePassword(password: string): Promise<boolean> {
        return password.length >= 8;
    }

    async validateCredentials(roterApi: string, email: string, password: string) {
        return from(fetch(`${roterApi}`, 
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
            console.log('Response:', response);
            return response.json();
        }).catch(error => {
            console.error('Error:', error);
            throw error;
        }))
    }

}