import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  
  contacts:ContactModel[];
  constructor() { }

  ngOnInit() {
      this.contacts = [
                        {
                          id:1,
                          first_name:'Rahul',
                          last_name:'Bussa',
                          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          phone:'987654321',
                          email:'xyz@gmail.com'
                        },
                        {
                          id:2,
                          first_name:'XYZ',
                          last_name:'Abc',
                          avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg',
                          phone:'123456789',
                          email:'abc@gmail.com'
                        }
                      ];

  }



}
