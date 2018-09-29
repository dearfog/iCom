import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatLayoutComponent } from '../../shared/layout/chat-layout/chat-layout.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
     MaterialModule,
  ],
  declarations: [
      ChatComponent,
      ChatLayoutComponent
    ]
})
export class ChatModule { }
