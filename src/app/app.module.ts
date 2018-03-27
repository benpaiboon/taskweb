// Ng Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Component Modules
import { TaskModule } from './task/task.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

// Services
import { RestHandlerService } from './services/resthandler.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TaskModule,
    AppRoutingModule
  ],
  providers: [RestHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
