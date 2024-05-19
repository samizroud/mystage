import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../components/commun/home/home.component';
import { NavBarComponent } from '../components/commun/nav-bar/nav-bar.component';
import { SideBarComponent } from '../components/commun/side-bar/side-bar.component';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { NosStagiairesComponent } from '../components/nos-stagiaires/nos-stagiaires.component';
import { NosEntreprisesComponent } from '../components/nos-entreprises/nos-entreprises.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { SplitterModule } from 'primeng/splitter';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { FooterComponent } from '../components/commun/footer/footer.component';
import { PrimeNgModule } from '../modules/shared/shared.module';
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    NosStagiairesComponent,
    NosEntreprisesComponent,
    FeedbackComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    DropdownModule,
    DataViewModule,
    PanelMenuModule,
    PanelModule,
    MenuModule,
    PaginatorModule,
    RouterModule,
    TableModule,
    TagModule,
    SplitterModule,
    PrimeNgModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
