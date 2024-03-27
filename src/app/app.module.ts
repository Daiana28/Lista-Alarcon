import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppListadoComponent } from './app-listado/app-listado.component';
import { AppExamenesComponent } from './app-examenes/app-examenes.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppListadoComponent,
    AppExamenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
