import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProcessoSeletivoComponent } from './processo-seletivo/processo-seletivo.component';
import { BrowserModule } from '@angular/platform-browser';
import { SobreComponent } from './sobre/sobre.component';
import { FullstackComponent } from './fullstack.component';
import { FullstackHomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'fullstack',
    component: FullstackComponent,
    children: [
      { path: 'sobre', component: SobreComponent },
      { path: 'home', component: FullstackHomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'processo-seletivo', component: ProcessoSeletivoComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProcessoSeletivoComponent,
    SobreComponent,
    FullstackComponent,
    FullstackHomeComponent
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class FullstackModule { }
