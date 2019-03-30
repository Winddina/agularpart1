import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList=[{
    pId:"0001",
    pName:"แปลงสีฟัน",
    pCost:200,
    qty:0
  },{
    pId:"0002",
    pName:"แก้วน้ำ",
    pCost:10,
    qty:0
  },{
    pId:"0003",
    pName:"ยาสีฟัน",
    pCost:20,
    qty:0
  }
 
];
selectedProduct:any;
selectProduct(p){
  this.selectedProduct =p;

}
  
constructor(){

 
  
  



// let student= "student in function";
//console.log(this.student);


}
}
