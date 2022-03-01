import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user:User){
    return this.http.post("http://localhost:8080/insert",user)
  }
  public getRegistration(){
    return this.http.get("http://localhost:8080/select")
  }

  public deleteUser(id:number){
    return this.http.delete("http://localhost:8080/delete/"+id);
  }
  
  public findUserByName(firstName:string){
    return this.http.get("http://localhost:8080/selectByFirstName/"+firstName);
  }
  }
