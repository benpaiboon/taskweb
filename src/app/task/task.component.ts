import { Component, OnInit } from '@angular/core';
import { MyTasks } from './mock-data/myTasks';
import { MyOrders } from './mock-data/myOrders';
import { MyHistory } from './mock-data/myHistory';
declare let $: any;

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private tasks = MyTasks;
  private orders = MyOrders;
  private history = MyHistory;

  private taskObj: any;
  private taskTitle: string;
  private taskDesc: string;

  constructor() {
    this.taskTitle = '';
    this.taskTitle = '';
  }

  ngOnInit() {
    $(document).ready(function () {
      //Usage Sidebar
      $('#mainMenus').click(function () {
        $('.ui.sidebar').sidebar('toggle');
      });

      //Usage Bottom Tab
      $('.menu .item').tab();

      //Usage add new task model
      // $('#addTaskBtn').click(function () {
      //   $('.ui.tiny.modal').modal('show');
      // });

      //Usage search button
      $('#searchBtn').dropdown();
      $('#taskStatus').dropdown();
    });
  }

  //Show Add Modal
  showAddModal() {
    this.taskTitle = '';
    this.taskDesc = '';
    $('.ui.tiny.modal').modal('show');
  }

  //Add New Task
  addTask() {
    this.taskObj = {
      taskName: this.taskTitle,
      taskImg: 'assets/images/mock.png',
      owner: 'Paiboon Sirawit',
      created: new Date(),
      description: this.taskDesc,
      contributor: [
        'assets/images/person1.png',
        'assets/images/person2.png',
        'assets/images/person3.png'
      ]
    }

    this.tasks.push(this.taskObj);
  }

}
