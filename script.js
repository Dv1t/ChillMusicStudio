function play( snd ,time) {
	var audioCtx = new AudioContext();
 
	var request = new XMLHttpRequest();
	request.open( "GET", snd, true );
	request.responseType = "arraybuffer";
	request.onload = function () {
		let audioData = request.response;
 
		audioCtx.decodeAudioData(
			audioData,
			function ( buffer ) {
        let smp = audioCtx.createBufferSource();
        let gainNode = audioCtx.createGain();
				smp.buffer = buffer;
				smp.connect( audioCtx.destination );
        smp.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        smp.start(time);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        smp.stop(2+time);
			},
			function ( e ) {
				alert( "Error with decoding audio data" + e.err );
			}
		);
	};
	request.send();
}
 
//URL до аудио файла 
//play( "./piano/a1.ogg" );



const pianoFolder = {
  A1:"./piano/a1.ogg",
  B1:"./piano/b1.ogg",
  C1:"./piano/c1.ogg",
  D1:"./piano/d1.ogg",
  E1:"./piano/e1.ogg",
  F1:"./piano/f1.ogg",
  G1:"./piano/g1.ogg",
  A2:"./piano/a2.ogg",
  B2:"./piano/b2.ogg",
  C2:"./piano/c2.ogg",
  D2:"./piano/d2.ogg",
  E2:"./piano/e2.ogg",
  F2:"./piano/f2.ogg",
  G2:"./piano/g2.ogg",
  A3:"./piano/a3.ogg",
  B3:"./piano/b3.ogg",
  C3:"./piano/c3.ogg",
  D3:"./piano/d3.ogg",
  E3:"./piano/e3.ogg",
  F3:"./piano/f3.ogg",
  G3:"./piano/g3.ogg",
  A4:"./piano/a4.ogg",
  B4:"./piano/b4.ogg",
  C4:"./piano/c4.ogg",
  D4:"./piano/d4.ogg",
  E4:"./piano/e4.ogg",
  F4:"./piano/f4.ogg",
  G4:"./piano/g4.ogg",
  A5:"./piano/a5.ogg",
  B5:"./piano/b5.ogg",
  C5:"./piano/c5.ogg",
  D5:"./piano/d5.ogg",
  E5:"./piano/e5.ogg",
  F5:"./piano/f5.ogg",
  G5:"./piano/g5.ogg",
  A6:"./piano/a6.ogg",
  B6:"./piano/b6.ogg",
  C6:"./piano/c6.ogg",
  D6:"./piano/d6.ogg",
  E6:"./piano/e6.ogg",
  F6:"./piano/f6.ogg",
  G6:"./piano/g6.ogg",
  A7:"./piano/a7.ogg",
  B7:"./piano/b7.ogg",
  C7:"./piano/c7.ogg",
  D7:"./piano/d7.ogg",
  E7:"./piano/e7.ogg",
  F7:"./piano/f7.ogg",
  G7:"./piano/g7.ogg"
};
let guitarFolder = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D%236.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C7.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D7.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A4.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_E5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D%236.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_E6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C7.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D7.mp3'
];
document.querySelector("#btnPlay").addEventListener('click', () => {
  
  let notesInput = document.querySelector("#notes").value;
  let notes = [];
  let freqs = [];
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

  notes.forEach((not)=>{
    play(pianoFolder[not],delay);
    delay++;
  });
});