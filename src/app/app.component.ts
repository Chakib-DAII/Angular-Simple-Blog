import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts =[ 
  {
  title: 'Mon premier Post',
  content: 'Mon premier Post Mon premier Post Mon premier Post Mon premier Post Mon premier Post Mon premier Post Mon premier Post Mon premier Post.',
  loveIts: 0,
  createdAt: new Date()
  },
  {
  title: 'Mon deuxieme Post',
  content: 'Mon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme PostMon deuxieme Post.',
  loveIts: 1,
  createdAt: new Date()
  },
  {
  title: 'Encore un Post',
  content: 'Encore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un PostEncore un Post.',
  loveIts: 0,
  createdAt: new Date()
  }
];

}
