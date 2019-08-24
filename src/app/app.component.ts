import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive5pm';
 persons=["hemant","sumit","amit","suresh"];
 teachers= [
   {name:"hemant",age:23,add:"delhi"},
   {name:"Sumit",age:53,add:"kanpur"},
   {name:"Amit",age:93,add:"Lku"},
   {name:"ramesh",age:73,add:"noida"},
   {name:"ajay",age:33,add:"delhi"}
 ];


 isUserLoggedIn:boolean=true;
}
