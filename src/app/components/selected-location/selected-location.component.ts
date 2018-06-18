import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../../data/data-service.service';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.css']
})
export class SelectedLocationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataServiceService) { }

  public pageDetails: any;
  public currentPageContent: any;
  private currentPageName = "selectedLocation";
  public numberOfPeople: number;
  private sub: any;
  public selectedCountryId: any;
  public selectedOfficeId: any;
  public selectedCountry: any
  public selectedOffice: any;
  public locations: any;
  public user = {};
  private officeDetails = [
    { name: "Galaxy", address: "#43, Electronic City, KA- 560102", image: "assets/images/workspace1.jpg" },
    { name: "Office Space", address: "#67, Electronic City, KA- 560102", image: "assets/images/workspace2.jpg" },
    { name: "Work Env", address: "#77, Electronic City, KA- 560102", image: "assets/images/workspace3.jpg" },
    { name: "New Lands", address: "#89, Electronic City, KA- 560102", image: "assets/images/workspace4.jpg" },
  ];

  lat: number = 12.9716;
  lng: number = 77.5946;

  ngOnInit() {
    this.getPageContents();
    this.locations = this.dataService.getLocations();
    this.sub = this.route.params.subscribe(params => {
      this.selectedCountryId = params['countyId'];
      this.selectedOfficeId = params['officeId'];
      if (this.locations) {
        this.locations.forEach(country => {
          if (country.id == this.selectedCountryId) {
            this.selectedCountry = country;
            country.offices.forEach(office => {
              if (office.id == this.selectedOfficeId) {
                this.selectedOffice = office;
                this.selectedOffice.officeDetails = this.officeDetails;
              }
            });
          }
        });
      }
    });
  }

  getPageContents() {
    this.pageDetails = this.dataService.getPageContents();
    this.pageDetails.forEach(element => {
      if (element.name == this.currentPageName) {
        this.currentPageContent = element.pageContents;
      }
    });
  }

  increasePeople() {
    if (this.numberOfPeople >= 0) {
      this.numberOfPeople = Number(this.numberOfPeople) + 1;
    }
  }

  decreasePeople() {
    if (this.numberOfPeople > 0) {
      this.numberOfPeople = Number(this.numberOfPeople) - 1;
    }
  }

  moveToDashboard() {
    this.router.navigate(['']);
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
