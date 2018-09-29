import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatLayoutComponent } from '../../shared/layout/chat-layout/chat-layout.component';
import { LoginGuard } from '../../config/route-guard/login-guard';

const routes: Routes = [
    {
        path: '', 
        component: ChatLayoutComponent,
        children: [
            { 
                path: '', 
                component: ChatComponent,
                canActivate:[LoginGuard]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
