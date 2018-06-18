import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "mission";

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getPageContents();
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
        console.log("mission = >>>", this.currentPageContent);
      }
    });
  }

}
