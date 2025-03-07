import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthFacadeService } from './services/auth-facade.service';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, LoginComponent, RegisterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(
    public authFacadeService: AuthFacadeService,
  ) { }

  async login(data: { email: string, password: string }) {
    this.authFacadeService.login(data.email, data.password);
  }

  async register(data: { email: string, password: string }) {
    
  }

  async renderRegister() {
    this.authFacadeService.renderRegister()
  }

}
