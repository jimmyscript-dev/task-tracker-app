import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Task';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTrashCan = faTrashCan;
  constructor() {}
  ngOnInit(): void {}
}
