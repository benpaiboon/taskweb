import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { TaskComponent }    from './task.component';
import { AuthGuard }                from './services/auth.service';

const taskRoutes: Routes = [
  {
    path: 'task',
    component: TaskComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
            { path: '', component: TaskComponent},
//          { path: 'pause-reason', component: PauseReasonComponent},
//          { path: '', redirectTo:"user-management", pathMatch:"full" }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule {}
