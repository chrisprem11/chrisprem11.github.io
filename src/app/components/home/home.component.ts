import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "home";

  width: any = 0;
  imageSrc: any = "";
  constructor(private router: Router, private dataService: DataServiceService) {

    this.width = window.innerWidth;
  }

  public locations: any;
  private showLocations: boolean = false;

  ngOnInit() {
    this.getPageContents();

    let index = 0;
    let reverse = true;
    setInterval(() => {
      if (index >= 0 && index < this.currentPageContent.carouselImages.length)
        this.imageSrc = this.currentPageContent.carouselImages[index].name;
      if (index < this.currentPageContent.carouselImages.length && reverse) {
        index++;
        document.getElementById("right").click();
      } else {
        reverse = false;
        document.getElementById("left").click();
        index--;
        if (index == 0) {
          reverse = true;
        }
      }
    }, 10000);

    this.locations = this.dataService.getLocations();
    console.log("Places => ", this.locations);
  }


  moveToContactPage() {
    this.router.navigate(['/contact']);
  }

  openNav() {
    this.showLocations = true;
    document.getElementById("myNav").style.width = "100%";

    let eles:any  = document.getElementsByClassName("nav-link");
    for(let i =0; i< eles.length; i++) {
      eles[i].className = eles[i].className.replace("text-light", "text-dark");
    }
  }

  closeNav() {
    this.showLocations = false;
    document.getElementById("myNav").style.width = "0%";

    let eles:any  = document.getElementsByClassName("nav-link");
    for(let i =0; i< eles.length; i++) {
      eles[i].className = eles[i].className.replace("text-dark", "text-light");
    }
  }

  openSelectedLocation(location, office) {
    console.log("SelectedItem => ", location.id, office.id);
    this.router.navigate(['/location', { countyId: location.id, officeId: office.id }]);
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
        console.log("Home=>>>", this.currentPageContent);
      }
    });
  }

}
