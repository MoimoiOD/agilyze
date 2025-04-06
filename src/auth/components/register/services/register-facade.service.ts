import { Injectable } from "@angular/core";
import { RegisterDto } from "../dto/register.dto";
import { firstValueFrom, from, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RegisterFacadeService {

    urlApi = "http://localhost:3000/auth/register"

    constructor() { }

    async registerUser(user: RegisterDto) {
        const response = await firstValueFrom(this.registrateUser(user))
        console.log('Response:', response)
    }

    registrateUser(user: RegisterDto): Observable<any> {
        return from(fetch(`${this.urlApi}`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
                    name: user.name,
                    position: user.position,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                })
            }    
        ).then(async response => {
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Erro desconhecido');
            }
            return response.json();
        }).catch(error => {
            console.error('Error:', error)
            throw error;
        }))
    }

}