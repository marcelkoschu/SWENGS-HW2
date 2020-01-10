import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateComponent} from "./date/date.component";
import {JwtModule} from "@auth0/angular-jwt";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {HttperrorInterceptor} from "./httperror.interceptor";
import {ComputerListComponent} from "./computer-list/computer-list.component";
import {ComputerFormComponent} from "./computer-form/computer-form.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {ShareButtonsModule} from "@ngx-share/buttons";

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ComputerListComponent,
    ComputerFormComponent,
    DateComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({config: {tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttperrorInterceptor,
      multi: true,
      deps: [MatSnackBar]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
