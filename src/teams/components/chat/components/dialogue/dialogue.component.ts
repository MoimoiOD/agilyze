import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  imports: [],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})
export class DialogueComponent {

  @Input() openDialogue: boolean = false;
  @Output() closeDialogue = new EventEmitter<boolean>();

  constructor() { }

  close() {
    this.closeDialogue.emit(false);
  }

}
