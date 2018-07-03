import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-item-liste',
  templateUrl: './item-liste.component.html',
  styleUrls: ['./item-liste.component.css']
})
export class ItemListeComponent implements OnInit {

  constructor(private itemService: ItemService) {
  }

  item;

  ngOnInit() {
    this.itemService.list().subscribe(
      laRep => this.item = laRep
    );
  }
}
