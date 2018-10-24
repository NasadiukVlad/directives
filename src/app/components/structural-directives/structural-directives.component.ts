import {Component} from '@angular/core';
import {Student} from '../../models/student.model';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {

  public switchValue = 2;
  public checkBoxValue = true;
  public secondCheckboxValue = false;
  public studentsList: Student[] = [];
  public customStructureCondition = true;

  constructor() {
    this.initializeStudents();
    console.log(this.studentsList);
  }

  private initializeStudents() {
    this.studentsList.push(
      new Student('Ivan', 'Petrov', 27),
      new Student('Petr', 'Ivanov', 20),
      new Student('Igor', 'Egorov', 35)
    );
  }
}




