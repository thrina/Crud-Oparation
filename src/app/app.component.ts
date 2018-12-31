import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 employee =["RATURI MOHAN I LAL I ","KARAN SINGH ","GANGULI DEBASISH","ANEJA ASHOK "]
 newItem='';
//  ngOnInit(){
//   this.pushEmp();
//  }
 pushEmp(){
   if(this.newItem !=''){    
     this.employee.push(this.newItem);
     console.log('succus');
     this.newItem='';
   }
  else if(this.newItem ==''){
   this.employee=this.employee;
    console.log("No Records ");   
  }
 }
 removeEmp(ind){
   this.employee.splice(ind,1);

 }

}
