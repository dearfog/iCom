import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { 
        path: 'chat', 
        loadChildren:'./components/chat/chat.module#ChatModule'
    },
    { 
        path: '', 
        loadChildren:'./components/authentication/authentication.module#AuthenticationModule'
    },
    
    { path: '', pathMatch: 'full', redirectTo: '/chat' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
