import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../../../../models/todo.model';


@Injectable()
export class TodoService {
    private todo: Todo[] = [];
    todoListChanged = new Subject<Todo[]>();
    setToDoList(todo: Todo[]) {
        this.todo = todo;
        this.todoListChanged.next(this.todo.slice());
    }

    getToDoList() {
        return this.todo.slice();
    }
}