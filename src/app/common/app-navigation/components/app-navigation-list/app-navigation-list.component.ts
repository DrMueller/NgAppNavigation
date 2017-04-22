import { Component, OnInit } from '@angular/core';

import { AppNavigationProvisioningService } from '../../services';
import { AppNavigationEntry } from '../../models';

@Component({
  selector: 'app-app-navigation-list',
  templateUrl: './app-navigation-list.component.html',
  styleUrls: ['./app-navigation-list.component.scss']
})
export class AppNavigationListComponent implements OnInit {
  public navigationEntries: AppNavigationEntry[];

  constructor(private provisioningService: AppNavigationProvisioningService) { }

  ngOnInit() {
    this.navigationEntries = this.provisioningService.provideViewEntries();
  }
}
