import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  constructor(private service:UserRegistrationService) { }
users:any;
firstName:string="";
  ngOnInit(): void {
    let res= this.service.getRegistration();
    res.subscribe((data)=>this.users=data)
  }
public deleteUser(id:number){
  let res= this.service.deleteUser(id);
    res.subscribe((data)=>this.users=data)
}
public findUserByName(){
  let res= this.service.findUserByName(this.firstName);
    res.subscribe((data)=>this.users=data)
}
}
