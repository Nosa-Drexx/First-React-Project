import { useRef, memo, useEffect, useState } from "react";
import winnerCheck from "./winnerCheck";
import allfilled from "./aTie";
import { watchUserMovement, computerTriesToWin } from "./Modes";

function Buttons({ allChar }) {
  const gameContain = useRef();
  const [buttons, setButtons] = useState([]);
  const [counter, setCounter] = useState(0);
  const buttonarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var winner = false;

  //eslint-disable-next-line
  useEffect(() => {
    setButtons(gameContain.current.children);

    localStorage.setItem("User", allChar.char.userCharacter);
    localStorage.setItem("Ai", allChar.char.Ai);

    if (localStorage.getItem("UserScore") === null) {
      // avoid reassignment every time the page refreshes.
      localStorage.setItem("UserScore", 0);
      localStorage.setItem("AiScore", 0);
      // default value when user plays for the very first time or user resets their data
    }
  });

  useEffect(() => {
    //component will not re-render when alert box pops up so for that seconds the variable winner servers it purpose which is to prevent the function allfilled from running when there is a winner and all the boxes are filled .

    //eslint-disable-next-line
    winner = winnerCheck(
      gameContain,
      allChar.char.userCharacter,
      allChar.char.Ai,
      allChar.load
    );

    if (winner === false) {
      allfilled(gameContain, allChar.load);
    }
  }, [counter]); //eslint-disable-line

  function hold(e) {
    console.log(e.target.innerHTML);
    if (allChar.char.userCharacter === null) {
      window.alert(`Haven't chosen a character please do`);
    }
    else if (e.target.innerHTML === " " ) {
      e.target.innerHTML = allChar.char.userCharacter;

      setCounter((prev) => {
        return prev + 1;
      });
      if (counter < 8) {
        // prevent from running when all are boxes filled up
        recursiveChecker();
      }
    } else  {
      alert(`Box is already filled please select an empty box`);
    }
  }

  //helps shuffle a an to get random values to help recursuve checker pick a random box every time it is called.
  function AIplays() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    function shuffleArray(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    shuffleArray(arr);
    var pop = arr.pop();

    if (localStorage.getItem("Mode") === "Medium") {
      pop = watchUserMovement(pop, gameContain, allChar.char.userCharacter);
    }
    if (localStorage.getItem("Mode") === "Hard") {
      pop = watchUserMovement(pop, gameContain, allChar.char.userCharacter);
      pop = computerTriesToWin(pop, gameContain, allChar.char.Ai);
    }

    return pop;
  }

  /*A recusion function to get the box to place value of AI and check if the box is already filled is so recalls itself again , 
if still filled keeps on recalling itself */
  function recursiveChecker() {
    var val = AIplays();

    if (buttons[val].innerHTML === " ") {
      //console.log(val);
      buttons[val].innerHTML = allChar.char.Ai;

      setCounter((prev) => {
        return prev + 1;
      });
    } else {
      recursiveChecker();
    }
  }

  return (
    <div ref={gameContain} id="game-container">
      {buttonarr.map((keys) => {
        return (
          <button
            key={keys}
            tabIndex="1"
            id={keys}
            className="button"
            onClick={hold}
          > </button>
        );
      })}
    </div>
  );
}
export default memo(Buttons);
