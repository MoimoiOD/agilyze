import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFacadeService } from './services/register-facade.service';
import { RegisterDto } from './dto/register.dto';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username: string = '';
  name: string = '';
  position: string = '';
  email: string = '';
  password: string = '';

  roles: string[] = ['Scrum Master', 'Product Owner', 'Developer', 'Tester']
  
  selectedRole: string = this.roles[0];
  isHiddenListRole: boolean = false;

  @Output() login = new EventEmitter<void>();

  constructor(
    private registerFacadeService: RegisterFacadeService,
  ) { }

  async emitLoginEvent() {
    this.login.emit();
  }

  async hiddenListRole() {
    this.isHiddenListRole = !this.isHiddenListRole;
  }

  async selectRole(role: string): Promise<void> {
    this.selectedRole = role;
    this.isHiddenListRole = false;
  }

  async registerUser() {
    const user: RegisterDto = { 
      username: this.username, 
      name: this.name, 
      position: this.position, 
      email: this.email, 
      password: this.password, 
      role: this.selectedRole 
    };
    this.registerFacadeService.registerUser(user)
  }

}
