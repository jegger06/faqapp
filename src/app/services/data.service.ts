import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Jegger',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is blue',
        hide: true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is PHP',
        hide: true
      },
    ];
  }

  getQuestions() {
    return this.questions;
  }

}
