import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeensComponent } from './teens/teens.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MarriageComponent } from './marriage/marriage.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teens', component: TeensComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'marriage', component: MarriageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TeensComponent,
    HomeComponent,
    KidsComponent,
    MarriageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
