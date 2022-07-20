export default function allfilled(character, load) {
  var characterHolder = character.current.children;
  if (
    characterHolder[0].innerHTML !== " " &&
    characterHolder[1].innerHTML !== " " &&
    characterHolder[2].innerHTML !== " " &&
    characterHolder[3].innerHTML !== " " &&
    characterHolder[4].innerHTML !== " " &&
    characterHolder[5].innerHTML !== " " &&
    characterHolder[6].innerHTML !== " " &&
    characterHolder[7].innerHTML !== " " &&
    characterHolder[8].innerHTML !== " "
  ) {
    boxfilled(load);
  }
}

function boxfilled(load) {
  setTimeout(()=>{ 
  alert(`Its a Tie, all boxes are filled, refreshing...`);

  load.current.style.display = "flex";
  setTimeout(() => {
    window.location.reload();
  }, 1000);
},500)
}
