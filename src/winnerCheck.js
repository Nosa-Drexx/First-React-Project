export default function winnerCheck(
  character,
  userCharacter,
  computerCharacter,
  load
) {
  var characterHolder = character.current.children;
  // console.log(characterHolder);
  // User check && AI Check
  function whoWon(Character,who,whoScored){
  if (
    characterHolder[0].innerHTML === Character &&
    characterHolder[1].innerHTML === Character &&
    characterHolder[2].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[0].innerHTML === Character &&
    characterHolder[3].innerHTML === Character &&
    characterHolder[6].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[0].innerHTML === Character &&
    characterHolder[4].innerHTML === Character &&
    characterHolder[8].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[2].innerHTML === Character &&
    characterHolder[4].innerHTML === Character &&
    characterHolder[6].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[2].innerHTML === Character &&
    characterHolder[5].innerHTML === Character &&
    characterHolder[8].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[6].innerHTML === Character &&
    characterHolder[7].innerHTML === Character &&
    characterHolder[8].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[1].innerHTML === Character &&
    characterHolder[4].innerHTML === Character &&
    characterHolder[7].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  } else if (
    characterHolder[3].innerHTML === Character &&
    characterHolder[4].innerHTML === Character &&
    characterHolder[5].innerHTML === Character
  ) {
    return sidePiece(load,who,whoScored);
  }
 
  }
  return whoWon(userCharacter,"You","UserScore") || whoWon(computerCharacter,"AI", "AiScore") || false;
}


function sidePiece(load,who,whoScored) {
  var input;
  if(who === "You"){input = `${who} Won`} else {input = `${who} Won better luck next time` }

  setTimeout(()=>{
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
},500);
  var ScoreUpdate = Number(localStorage.getItem(whoScored)) + 1; // gets updated with new score everytime the user wins
  localStorage.setItem(whoScored, ScoreUpdate);
  //console.log(ScoreUpdate);

  return true;
}

