import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { NgOptimizedImage } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
import {StyleClassModule} from 'primeng/styleclass';
import { PrimeNgModule } from './modules/shared/shared.module';
import { MessageService } from 'primeng/api';
import { ListeEvenementsComponent } from './components/admin/liste-evenements/liste-evenements.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
@NgModule({
  declarations: [AppComponent, ListeEvenementsComponent, DashboardComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PanelMenuModule,
    SplitterModule,
    StyleClassModule,
    PrimeNgModule,
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
