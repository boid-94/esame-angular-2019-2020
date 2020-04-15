import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'toDoList';
  model = {
    addItem: ''
  }

  list = [];

  onSubmit(addItem: any) {
    console.log(this.model.addItem)
    this.list.push(addItem)
  }

  remove(addedItem: number) {
    let index = this.list.indexOf(addedItem)
    this.list.splice(index, 1)
  }

  ngOnInit() { }
}