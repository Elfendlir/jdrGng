import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  listItems;
  item;
  itemForm: FormGroup;

  constructor(private itemService: ItemService,
              private fb: FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.itemService.list().subscribe(
      listeDesItems => this.listItems = listeDesItems
    )
    this.itemForm = this.fb.group({
      'name': ['',
        Validators.compose(
          [Validators.required]
        )],
      'description': ''
    });
  }

  deleteItem(item) {
    this.itemService.delete(item.id).subscribe(
      () => {
        console.log('deleted !');
      }
    );
  }

  open(content, item) {
    this.item = item;
    this.modalService.open(content).result.then((result) => {}, (reason) => {});
  }

  getListItems() {
    this.itemService.list().subscribe(
      listeDesItems => this.listItems = listeDesItems
    );
  }
  submitForm() {
    if (this.itemForm.valid)
    {
      console.log(this.item);
      this.item.nomItem = this.itemForm.value.name;
      this.item.description = this.itemForm.value.description;
      this.itemService.update(this.item).subscribe(
        () => {
          this.getListItems();
        }
      );
    }
  }
}
