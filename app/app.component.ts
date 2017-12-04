import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>ToDo List</h1>
  </div>
  <h3>{{month}}/{{day}}/{{year}} {{milliseconds}}</h3>
  <h3>{{listHeader}}<h3>
  <ul>
    <li *ngFor="let task of tasks">{{task.description}}</li>
    <button (click)="addTask()">Make New Task</button>
    <p>{{name2}}</p>
    <form>
      <input [value]="name" (input)="name = $event.target.value" type="text">
      <input [(ngModel)]="name2" [ngModelOptions]="{standalone: true}" type="text">
    </form>
  </ul>
  `
})

export class AppComponent {
  public listHeader: string = 'Stuff For Things To Happen';
  public month: number;
  public day: number;
  public year: number;
  public milliseconds: number;
  public tasks: Task[] = [];
  public name: string;
  public name2: string;

  constructor() {
    var currentTime = new Date();
    this.month = currentTime.getMonth() + 1;
    this.day = currentTime.getDate();
    this.year = currentTime.getFullYear();
    this.milliseconds = currentTime.getTime();
    this.name = "";
    this.name2 = "";

    this.tasks.push(new Task("Do a thing and yes."));
    this.tasks.push(new Task("Do another thing and also a yes."));
    this.tasks.push(new Task("Do some thing and but not it a yes. It a no."));
    this.tasks.push(new Task("Finish monday work before monday lunch. Yes."));
  }

  addTask() {
    this.tasks.push(new Task(this.name));
    this.name = "";
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
}
