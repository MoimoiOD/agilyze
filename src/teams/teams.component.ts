import { Component } from '@angular/core';
import { SystemSelectorComponent } from './components/system-selector/system-selector.component';
import { EnvironmentInformationComponent } from './components/environment-information/environment-information.component';
import { ChatComponent } from './components/chat/chat.component';
import { MethodologiesComponent } from './components/methodologies/methodologies.component';
import { MembersComponent } from './components/members/members.component';
import { HistoryComponent } from './components/history/history.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { DialogueComponent } from './components/chat/components/dialogue/dialogue.component';

@Component({
  selector: 'app-teams',
  imports: [SystemSelectorComponent, EnvironmentInformationComponent, ChatComponent, MethodologiesComponent,
    MembersComponent, HistoryComponent, VisibilityComponent, DialogueComponent
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {

  openDialogue: boolean = false;

  constructor() { }

  open() {
    this.openDialogue = true;
  }

  close() {
    this.openDialogue = false;
  }

}
