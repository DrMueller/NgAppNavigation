import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// aspects
import { AppNavigationModule, AppRoutingConfigurationService } from './common/app-navigation';

// areas
import { HomeModule } from './areas/home';
import { PlaygroundModule } from './areas/playground';

import { AppComponent, AppRoutingModule } from '.';

import { AppInitFactoryService } from './initialization';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppNavigationModule,
    HomeModule.forRoot(),
    PlaygroundModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AppInitFactoryService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitFactory: AppInitFactoryService) => () => { // The injected Service has to be provided as well as in the deps
        appInitFactory.initialize();
      },
      deps: [AppInitFactoryService], // The deps are injected in the order they're here defined to the func
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

