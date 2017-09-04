import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question:Question;
  @Output() questionRemove = new EventEmitter<Question>();

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  removeQuestion(question:Question) {
    this.questionRemove.emit(question);
  }


}
