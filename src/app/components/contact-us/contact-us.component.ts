import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data/data-service.service';
import { ToasterService } from 'angular2-toaster';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private contactUsForm: FormGroup;

  constructor(private dataService: DataServiceService, private router: Router, private formBuilder: FormBuilder,
    public toasterService: ToasterService, private snotifyService: SnotifyService) {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      companyName: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      contact: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
      interestedIn: ['', Validators.compose([Validators.required])],
      notes: ['', Validators.compose([Validators.maxLength(150), Validators.pattern('[a-zA-Z0-9]*')])]
    });
  }

  public user = {
    name: undefined, companyName: undefined, email: undefined,
    contact: undefined, interestedIn: undefined, notes: undefined
  };

  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "contactUs";

  ngOnInit() {
    this.getPageContents();
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
        console.log("Contact=>>>", this.currentPageContent);
      }
    });
  }

  presentToast(cssClass, message) {
    this.toasterService.pop(cssClass, message);
  }

  moveToDashboard() {
    this.router.navigate(['']);
  }

  onSubmit() {
    console.log("SubmitMethod..")
    this.user.name = this.contactUsForm.value.name;
    this.user.companyName = this.contactUsForm.value.companyName;
    this.user.email = this.contactUsForm.value.email;
    this.user.contact = this.contactUsForm.value.contact;
    this.user.interestedIn = this.contactUsForm.value.interestedIn;
    this.user.notes = this.contactUsForm.value.notes;
    this.presentToast("success", "Submitting Data. Please Wait...");
    if (this.user && this.user.email) {
      this.dataService.sendEmail(this.user)
        .subscribe(res => {
          console.log("Mail Res => ", res);
          this.presentToast("success", "Data submitted. Thank you !");
          //alert("Data submitted. Thank you !");
        }, err => {
          console.log("Mail Err => ", err);
          this.presentToast("warning", "Something went wrong.");
          //alert("Something went wrong.");
        });
    }
  }

}
