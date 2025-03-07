import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = ''
  password: string = ''
  @Output() enter = new EventEmitter<{ email: string, password: string }>()
  @Output() register = new EventEmitter<void>()

  constructor() {}

  async emitLogin() {
    this.enter.emit({ email: this.email, password: this.password })
  }

  async emitRegister() {
    this.register.emit()
  }

}
