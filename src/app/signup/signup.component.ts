import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RestHandlerService } from '../services/resthandler.service';
import { ValidateEmailService } from '../services/validateEmail.service';
import { SemanticEventService } from '../services/semanticEvent.service';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RestHandlerService, ValidateEmailService, SemanticEventService]
})
export class SignupComponent implements OnInit {

  private msg: string;

  constructor(private resthandler: RestHandlerService, private validateEmail: ValidateEmailService, private semanticEvent: SemanticEventService) {
    this.msg = '';
  }

  ngOnInit() {
    this.semanticEvent.dismissableBlock();
  }

  createNewAccount(signupForm: NgForm) {
    if (signupForm.valid == false) {
      $('#errMsg').removeClass('hidden');
      this.semanticEvent.transition('#errMsg', 'shake');
      this.msg = 'Please enter all info';
    }
    else {
      if (this.validateEmail.checkEmailPattern(signupForm.value.emailAddr) == false) {
        $('#errMsg').removeClass('hidden');
        this.semanticEvent.transition('#errMsg', 'shake');
        this.msg = 'Your email is not valid';
      }
      else if (signupForm.value.password !== signupForm.value.repassword) {
        $('#errMsg').removeClass('hidden');
        this.semanticEvent.transition('#errMsg', 'shake');
        this.msg = 'Your password not match with confirm password';
      }
      else {
        let newUser = {
          fullName: signupForm.value.fullName,
          email: signupForm.value.emailAddr,
          password: signupForm.value.password,
          repassword: signupForm.value.repassword
        }
        $("#errMsg").hide();
        // this.msg = '';
        this.resthandler.postData(newUser, '/signup')
          .map(res => console.log(res))
          .catch(error => Observable.throw(error))
          .subscribe(
          data => {
            this.msg = 'save nwe user data to DB';
          },
          error => console.log(error)
          )
      }
    }
  }

}
