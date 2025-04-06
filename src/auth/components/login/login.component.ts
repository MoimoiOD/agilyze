import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFacadeService } from './services/login-facade.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = ''
  password: string = ''

  @Output() register = new EventEmitter<void>()

  constructor(
    public loginFacadeService: LoginFacadeService,
  ) {}

  async validateCredentials() {
    this.loginFacadeService.entryHome(this.email, this.password)
  }

  async emitRegister() {
    this.register.emit();
  }

}
