
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddEditListComponent } from './add-edit-list/add-edit-list.component';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})

export class NodejsComponent implements OnInit {
  // public toggelPopUp = false;
  @ViewChild('addMountForm') addMountForm: NgForm;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log('closed');
    }, (reason) => {
      console.log('dismissed');
    });
  }

  onSubmit(form: NgForm) {
    console.log('adding form values ');
    console.log(form.value);

  }
