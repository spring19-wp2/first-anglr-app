import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brents first Angular Application';

  quizzes = [
      { name: "Quiz 1", canDelete: false }
    , { name: "Quiz 2", canDelete: false }
    , { name: "Quiz 3", canDelete: false }
  ];

  //note that the ... is the spread operator
  //is this a property or a function? 
  addFunnyQuiz = () => this.quizzes = 
        [{ name: "Modern Funny Quiz", canDelete: true } , ...this.quizzes];

  //addQuiz = () => window.alert(this.newQuizName);

  addQuiz = () => {
    console.log(this.newQuizName);
    this.quizzes = [...this.quizzes, { name: this.newQuizName, canDelete: true }];
    this.newQuizName = "";
  };
  
  newQuizName = "nonsense";

  deleteQuiz(quizToDelete) {
    let count = 0;
    //console.log(q);
    count = this.quizzes.entries.length;
    console.log(count);
    // Transform the view model... In other words, reinitialize 
    // this.quizzes to a new array without the quiz to delete. Which
    // is passed in as an argument or parameter, who cares...
    this.quizzes = this.quizzes.filter(x => x !== quizToDelete);
  }
}
