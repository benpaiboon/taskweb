import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RestHandlerService } from '../services/resthandler.service';
import { ValidateEmailService } from '../services/validateEmail.service';
import { SemanticEventService } from '../services/semanticEvent.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RestHandlerService, ValidateEmailService, SemanticEventService]
})
export class LoginComponent implements OnInit {

  private msg: string;

  constructor(private resthandler: RestHandlerService, private validateEmail: ValidateEmailService, private semanticEvent: SemanticEventService) {
    this.msg = '';
  }

  ngOnInit() {
    this.semanticEvent.dismissableBlock();
  }

  login(loginForm: NgForm) {
    if (loginForm.valid == false) {
      $('#errMsg').removeClass('hidden');
      this.semanticEvent.transition('#errMsg','shake');
      this.msg = 'Your email or password is not valid';
    }
    else {
      if (this.validateEmail.checkEmailPattern(loginForm.value.emailAddr) == false) {
        $('#errMsg').removeClass('hidden');
        this.semanticEvent.transition('#errMsg','shake');
        this.msg = 'Your email is not valid';
      }
      else {
        let user = {
          email: loginForm.value.emailAddr,
          password: loginForm.value.password
        }
        $('#errMsg').hide();
        this.resthandler.postData(user, '/login')
          .map(res => console.log(res))
          .catch(error => Observable.throw(error))
          .subscribe(
          data => {
            this.msg = 'login success';
          },
          error => console.log(error)
          )
      }
    }
  }

}
