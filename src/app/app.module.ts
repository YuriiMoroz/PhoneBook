import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './main/child/child.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { SearchPipe } from './phone-book/search.pipe';
import { SortPipe } from './phone-book/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildComponent,
    PhoneBookComponent,
    SearchPipe,
    SortPipe
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
