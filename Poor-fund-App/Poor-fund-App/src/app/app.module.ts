import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
// FOR bootstrap
import { AppBootstrapModule } from './app-bootstrap.module';
// AUTHENTICATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
// FOR FILE UPLOAD
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './consumers/consumers.upload.service';
import { ConsumerService } from './consumers/consumers.consumer-service';
// FOR MATERIAL
import 'hammerjs';
import { NgMaterialModule } from './app.material';
import { ViewCandidatesComponent } from './view-candidates/view-candidates.component';
import { ViewCandidateService } from './view-candidates/view-candidates.service';
import { GrantedListComponent } from './granted-list/granted-list.component';
import { NotGrantedListComponent } from './not-granted-list/not-granted-list.component';
import { GrantingInformationComponent } from './granting-information/granting-information.component';
import { AddMeAsDonorsComponent } from './add-me-as-donors/add-me-as-donors.component';
import { CurrentYearDonorsComponent } from './current-year-donors/current-year-donors.component';
import { LastYearDonorsComponent } from './last-year-donors/last-year-donors.component';
import { TotalDonorsComponent } from './total-donors/total-donors.component';
import { DonorsGrantingInformationComponent } from './donors-granting-information/donors-granting-information.component';
import { GrantedListService } from './granted-list/granted-list.service';
import { NotGrantedListService } from './not-granted-list/not-granted-list.service';
import { ManageGrantedListComponent } from './manage-granted-list/manage-granted-list.component';
import { ManageGrantedService } from './manage-granted-list/manage-granted-list.service';
import { ManageNotGrantedListComponent } from './manage-not-granted-list/manage-not-granted-list.component';
import { ManageNotGrantedListService } from './manage-not-granted-list/manage-not-granted-list.service';
import { DonorService } from './add-me-as-donors/add-me-as-donors.service';
import { TotalDonorService } from './total-donors/total-donors.service';
import { LastYaerTotalDonorService } from './last-year-donors/last-year-donors.service';
import { CurrentYaerTotalDonorService } from './current-year-donors/current-year-donors.service';
import { CurrentYearGranredListComponent } from './current-year-granred-list/current-year-granred-list.component';
import { LastYearGrantedListComponent } from './last-year-granted-list/last-year-granted-list.component';
import { CurrentYearNotGrantedListComponent } from './current-year-not-granted-list/current-year-not-granted-list.component';
import { LastYearNotGrantedListComponent } from './last-year-not-granted-list/last-year-not-granted-list.component';
import { LastYearGrantedListService } from './last-year-granted-list/last-year-granted-list.service';
import { CurrentYearGrantedListService } from './current-year-granred-list/current-year-granred-list.service';
import { LastYearNotGrantedListService } from './last-year-not-granted-list/last-year-not-granted-list.service';
import { CurrentYearNotGrantedListService } from './current-year-not-granted-list/current-year-not-granted-list.service';
import { ManageDonorsComponent } from './manage-donors/manage-donors.component';
import { ManageCandidatesComponent } from './manage-candidates/manage-candidates.component';
import { ManageCandidatesService } from './manage-candidates/manage-candidates.service';
import { NgxBootstrapModule } from './app.ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap';
import { ManageDonorService } from './manage-donors/manage-donors.service';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { MainPurposeComponent } from './main-purpose/main-purpose.component';
import { StaffDirectoryComponent } from './staff-directory/staff-directory.component';
import { DevelopersComponent } from './developers/developers.component';
import { HistoryOfBangladeshComponent } from './history-of-bangladesh/history-of-bangladesh.component';
import { ManageStaffService } from './manage-staff/manage-staff.service';
import { StaffDirectoryService } from './staff-directory/staff-directory.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsumersComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    ViewCandidatesComponent,
    ManageGrantedListComponent,
    GrantedListComponent,
    NotGrantedListComponent,
    GrantingInformationComponent,
    AddMeAsDonorsComponent,
    CurrentYearDonorsComponent,
    LastYearDonorsComponent,
    TotalDonorsComponent,
    DonorsGrantingInformationComponent,
    ManageGrantedListComponent,
    ManageNotGrantedListComponent,
    CurrentYearGranredListComponent,
    LastYearGrantedListComponent,
    CurrentYearNotGrantedListComponent,
    LastYearNotGrantedListComponent,
    ManageDonorsComponent,
    ManageCandidatesComponent,
    ManageStaffComponent,
    MainPurposeComponent,
    StaffDirectoryComponent,
    DevelopersComponent,
    HistoryOfBangladeshComponent
  ],
  imports: [
    BrowserModule,
    // FOR BOOTSTRAP
    AppBootstrapModule,
    // FOR AUTHENTICATION
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    routes,
    // FOR FILE UPLOAD
    HttpClientModule,
    // FOR NG MATERIAL
    NgMaterialModule,
    // FOR REACTIVE FORM MODULE
    ReactiveFormsModule,
    // FOR NGX BOOTSTRAP MODULE
     NgxBootstrapModule
  ],
  providers: [AuthGuard, AngularFireAuth, UploadFileService, ConsumerService, ViewCandidateService
  , ManageGrantedService, GrantedListService, NotGrantedListService, ManageNotGrantedListService,
DonorService, TotalDonorService, LastYaerTotalDonorService, CurrentYaerTotalDonorService,
LastYearGrantedListService, CurrentYearGrantedListService, LastYearNotGrantedListService
, CurrentYearNotGrantedListService, ManageCandidatesService, ManageDonorService, ManageStaffService,
StaffDirectoryService,
// For Modal
BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

