import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {
  public search=""
  public add = false
  public edit = false
  public first!:string
  public second!:string
  public num!:string
  public index!:number
  public ContactArr:IContact[] = [];
public type=true;
public item!:string;
  constructor() { }

  ngOnInit(): void {
  }

  AddContact(){
    this.add=true
  }

  EditFunction(i:number){
    this.index=i 
    this.first=this.ContactArr[i].name
    this.second=this.ContactArr[i].surname
    this.num=this.ContactArr[i].number
    this.edit=true;
    this.add=true;
    
  }

  DeleteFunction(i:number){
    this.ContactArr.splice(i,1)
  }


  SaveChange(name:string,surname:string,phone:string){
    let ob = {
      name:name,
      surname:surname,
      number:phone
    }
    if(this.edit){
      this.ContactArr[this.index]=ob
      this.edit=false
    } else{
      this.ContactArr.unshift(ob);
    }
    this.add=false
    this.reset()
  }

  reset(){
    this.first='';
    this.second='';
    this.num=''
  }

  sort(item:string,e:Event){
    this.item = item
    this.type=!this.type
  }
}
export interface IContact{
  name:string,
  surname:string,
  number:string 
}