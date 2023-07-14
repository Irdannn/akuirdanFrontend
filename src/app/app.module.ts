import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ProjeckInvComponent } from './component/projeck-inv/projeck-inv.component';
import { ProjeckWebComponent } from './component/projeck-web/projeck-web.component';
import { ProjeckEffsComponent } from './component/projeck-effs/projeck-effs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjeckInvComponent,
    ProjeckWebComponent,
    ProjeckEffsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
