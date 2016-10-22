import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {ContactsComponent} from './contacts/contacts.component';

const routes: Routes = [
   { path: '', component:ContactsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactCardRoutingModule { }
