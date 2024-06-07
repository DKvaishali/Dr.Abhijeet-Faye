import React from 'react'

const PeopleAlsoAsk = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var questions = document.querySelectorAll('.question');
        
        questions.forEach(function(question) {
            question.addEventListener('click', function() {
                var answerId = this.getAttribute('data-answer');
                var answer = document.getElementById(answerId);
                
                // Toggle the display of the answer
                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        });
    });
  return (
    <div>
      <div class="container">
        <div class="question" data-answer="answer1">Does Google use React JS?</div>
        <div class="answer" id="answer1">Yes, Google uses React JS in some of its applications.</div>

        <div class="question" data-answer="answer2">Can people see my React code?</div>
        <div class="answer" id="answer2">Yes, if your React code is deployed to a public website, anyone can see it using browser developer tools.</div>

        <div class="question" data-answer="answer3">How to hide the JavaScript source code from browser viewing?</div>
        <div class="answer" id="answer3">You cannot completely hide JavaScript code from users, but you can obfuscate it to make it harder to read.</div>
    </div>
    </div>
  )
}

export default PeopleAlsoAsk
