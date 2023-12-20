import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TodosItemComponent } from './todos-item/todos-item.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodosItemComponent,
    AddtodoComponent,
    AboutComponent
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
