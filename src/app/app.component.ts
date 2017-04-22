import { Component, OnInit } from '@angular/core';

import { AppRoutingConfigurationService } from './common/app-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
