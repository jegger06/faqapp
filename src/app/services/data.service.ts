import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor(private http: Http) {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'My name is Jegger',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite color?',
    //     answer: 'My favorite color is blue',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite language?',
    //     answer: 'My favorite language is PHP',
    //     hide: true
    //   },
    // ];
  }

  getQuestions() {
    // return this.questions;
    return this.http.get('http://faqapp/api/questions').map(res => res.json());
  }

  addQuestion(question:Question) {
    console.log(question);
    return this.http.post('http://faqapp/api/question/add', question)
      .map(res => res.json());
  }

  removeQuestion(question) {
    let id = question.id;
    return this.http.delete(`http://faqapp/api/question/delete/${id}`)
      .map(res => res.json());
  }

}
