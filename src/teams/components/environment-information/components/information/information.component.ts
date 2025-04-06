import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  
  @Input() openInformation: boolean = false;
  @Output() closeInformation = new EventEmitter<boolean>();

  constructor() {}

  close() {
    this.closeInformation.emit(false);
  }
}
