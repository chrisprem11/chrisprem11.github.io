import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "enterprise";


  ngOnInit() {
    this.getPageContents();
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
        console.log("Enterprise=>>>", this.currentPageContent);
      }
    });
  }

}
