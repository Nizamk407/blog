import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'Brush';
  disabledBox = true;
  show = 'Blue';
  color = 'Blue';
  detail = "";
  err=false;
  int="Nizamuddin";
  users=[
    {
      name:'Nizam',
      age:30,
      address:'Govandi'
    },
    {
      name:'Asad',
      age:40,
      address:'Mankhurd'
    },
    {
      name:'Aman',
      age:14,
      address:'Kurla'
    }
  ]
  getUserValue(value: any)
  {
    console.warn(value)
    this.detail=value;
  }
  updateColor()
  {
    this.color="yellow"
  }
  // data = [
  //   {
  //     name: "Nizam",
  //     age: 13
  //   },
  //   {
  //     name: "Nizam",
  //     age: 13
  //   },
  //   {
  //     name: "Nizam",
  //     age: 13
  //   }
  // ]

  enableBox() {
    this.disabledBox = false;
  }
}
