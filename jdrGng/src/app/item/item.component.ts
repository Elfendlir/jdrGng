import { Component, OnInit } from '@angular/core';
import {IAlert} from "../personnage/personnage.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemForm: FormGroup;
  formSubmitted = false;
  alert: IAlert;

  constructor(private fb: FormBuilder, private itemService: ItemService) { }

  ngOnInit() {
    this.itemForm = this.fb.group({
      'nomItem': [ '' ,
        Validators.compose([Validators.required])],
      'description': '',
    });
  }

  submitForm() {
    this.formSubmitted = true;

    if (this.itemForm.valid ) {
      this.itemService.add(this.itemForm.value).subscribe(
        itemFromDb => {
          console.log(itemFromDb);
        }
      );
      this.alert = {
        id: 3,
        type: 'success',
        message: 'L objet a bien été créé !',
      };
    }
  }
}
