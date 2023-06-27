import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-form',
  templateUrl: './radio-form.component.html',
  styleUrls: ['./radio-form.component.css']
})
export class RadioFormComponent {

  changeRadioDetails(eve : any){
    // console.log(eve.target.value);

    if(eve.target.value === 'email1'){
      // console.log('email');
      document.getElementById("emailContainerForRadio")?.classList.remove("d-none");
      document.getElementById("phoneContainerForRadio")?.classList.add('d-none');
    }else if(eve.target.value === 'phone1'){
      document.getElementById("phoneContainerForRadio")?.classList.remove('d-none');
      document.getElementById("emailContainerForRadio")?.classList.add("d-none");
    }
  }
  

}
