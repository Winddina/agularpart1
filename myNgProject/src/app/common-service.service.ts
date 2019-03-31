import { Injectable } from '@angular/core';
import{TransferHttpService} from "@gorniv/ngx-transfer-http";
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private prot ='3001';
  private rootPath = 'http://localhost:'+this.prot;
  private getDataPath = this.rootPath+'/test/getData'
  private postDataPath = this.rootPath
                        +'/user/postData';
  private getUserDetailPath = this.rootPath
                        +'/user/getDetail';
  private updateNotePath = this.rootPath
                        +'/user/updateNoteName';                      
  parameter: any ={
     parms:{},
     responseType: "json"
  }

  constructor(private http: TransferHttpService) 
  {}
  updateNoteName(body)
  {
    console.log(body);
    
    return this.http.post(this.updateNotePath, body)
  }
  getData(param){
    this.parameter.params = param;
    return this.http.get(this.getDataPath,this.parameter);
  }
  getUserDetail(param){
    this.parameter.params = param;
    return this.http
    .get(this.getUserDetailPath, this.parameter);
  }
  

}
