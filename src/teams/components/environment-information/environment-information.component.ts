import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-environment-information',
  imports: [],
  templateUrl: './environment-information.component.html',
  styleUrl: './environment-information.component.scss',
})
export class EnvironmentInformationComponent {
  
  @Output() openInformation = new EventEmitter<boolean>();

  constructor() {}

  open() {
    this.openInformation.emit(true);
  }
}
