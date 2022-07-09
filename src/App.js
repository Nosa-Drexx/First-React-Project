import "./style.css";
import Buttons from "./Buttons";
import { useState, useRef, useEffect } from "react";

function App() {
  const x = useRef();
  const o = useRef();
  const US = useRef();
  const AI = useRef();
  const modeHolder = useRef();
  const load = useRef();
  const intro = useRef();
  const [char, setChar] = useState({ userCharacter: null, Ai: null });
  const [clearLog, setClearLog] = useState(false);
  const [modes, setModes] = useState("Easy");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (char.userCharacter === null) {
      intro.current.innerHTML = `Pick a character`; //initial value on first render
    } else {
      intro.current.innerHTML = `Your Character is ${char.userCharacter} AI is ${char.Ai}`; //value after picking a character
    }
  }, [char]);

  function selectorX() {
    setChar({
      ...char,
      userCharacter: x.current.innerHTML,
      Ai: o.current.innerHTML,
    });

    x.current.style.display = "none";
    o.current.style.display = "none";
    modeHolder.current.style.display = "none";
  }
  function selectorO() {
    setChar({
      ...char,
      userCharacter: o.current.innerHTML,
      Ai: x.current.innerHTML,
    });

    x.current.style.display = "none";
    o.current.style.display = "none";
    modeHolder.current.style.display = "none";
    //console.log(localStorage);
  }

  function clearUserData() {
    if (
      window.confirm(
        ` ⚠Are you sure you want to rest your Data, ❗Data can't be gotten back`
      )
    ) {
      localStorage.clear();
      setClearLog(true);
      localStorage.setItem("Mode", "Easy");
    }
  }
  useEffect(() => {
    if (counter !== 1) {
      //prevent reassignment of localStorage on reload
      localStorage.setItem("Mode", modes);
    }
  }, [counter]); //eslint-disable-line

  function easy() {
    setCounter(1);
    setModes("Easy");
    localStorage.setItem("Mode", "Easy");
  }
  function medium() {
    setCounter(2);
    setModes("Medium");
    localStorage.setItem("Mode", "Medium");
  }
  function hard() {
    setCounter(3);
    setModes("Hard");
    localStorage.setItem("Mode", "Hard");
  }

  useEffect(() => {
    if (clearLog) {
      AI.current.innerHTML = `AI &nbsp; &nbsp; &nbsp; &nbsp; ${0}`;
      US.current.innerHTML = `User &nbsp; &nbsp${0}`;
    }
  }, [clearLog]);


  return (
    <>
      <p className="modeInfo">
        ❗ Your Current Difficulty Is{" "}
        <span className="red">
          {localStorage.getItem("Mode").toUpperCase()}
        </span>
      </p>
      <div ref={modeHolder} className="modeHolder">
        {" "}
        <button onClick={easy} className="modes">
          Easy
        </button>{" "}
        <button onClick={medium} className="modes">
          Medium
        </button>{" "}
        <button onClick={hard} className="modes">
          Hard
        </button>
      </div>
      <div className="mainContainer">
        <div className="userData">
          <div id="intro" ref={intro}></div>
          <div>
            <button
              className="user-character x"
              id="x"
              onClick={selectorX}
              ref={x}
              tabIndex="1"
            >
              <span className="fa-solid fa-xmark" aria-hidden="true"></span>
            </button>
            <button
              className="user-character o"
              onClick={selectorO}
              ref={o}
              tabIndex="1"
            >
              <span className="fa-solid fa-o" aria-hidden="true"></span>
            </button>
          </div>
          <br />
          <div>
            <div id="userScore" ref={US} className="score">
              User &nbsp; &nbsp;
              {localStorage.getItem("UserScore")}
            </div>
            <div id="AIScore" ref={AI} className="score">
              AI &nbsp; &nbsp; &nbsp; &nbsp;
              {localStorage.getItem("AiScore")}
            </div>
          </div>
        </div>
        <Buttons allChar={{ x, o, char, modes, load }} />
        <button className="reset-data-Btn" onClick={clearUserData}>
          Click to reset usersData
        </button>
      </div>
      <div ref={load} className="loading-container">
        <div className="loading"></div>
      </div>
    </>
  );
}

export default App;
