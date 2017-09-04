import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Question[];

  constructor(public dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getQuestions().subscribe(res => {
      console.log(res);
      this.questions = res;
    });
  }

  addQuestion(question:Question) {
    this.dataService.addQuestion(question).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    });
  }

  removeQuestion(question:Question) {
    this.dataService.removeQuestion(question).subscribe(res => {
      console.log(res);
      let i = this.questions.indexOf(question);
      this.questions.splice(i, 1);
    });
  }

}
