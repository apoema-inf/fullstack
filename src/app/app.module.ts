import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FullstackComponent } from './fullstack/fullstack.component';
import { FullstackModule } from './fullstack/fullstack.module';
import { SobreComponent } from './fullstack/sobre/sobre.component';
import { ProcessoSeletivoComponent } from './fullstack/processo-seletivo/processo-seletivo.component';
import { FullstackHomeComponent } from './fullstack/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'fullstack',
    component: FullstackComponent,
    children: [
      { path: 'sobre', component: SobreComponent },
      { path: 'home', component: FullstackHomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'processo-seletivo', component: ProcessoSeletivoComponent }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FullstackModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
