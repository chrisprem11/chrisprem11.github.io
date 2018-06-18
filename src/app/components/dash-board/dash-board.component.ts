import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  public locations: any;
  form: FormGroup;
  private user = {firstName : undefined};

  constructor(private router: Router, private dataService: DataServiceService, public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', Validators.compose([Validators.minLength(4),Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }


  ngOnInit() {
    this.locations = this.dataService.getLocations();
    console.log("Places => ", this.locations);
  }

  onSubmit(){
    console.log("Form=>", this.form.value);
  }

  moveToContactPage() {
    this.router.navigate(['/contact']);
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  openSelectedLocation(location, office) {
    console.log("SelectedItem => ", location.id, office.id);
    this.router.navigate(['/location', { countyId: location.id, officeId: office.id }]);
  }

}
