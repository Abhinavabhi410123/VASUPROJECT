import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from 'src/app/services/my.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent {
  table;
  bookingForm: any;
  registrationForm = this.fb.group({
    id:[''],
    fromDestination: ['', Validators.required],
    toDestination: ['', Validators.required],
    
  });
constructor(private getm:MyService,private fb: FormBuilder,private _router:Router){

}
ngOnInit(){
  this.getm.getbookings().subscribe((res)=>{
    this.table=res;
  })
    // this.bookingForm = this.fb.group({
    //   bookingId: ['', [Validators.required]],
    //   fromDestination: ['', [Validators.required]],
    //   toDestination: ['', [Validators.required]]
    // });
}
ondelete(data){
this.getm.deletebooking(data).subscribe((res1)=>{
  if(res1){
alert("Deleted Sucessfully")
  }
  else{
    alert("record not deleted")
  }
});
}
c:boolean=false;
remo=true
updatedetails(data){
  this.getm.updatebooking(data).subscribe((res2)=>{
    if(res2){
      alert("updated sucessfully")
      this.ngOnInit()
    }
    else{
      alert("update not sucessfull")
    }
  });
}
  }
 

