import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { HttpService } from './services/common/http.service';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { BooksComponent } from 'src/app/components/books/books.component';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { AddBookComponent } from 'src/app/components/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    BooksComponent,
    AuthorsComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    HttpClientModule,
    ToastModule,
    DropdownModule,
    TooltipModule,
    TableModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpService,
      multi: true
    }
  ],
  entryComponents: [AddBookComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
