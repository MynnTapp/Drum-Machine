import "./DrumMachine.css";
import { useState } from "react";

export default function DrumMachine() {
  const [drumSound, setDrumsound] = useState("");
  const handleClickQ = () => {
    setDrumsound("Heater 1");
    const music = document.getElementById("Q");
    music.play();
  };
  const handleClickW = () => {
    setDrumsound("Heater 2");
    const music = document.getElementById("W");
    music.play();
  };

  const handleClickE = () => {
    setDrumsound("Heater 3");
    const music = document.getElementById("E");
    music.play();
  };

  const handleClickA = () => {
    setDrumsound("Heater 4");
    const music = document.getElementById("A");
    music.play();
  };
  const handleClickS = () => {
    setDrumsound("Clap");
    const music = document.getElementById("S");
    music.play();
  };

  const handleClickD = () => {
    setDrumsound("Open-HH");
    const music = document.getElementById("D");
    music.play();
  };

  const handleClickZ = () => {
    setDrumsound("Kick-n'-Hat");
    const music = document.getElementById("Z");
    music.play();
  };

  const handleClickX = () => {
    setDrumsound("Kick");
    const music = document.getElementById("X");
    music.play();
  };

  const handleClickC = () => {
    setDrumsound("Closed-HH");
    const music = document.getElementById("C");
    music.play();
  };

  return (
    <div id="drum-machine">
      <h1>Drum-Machine</h1>

      <div id="move-button">
        <button id="Heater 1" className="drum-pad" accessKey="Q" type="button" name="drum-1" onKeyDown={handleClickQ} onClick={handleClickQ}>
          <audio class="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>Q
        </button>

        <button id="heater 2" className="drum-pad" accessKey="W" type="button" name="drum-2" onKeyDown={handleClickW} onClick={handleClickW}>
          <audio class="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio> W
        </button>

        <button id="heater 3" className="drum-pad" accessKey="E" type="button" name="drum-3" onKeyDown={handleClickE} onClick={handleClickE}>
          <audio class="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio> E
        </button>
        <button id="heater 4" className="drum-pad" accessKey="A" type="button" name="drum-4" onKeyDown={handleClickA} onClick={handleClickA}>
          <audio class="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio> A
        </button>
        <button id="Clap" className="drum-pad" accessKey="S" type="button" name="drum-5" onKeyDown={handleClickS} onClick={handleClickS}>
          <audio class="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio> S
        </button>

        <button id="Open-HH" className="drum-pad" accessKey="D" type="button" name="drum-6" onKeyDown={handleClickD} onClick={handleClickD}>
          <audio class="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio> D
        </button>

        <button id="Kick n' -Hat" className="drum-pad" accessKey="Z" type="button" name="drum-7" onKeyDown={handleClickZ} onClick={handleClickZ}>
          <audio class="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio> Z
        </button>

        <button id="Kick" className="drum-pad" accessKey="X" type="button" name="drum-8" onKeyDown={handleClickX} onClick={handleClickX}>
          <audio class="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio> X
        </button>

        <button id="Closed-HH" className="drum-pad" accessKey="C" type="button" name="drum-9" onKeyDown={handleClickC} onClick={handleClickC}>
          <audio class="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio> C
        </button>
      </div>

      <p id="display">{drumSound}</p>
    </div>
  );
}
