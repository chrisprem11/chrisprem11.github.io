import { Component, OnInit, HostListener } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "labs";

  ngOnInit() {
    this.getPageContents();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = document.getElementById("labForm").scrollTop;
    console.log("Window scrolled...", number);
  }
  
  onSubmit(){
	console.log("Submitting form.");
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
        console.log("Labs=>>>", this.currentPageContent);
      }
    });
  }

}
