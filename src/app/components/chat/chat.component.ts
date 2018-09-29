import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  swipeup($event){
      console.log($event);
  }
  folders: Section[] = [
    {
      name: 'Person 1',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Person 2',
      updated: new Date('1/17/16'),
    },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },{
        name: 'Person 1',
        updated: new Date('1/1/16'),
      },
      {
        name: 'Person 2',
        updated: new Date('1/17/16'),
      },
    {
      name: 'Person 3',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}

export interface Section {
    name: string;
    updated: Date;
  }
  