import {Component} from '@angular/core';
import {Student} from '../../models/student.model';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  public itUniverStudents: Student[] = [];

  constructor() {
    this.initializeStudents();
  }

  private initializeStudents() {
    this.itUniverStudents.push(
      new Student('Petr', 'Ivanov', 21),
      new Student('Ivan', 'Petrov', 25),
      new Student('Igor', 'Egorov', 24),
    );
  }
}
