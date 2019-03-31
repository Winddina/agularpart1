import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  request = {
    key1:0,
    key2:0
  }
constructor(private service: CommonServiceService){
  this.getUserDetail();
}
getData(){
  this.service.getData(this.request).subscribe((response:any)=>{
    console.log(response.result)
    this.result = response.result;
  });
  }
  studentId = "5721602287";
  userDetail:any = [
    {
      id : "",
      name: ""
  }
    
  ];
  noteDetail:any = [];
  errorMsg="";
  updateNoteName(){
    let request= {
      id: this.userDetail.id,
      noteId: Number(this.editNoteDetail.note_id),
      name : this.editNoteDetail.name
    }
    console.log(request);
    
    this.service.updateNoteName(request).subscribe((response: any)=>{
      
      if(response.success)
      {
        this.errorMsg = "แก้ไขสำเร็จ"
        this.getUserDetail();
      }
      else{
        this.errorMsg = "แก้ไขไม่สำเร็จ"
      }
      setTimeout(()=>{
        this.errorMsg = ''
      },2000)

    })
    
  }
   getUserDetail(){
     let request = {
       id: this.studentId
     }
     this.service.getUserDetail(request).subscribe((response:any)=>{
       this.userDetail = response.user[0]
       this.noteDetail = response.noteDetail[0].note_type
       console.log(this.userDetail, this.noteDetail);
     });
   }
   listDetail:any =[];
   selectNote(list){
     this.listDetail = list
   }
   editNoteDetail: any = {
     note_id: "",
     name: ""
   };

   editNote(note){
    //  console.log(note);
     this.editNoteDetail = JSON.parse(JSON.stringify(note))
console.log("123132",this.editNoteDetail)
   }
}
