import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @Output() openDialogue = new EventEmitter<boolean>();

  constructor() {}

  open() {
    this.openDialogue.emit(true);
  }

}
