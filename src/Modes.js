export function watchUserMovement(pop, character, userCharacter) {
  var characterHolder = character.current.children;
  if (
    (characterHolder[0].innerHTML === userCharacter &&
      characterHolder[1].innerHTML === userCharacter) ||
    (characterHolder[0].innerHTML === userCharacter &&
      characterHolder[2].innerHTML === userCharacter) ||
    (characterHolder[1].innerHTML === userCharacter &&
      characterHolder[2].innerHTML === userCharacter &&
      (characterHolder[0].innerHTML === " " ||
        characterHolder[1].innerHTML === " " ||
        characterHolder[2].innerHTML === " "))
  ) {
    if (characterHolder[0].innerHTML === " ") {
      return (pop = 0);
    } else if (characterHolder[1].innerHTML === " ") {
      return (pop = 1);
    } else if (characterHolder[2].innerHTML === " ") {
      //console.log(pop);
      return (pop = 2);
    }
  } else if (
    (characterHolder[0].innerHTML === userCharacter &&
      characterHolder[3].innerHTML === userCharacter) ||
    (characterHolder[0].innerHTML === userCharacter &&
      characterHolder[6].innerHTML === userCharacter) ||
    (characterHolder[3].innerHTML === userCharacter &&
      characterHolder[6].innerHTML === userCharacter &&
      (characterHolder[0].innerHTML === " " ||
        characterHolder[3].innerHTML === " " ||
        characterHolder[6].innerHTML === " "))
  ) {
    if (characterHolder[0].innerHTML === " ") {
      return (pop = 0);
    } else if (characterHolder[3].innerHTML === " ") {
      return (pop = 3);
    } else if (characterHolder[6].innerHTML === " ") {
      return (pop = 6);
    }
  } else if (
    (characterHolder[0].innerHTML === userCharacter &&
      characterHolder[4].innerHTML === userCharacter) ||
    (characterHolder[0].innerHTML === userCharacter &&
      characterHolder[8].innerHTML === userCharacter) ||
    (characterHolder[4].innerHTML === userCharacter &&
      characterHolder[8].innerHTML === userCharacter &&
      (characterHolder[0].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[8].innerHTML === " "))
  ) {
    if (characterHolder[0].innerHTML === " ") {
      return (pop = 0);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[8].innerHTML === " ") {
      return (pop = 8);
    }
  } else if (
    (characterHolder[2].innerHTML === userCharacter &&
      characterHolder[4].innerHTML === userCharacter) ||
    (characterHolder[2].innerHTML === userCharacter &&
      characterHolder[6].innerHTML === userCharacter) ||
    (characterHolder[4].innerHTML === userCharacter &&
      characterHolder[6].innerHTML === userCharacter &&
      (characterHolder[2].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[6].innerHTML === " "))
  ) {
    if (characterHolder[2].innerHTML === " ") {
      return (pop = 2);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[6].innerHTML === " ") {
      return (pop = 6);
    }
  } else if (
    (characterHolder[2].innerHTML === userCharacter &&
      characterHolder[5].innerHTML === userCharacter) ||
    (characterHolder[2].innerHTML === userCharacter &&
      characterHolder[8].innerHTML === userCharacter) ||
    (characterHolder[5].innerHTML === userCharacter &&
      characterHolder[8].innerHTML === userCharacter &&
      (characterHolder[2].innerHTML === " " ||
        characterHolder[5].innerHTML === " " ||
        characterHolder[8].innerHTML === " "))
  ) {
    if (characterHolder[2].innerHTML === " ") {
      return (pop = 2);
    } else if (characterHolder[5].innerHTML === " ") {
      return (pop = 5);
    } else if (characterHolder[8].innerHTML === " ") {
      return (pop = 8);
    }
  } else if (
    (characterHolder[6].innerHTML === userCharacter &&
      characterHolder[7].innerHTML === userCharacter) ||
    (characterHolder[6].innerHTML === userCharacter &&
      characterHolder[8].innerHTML === userCharacter) ||
    (characterHolder[7].innerHTML === userCharacter &&
      characterHolder[8].innerHTML === userCharacter &&
      (characterHolder[6].innerHTML === " " ||
        characterHolder[7].innerHTML === " " ||
        characterHolder[8].innerHTML === " "))
  ) {
    if (characterHolder[6].innerHTML === " ") {
      return (pop = 6);
    } else if (characterHolder[7].innerHTML === " ") {
      return (pop = 7);
    } else if (characterHolder[8].innerHTML === " ") {
      return (pop = 8);
    }
  } else if (
    (characterHolder[1].innerHTML === userCharacter &&
      characterHolder[4].innerHTML === userCharacter) ||
    (characterHolder[1].innerHTML === userCharacter &&
      characterHolder[7].innerHTML === userCharacter) ||
    (characterHolder[4].innerHTML === userCharacter &&
      characterHolder[7].innerHTML === userCharacter &&
      (characterHolder[1].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[7].innerHTML === " "))
  ) {
    if (characterHolder[1].innerHTML === " ") {
      return (pop = 1);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[7].innerHTML === " ") {
      return (pop = 7);
    }
  } else if (
    (characterHolder[3].innerHTML === userCharacter &&
      characterHolder[4].innerHTML === userCharacter) ||
    (characterHolder[3].innerHTML === userCharacter &&
      characterHolder[5].innerHTML === userCharacter) ||
    (characterHolder[4].innerHTML === userCharacter &&
      characterHolder[5].innerHTML === userCharacter &&
      (characterHolder[3].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[5].innerHTML === " "))
  ) {
    if (characterHolder[3].innerHTML === " ") {
      return (pop = 3);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[5].innerHTML === " ") {
      return (pop = 5);
    }
  }
  return pop;
}

