import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ProjeckInvComponent } from './component/projeck-inv/projeck-inv.component';
import { ProjeckWebComponent } from './component/projeck-web/projeck-web.component';
import { ProjeckEffsComponent } from './component/projeck-effs/projeck-effs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderAppsComponent } from './component/order-apps/order-apps.component';
import { OrderWebComponent } from './component/order-web/order-web.component';
import { OrderWordpressComponent } from './component/order-wordpress/order-wordpress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjeckInvComponent,
    ProjeckWebComponent,
    ProjeckEffsComponent,
    OrderAppsComponent,
    OrderWebComponent,
    OrderWordpressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
