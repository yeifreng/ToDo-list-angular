import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ListaTareaComponent } from './lista-tarea/lista-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarTareaComponent,
    ListaTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
