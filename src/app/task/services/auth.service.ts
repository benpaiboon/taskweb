import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { RestHandlerService } from '../services/resthandler.service'; 
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {

  }

  canActivate() {
    //let token = localStorage.getItem('token');
    let token = true;
    console.log('AUTH SERVICE');

    if(token){
      return true;
    }else {
      this.router.navigate(['/login']);

      return false;
    }
  }
}
