//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (q) {
      if (q !== question) {
        q.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".question-btn");
// const questions = document.querySelectorAll(".question");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   btn.addEventListener("click", function () {
//     questions.forEach(function (q) {
//       if (q !== question) {
//         q.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });
