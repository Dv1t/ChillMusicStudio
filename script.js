function GetPianoFreq(key) {
    var controctave = {
            'C': 32.703,
            'С#': 34.648,
            'D': 36.708,
            'D#': 38.891,
            'E': 41.203,
            'F': 43.654,
            'F#': 46.249,
            'G': 48.999,
            'G#': 51.913,
            'A': 55,
            'A#': 58.27,
            'B': 61.735,
        },
        note = key[0].toUpperCase(),
        octave = parseInt(key[key.length - 1]),
        sharp = key[1] == '#' ? true : false;
    if (sharp) {
        return controctave[note + '#'] * Math.pow(2, octave - 1);
    } else {
        return controctave[note] * Math.pow(2, octave - 1);
    }
}


function play(frq, time) {
    let audioCtx = new AudioContext();
    let
    osc = audioCtx.createOscillator();
    osc.frequency.value = frq;
    osc.connect(audioCtx.destination);
    let gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.001,  time+0.5);
	osc.start(time);
	osc.stop(time+0.5);
	    
	 
}

//обработка нажатия на кнопку play - при нажатии считываются введёные ноты и выбранный инструмент, для каждой ноты вызывается play 
document.querySelector("#btnPlay").addEventListener('click', (event) => {
    const thisLine = event.target.parentNode;
    let volume = thisLine.querySelector('#volume').value;
    let speed = thisLine.querySelector('#speed').value;
    let loop = thisLine.querySelector('#loop').checked;
    console.log(loop);
    console.log(volume);
    let notesInput = thisLine.querySelector("#notes").value;
    let notes = [];
    let curNote = "";
    for (let i = 0; i < notesInput.length; i++) {

        if (notesInput[i] != " ") {
            curNote += notesInput[i];
        } else {
            notes.push(curNote);
            curNote = "";
        }
    }
    notes.push(curNote);
    console.log(notes);

    let delay = 0;
    let instruments = document.querySelector('#instruments');

    if (instruments.value == "piano") {

        notes.forEach((not) => {
            play(GetPianoFreq(not), delay);
            delay++;
        });
    }
    if (instruments.value == "bluesGuitar") {
        console.log(instruments.value);
        notes.forEach((not) => {
            play(bluesGuitarFolder[not], delay);
            delay++;
        });
    }
    if (instruments.value == "rockGuitar") {
        notes.forEach((not) => {
            play(rockGuitarFolder[not], delay);
            delay++;
        });
    }
});
//end обработка нажатия на кнопку play

//добавление дорожки
function addLine() {
    let btnsPlus = document.querySelectorAll('#btnPlus');
    const line = document.querySelector('.line').cloneNode(true);
    const linesContainer = document.querySelector('.linesContainer');
    btnsPlus.forEach(function (btnPlus) {
        btnPlus.addEventListener('click', () => {
            linesContainer.append(line);
            addLine();
        });
    });
}
addLine();
//end добавление дорожки