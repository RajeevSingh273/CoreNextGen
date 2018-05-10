
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddEditListComponent } from './add-edit-list/add-edit-list.component';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../todo.service';
import { Todo } from '../../../../../models/todo.model';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})

export class NodejsComponent implements OnInit {
  // public toggelPopUp = false;
  @ViewChild('addMountForm') addMountForm: NgForm;
  todoModel: Todo;
  updatedList: Todo[] = [];
  modalReference: NgbModalRef;
  todoList: Todo = new Todo(0, '', '', 0, 0, new Date(), new Date());

  constructor(private modalService: NgbModal,
    private todoService: TodoService, ) { }

  ngOnInit() {
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      console.log('closed');
    }, (reason) => {
      console.log('dismissed');
    });
  }

  onSubmit(form: NgForm) {
    console.log('adding form values ');
    console.log(form.value);
    let list = this.todoService.getToDoList();

    this.updatedList.push(new Todo(1, form.value.title, form.value.description, 1, 1, new Date(), new Date()));

    // this.todoService.setToDoList(list);
    // this.updatedList = this.todoService.getToDoList();
    console.log(list);
    this.modalReference.close();

  }
  editContent(todo) {
    console.log(todo);
    this.open(todo);
    this.todoList = new Todo(1, todo.title, todo.description, 1, 1, new Date(), new Date());
  }
}
