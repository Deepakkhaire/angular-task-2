import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  changeDetails(eve : any){
    console.log(eve);
    if(eve.target.value === 'email'){
      // console.log('email');
      document.getElementById("emailContainer")?.classList.remove("d-none");
      document.getElementById("phoneContainer")?.classList.add('d-none');
    }else if(eve.target.value === 'phone'){
      document.getElementById("phoneContainer")?.classList.remove('d-none');
      document.getElementById("emailContainer")?.classList.add("d-none");
    }else{
      document.getElementById("phoneContainer")?.classList.add('d-none');
      document.getElementById("emailContainer")?.classList.add("d-none");
    }
  }
}
