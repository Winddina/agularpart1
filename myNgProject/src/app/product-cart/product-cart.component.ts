import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cartList:any=[];
  _addcart:any;
  get addcart():any{
return this._addcart;
  }
  @Input() 
  set addcart(val : any){
    if(val){
      console.log(JSON.parse(JSON.stringify(val)));
      this.cartList.push(JSON.parse(JSON.stringify(val)));

    }
   
  }
  constructor() { }


  ngOnInit() {
  }

}
