import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { BooksComponent } from 'src/app/components/books/books.component';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { AuthRequestOptionsService } from './services/security/auth-request-options.service';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    BooksComponent,
    AuthorsComponent,
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
    TableModule
  ],
  providers: [
    MessageService,
    {
      provide: BaseRequestOptions,
      useClass: AuthRequestOptionsService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
