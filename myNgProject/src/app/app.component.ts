import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNgProject';
  name:string = "นาย ปพนชัย พงษ์เจริญ";
  Grade:number = 49;

  studentlist=[
    {
    studentid:"5921602647",
    name:"Paponchai Pongchareon",
    weight:59,
    height:175
  },
{
  studentid:"5921602702",
    name:"shopishe awadac",
    weight:80,
    height:190
},
{
  studentid:"5921602561",
    name:"adam ranger",
    weight:62,
    height:152
}
];
constructor(){

  this.studentlist.map((object,index)=>{
    let obj:any=object;
    obj.bmi=(object.weight/((object.height/100)*(object.height/100))).toFixed(2);
    return obj;
  });
  



// let student= "student in function";
//console.log(this.student);
console.log(this.studentlist);

}
}
