export default function winnerCheck(
  character,
  userCharacter,
  computerCharacter,
  load
) {
  var characterHolder = character.current.children;
  // console.log(characterHolder);
  // User check
  if (
    characterHolder[0].innerHTML === userCharacter &&
    characterHolder[1].innerHTML === userCharacter &&
    characterHolder[2].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[0].innerHTML === userCharacter &&
    characterHolder[3].innerHTML === userCharacter &&
    characterHolder[6].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[0].innerHTML === userCharacter &&
    characterHolder[4].innerHTML === userCharacter &&
    characterHolder[8].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[2].innerHTML === userCharacter &&
    characterHolder[4].innerHTML === userCharacter &&
    characterHolder[6].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[2].innerHTML === userCharacter &&
    characterHolder[5].innerHTML === userCharacter &&
    characterHolder[8].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[6].innerHTML === userCharacter &&
    characterHolder[7].innerHTML === userCharacter &&
    characterHolder[8].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[1].innerHTML === userCharacter &&
    characterHolder[4].innerHTML === userCharacter &&
    characterHolder[7].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  } else if (
    characterHolder[3].innerHTML === userCharacter &&
    characterHolder[4].innerHTML === userCharacter &&
    characterHolder[5].innerHTML === userCharacter
  ) {
    return sidePieceUser(load);
  }

  /// AI Check
  else if (
    characterHolder[0].innerHTML === computerCharacter &&
    characterHolder[1].innerHTML === computerCharacter &&
    characterHolder[2].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[0].innerHTML === computerCharacter &&
    characterHolder[3].innerHTML === computerCharacter &&
    characterHolder[6].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[0].innerHTML === computerCharacter &&
    characterHolder[4].innerHTML === computerCharacter &&
    characterHolder[8].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[2].innerHTML === computerCharacter &&
    characterHolder[4].innerHTML === computerCharacter &&
    characterHolder[6].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[2].innerHTML === computerCharacter &&
    characterHolder[5].innerHTML === computerCharacter &&
    characterHolder[8].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[6].innerHTML === computerCharacter &&
    characterHolder[7].innerHTML === computerCharacter &&
    characterHolder[8].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[1].innerHTML === computerCharacter &&
    characterHolder[4].innerHTML === computerCharacter &&
    characterHolder[7].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  } else if (
    characterHolder[3].innerHTML === computerCharacter &&
    characterHolder[4].innerHTML === computerCharacter &&
    characterHolder[5].innerHTML === computerCharacter
  ) {
    return sidePieceAi(load);
  }
  return false;
}

function sidePieceUser(load) {
  setTimeout(()=>{
  if (window.confirm(`You Won`)) {
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
  var userScoreUpdate = Number(localStorage.getItem("UserScore")) + 1; // gets updated with new score everytime the user wins
  localStorage.setItem("UserScore", userScoreUpdate);
  //console.log(userScoreUpdate);

  return true;
}

function sidePieceAi(load) {
  setTimeout(()=>{
  if (window.confirm(`AI Won better luck next time`)) {
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
  var computerScoreUpdate = Number(localStorage.getItem("AiScore")) + 1; // gets updated with new score everytime the user wins
  localStorage.setItem("AiScore", computerScoreUpdate);

  return true;
}
