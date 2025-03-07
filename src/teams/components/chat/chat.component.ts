import { Component, EventEmitter, Output } from '@angular/core';
import { DialogueComponent } from './components/dialogue/dialogue.component';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  @Output() openDialogue = new EventEmitter<boolean>();

  constructor() { }

  open() {
    this.openDialogue.emit(true);
  }

}
