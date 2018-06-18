import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SelectedLocationComponent } from './components/selected-location/selected-location.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { LabsComponent } from './components/labs/labs.component';
import { PlansComponent } from './components/plans/plans.component';
import { MissionComponent } from './components/mission/mission.component';


const appRoutes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'location', component: SelectedLocationComponent },
  { path: 'labs', component: LabsComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'plans', component: PlansComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashBoardComponent,
    ContactUsComponent,
    SelectedLocationComponent,
    EnterpriseComponent,
    LabsComponent,
    PlansComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AngularFontAwesomeModule, Ng2CarouselamosModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, ToasterModule.forRoot(), SnotifyModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCluh-F5sIdZSOik2ZDjAfQP6u4azgoDqE'
    })
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
