export default function winnerCheck(
  character,
  userCharacter,
  computerCharacter,
  load
) {
  var characterHolder = character.current.children;
  // console.log(characterHolder);
  // User check && AI Check
  function whoWon(Character, who, whoScored) {
    if (
      characterHolder[0].innerHTML === Character &&
      characterHolder[1].innerHTML === Character &&
      characterHolder[2].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 0, 1, 2);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[0].innerHTML === Character &&
      characterHolder[3].innerHTML === Character &&
      characterHolder[6].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 0, 3, 6);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[0].innerHTML === Character &&
      characterHolder[4].innerHTML === Character &&
      characterHolder[8].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 0, 4, 8);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[2].innerHTML === Character &&
      characterHolder[4].innerHTML === Character &&
      characterHolder[6].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 2, 4, 6);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[2].innerHTML === Character &&
      characterHolder[5].innerHTML === Character &&
      characterHolder[8].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 2, 5, 8);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[6].innerHTML === Character &&
      characterHolder[7].innerHTML === Character &&
      characterHolder[8].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 6, 7, 8);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[4].innerHTML === Character &&
      characterHolder[1].innerHTML === Character &&
      characterHolder[7].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 4, 1, 7);
      return sidePiece(load, who, whoScored);
    } else if (
      characterHolder[3].innerHTML === Character &&
      characterHolder[4].innerHTML === Character &&
      characterHolder[5].innerHTML === Character
    ) {
      winnerColorAndEffect(characterHolder, 3, 4, 5);
      return sidePiece(load, who, whoScored);
    }
  }

  function winnerColorAndEffect(
    characterHolder,
    position1,
    position2,
    position3
  ) {
    characterHolder[position1].style.backgroundColor = "rgba(255, 255, 0, 0.5)";
    characterHolder[position2].style.backgroundColor = "rgba(255, 255, 0, 0.5)";
    characterHolder[position3].style.backgroundColor = "rgba(255, 255, 0, 0.5)";
  }

  return (
    whoWon(userCharacter, "You", "UserScore") ||
    whoWon(computerCharacter, "AI", "AiScore") ||
    false
  );
}

function sidePiece(load, who, whoScored) {
  var input;
  if (who === "You") {
    input = `${who} Won`;
  } else {
    input = `${who} Won better luck next time`;
  }

  setTimeout(() => {
    if (window.confirm(input)) {
      load.current.style.display = "flex";
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      alert(`about to restart End Game`);

      load.current.style.display = "flex";
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, 500);
  var ScoreUpdate = Number(localStorage.getItem(whoScored)) + 1; // gets updated with new score everytime the user wins
  localStorage.setItem(whoScored, ScoreUpdate);
  //console.log(ScoreUpdate);

  return true;
}
