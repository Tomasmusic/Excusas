/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = [" ate", " peed", " crushed", " broke"];
  let what = [" my homework", " the keys", " the car"];
  let when = [
    " before the class",
    " right on time",
    " when I finished",
    " during my lunch",
    " while I was praying"
  ];
  var aleatorioWho = Math.floor(Math.random() * 3);
  var aleatorioAction = Math.floor(Math.random() * 3);
  var aleatorioWhat = Math.floor(Math.random() * 3);
  var aleatorioWhen = Math.floor(Math.random() * 4);

  console.log(
    who[aleatorioWho] +
      " " +
      action[aleatorioAction] +
      " " +
      what[aleatorioWhat] +
      " " +
      when[aleatorioWhen]
  );
};
