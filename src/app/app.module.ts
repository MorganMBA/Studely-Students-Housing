import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { SingleHouseComponent } from './housing-list/single-house/single-house.component';
import { DemandFormComponent } from './housing-list/demand-form/demand-form.component';
import { HeaderComponent } from './header/header.component';
import { HousingService } from './services/housing.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HousingListComponent,
    SingleHouseComponent,
    DemandFormComponent,
    HeaderComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
