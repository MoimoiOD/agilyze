import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor() { }

    async registrateUser(routerApi: string, email: string, password: string) {
        return fetch(`${routerApi}`, 
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
        })

    }

}