import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouteService} from '../route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  routeForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private cs: RouteService) { }

  ngOnInit() {
    this.routeForm = this.fb.group({
      'scene': [ ' ' ,
        Validators.compose([Validators.required])]
    });
  }

  submitForm() {
    this.formSubmitted = true;

    if (this.routeForm.valid ) {
      this.cs.add(this.routeForm.value).subscribe(
        routeFromDb => {
          console.log(routeFromDb);
        }
      );
    }
  }
}
