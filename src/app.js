/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Generate an excuse on page load
  generateExcuse();
  document.querySelector(".btn").addEventListener("click", function() {
    generateExcuse();
  });
};

function generateExcuse() {
  let who = [
    "A dog on steroids",
    "My ninety year old grandma",
    "A muscular tattooed",
    "A baby eating eagle",
    "A wild house cat",
    "A machete weilding monkey",
    "Two gang affiliated rats",
    "A magical flying midget",
    "A shadow creature",
    "Florida Man"
  ];
  let action = [
    "ate",
    "destroyed",
    "crushed",
    "broke",
    "soaked",
    "threw",
    "banished",
    "burned",
    "obliterated",
    "hid",
    "burried"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my pet rat",
    "my laptop",
    "my schedule",
    "my work assignment"
  ];
  let when = [
    "before class",
    "while I was sleeping",
    "while I was exercising",
    "during lunch",
    "while I was praying",
    "during my shower",
    "while I was cooking"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  document.getElementById("excuse").textContent = excuse;
}
