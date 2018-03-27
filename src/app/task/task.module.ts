/* ANGULAR CORES */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';

/* COMPONENTS*/
import { TaskComponent } from './task.component';

/* SERVICES */
import { AuthGuard } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent,
  ],
  providers: [ 
    AuthGuard
  ]
})
export class TaskModule {}
