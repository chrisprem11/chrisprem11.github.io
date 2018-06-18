import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {


  
  private amenities = [
    { name: "Internet", icon: "fa fa-wifi" },
    { name: "Office Supplies", icon: "fa fa-briefcase" },
    { name: "Phone Booths", icon: "fa fa-phone" },
    { name: "Bike Storage", icon: "fa fa-motorcycle" },
    { name: "IT Support", icon: "fa fa-question-circle" },
    { name: "24/7 Building Access", icon: "fa fa-building" },
    { name: "Global Service", icon: "fa fa-globe" },
    { name: "24/7 Messages", icon: "fa fa-envelope-open" },
    { name: "Internet", icon: "fa fa-wifi" },
    { name: "Office Supplies", icon: "fa fa-briefcase" },
    { name: "Phone Booths", icon: "fa fa-phone" },
    { name: "Bike Storage", icon: "fa fa-motorcycle" },
    { name: "IT Support", icon: "fa fa-question-circle" },
    { name: "24/7 Building Access", icon: "fa fa-building" },
    { name: "Global Service", icon: "fa fa-globe" },
    { name: "24/7 Messages", icon: "fa fa-envelope-open" }
  ];


  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "plans";
  public questions : any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getPageContents();
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
        console.log("plans=>>>", this.currentPageContent);
      }
    });
  }

}
