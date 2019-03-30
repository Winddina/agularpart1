import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
@Input() selectedProduct:any;
  constructor() { }

  cart :any ;

  addCart(){
    this.cart = (this.selectedProduct);
    console.log(this.cart);
  }

  ngOnInit() {
  }

}