export function computerTriesToWin(pop, character, computerCharacter) {
  var characterHolder = character.current.children;
  if (
    (characterHolder[0].innerHTML === computerCharacter &&
      characterHolder[1].innerHTML === computerCharacter) ||
    (characterHolder[0].innerHTML === computerCharacter &&
      characterHolder[2].innerHTML === computerCharacter) ||
    (characterHolder[1].innerHTML === computerCharacter &&
      characterHolder[2].innerHTML === computerCharacter &&
      (characterHolder[0].innerHTML === " " ||
        characterHolder[1].innerHTML === " " ||
        characterHolder[2].innerHTML === " "))
  ) {
    if (characterHolder[0].innerHTML === " ") {
      return (pop = 0);
    } else if (characterHolder[1].innerHTML === " ") {
      return (pop = 1);
    } else if (characterHolder[2].innerHTML === " ") {
      return (pop = 2);
    }
  } else if (
    (characterHolder[0].innerHTML === computerCharacter &&
      characterHolder[3].innerHTML === computerCharacter) ||
    (characterHolder[0].innerHTML === computerCharacter &&
      characterHolder[6].innerHTML === computerCharacter) ||
    (characterHolder[3].innerHTML === computerCharacter &&
      characterHolder[6].innerHTML === computerCharacter &&
      (characterHolder[0].innerHTML === " " ||
        characterHolder[3].innerHTML === " " ||
        characterHolder[6].innerHTML === " "))
  ) {
    if (characterHolder[0].innerHTML === " ") {
      return (pop = 0);
    } else if (characterHolder[3].innerHTML === " ") {
      return (pop = 3);
    } else if (characterHolder[6].innerHTML === " ") {
      return (pop = 6);
    }
  } else if (
    (characterHolder[0].innerHTML === computerCharacter &&
      characterHolder[4].innerHTML === computerCharacter) ||
    (characterHolder[0].innerHTML === computerCharacter &&
      characterHolder[8].innerHTML === computerCharacter) ||
    (characterHolder[4].innerHTML === computerCharacter &&
      characterHolder[8].innerHTML === computerCharacter &&
      (characterHolder[0].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[8].innerHTML === " "))
  ) {
    if (characterHolder[0].innerHTML === " ") {
      return (pop = 0);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[8].innerHTML === " ") {
      return (pop = 8);
    }
  } else if (
    (characterHolder[2].innerHTML === computerCharacter &&
      characterHolder[4].innerHTML === computerCharacter) ||
    (characterHolder[2].innerHTML === computerCharacter &&
      characterHolder[6].innerHTML === computerCharacter) ||
    (characterHolder[4].innerHTML === computerCharacter &&
      characterHolder[6].innerHTML === computerCharacter &&
      (characterHolder[2].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[6].innerHTML === " "))
  ) {
    if (characterHolder[2].innerHTML === " ") {
      return (pop = 2);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[6].innerHTML === " ") {
      return (pop = 6);
    }
  } else if (
    (characterHolder[2].innerHTML === computerCharacter &&
      characterHolder[5].innerHTML === computerCharacter) ||
    (characterHolder[2].innerHTML === computerCharacter &&
      characterHolder[8].innerHTML === computerCharacter) ||
    (characterHolder[5].innerHTML === computerCharacter &&
      characterHolder[8].innerHTML === computerCharacter &&
      (characterHolder[2].innerHTML === " " ||
        characterHolder[5].innerHTML === " " ||
        characterHolder[8].innerHTML === " "))
  ) {
    if (characterHolder[2].innerHTML === " ") {
      return (pop = 2);
    } else if (characterHolder[5].innerHTML === " ") {
      return (pop = 5);
    } else if (characterHolder[8].innerHTML === " ") {
      return (pop = 8);
    }
  } else if (
    (characterHolder[6].innerHTML === computerCharacter &&
      characterHolder[7].innerHTML === computerCharacter) ||
    (characterHolder[6].innerHTML === computerCharacter &&
      characterHolder[8].innerHTML === computerCharacter) ||
    (characterHolder[7].innerHTML === computerCharacter &&
      characterHolder[8].innerHTML === computerCharacter &&
      (characterHolder[6].innerHTML === " " ||
        characterHolder[7].innerHTML === " " ||
        characterHolder[8].innerHTML === " "))
  ) {
    if (characterHolder[6].innerHTML === " ") {
      return (pop = 6);
    } else if (characterHolder[7].innerHTML === " ") {
      return (pop = 7);
    } else if (characterHolder[8].innerHTML === " ") {
      return (pop = 8);
    }
  } else if (
    (characterHolder[1].innerHTML === computerCharacter &&
      characterHolder[4].innerHTML === computerCharacter) ||
    (characterHolder[1].innerHTML === computerCharacter &&
      characterHolder[7].innerHTML === computerCharacter) ||
    (characterHolder[4].innerHTML === computerCharacter &&
      characterHolder[7].innerHTML === computerCharacter &&
      (characterHolder[1].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[7].innerHTML === " "))
  ) {
    if (characterHolder[1].innerHTML === " ") {
      return (pop = 1);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[7].innerHTML === " ") {
      return (pop = 7);
    }
  } else if (
    (characterHolder[3].innerHTML === computerCharacter &&
      characterHolder[4].innerHTML === computerCharacter) ||
    (characterHolder[3].innerHTML === computerCharacter &&
      characterHolder[5].innerHTML === computerCharacter) ||
    (characterHolder[4].innerHTML === computerCharacter &&
      characterHolder[5].innerHTML === computerCharacter &&
      (characterHolder[3].innerHTML === " " ||
        characterHolder[4].innerHTML === " " ||
        characterHolder[5].innerHTML === " "))
  ) {
    if (characterHolder[3].innerHTML === " ") {
      return (pop = 3);
    } else if (characterHolder[4].innerHTML === " ") {
      return (pop = 4);
    } else if (characterHolder[5].innerHTML === " ") {
      return (pop = 5);
    }
  }
  return pop;
}
