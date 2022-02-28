import { HtmlParser, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { todoList } from './app-models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  ngOnInit() {
  }
  todo: todoList[] = [
    {
      name: "Hit the gym",
      class: false
    }, {
      name: "Pay bills",
      class: true
    }, {
      name: "Meet George",
      class: false
    }, {
      name: "Buy eggs",
      class: false
    }
  ]

  public onClickClose(index: number) {
    // Click on a close button to hide the current list item
    this.todo.splice(index, 1);
  }


  checkNum: number = 0;
  public addCheck(index: number) {
    this.todo[index].class = !this.todo[index].class;
  }


  // Create a new list item when clicking on the "Add" button
  inputValue: string = "";
  public newElement() {
    if (this.inputValue === '') {
      alert("You must write something!");
      return
    } else {
      const todoCase: todoList = {
        name: this.inputValue,
        class: false
      }
      this.todo.push(todoCase);
    }
  }

}
