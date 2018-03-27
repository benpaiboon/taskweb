import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class SemanticEventService {

  constructor() { }

  // #Dismissable Block
  // #A message that the user can choose to hide
  dismissableBlock() {
    $(document).ready(function () {
      $('.message .close')
        .on('click', function () {
          $(this)
            .closest('.message')
            .transition('fade');
        });
    });
  }

  // #Transition
  // #A transition is an animation usually used to move content in or out of view
  transition(htmlElement:string, effect:string){
    $(document).ready(function () {
      $(htmlElement).transition(effect);
    });
  }
}