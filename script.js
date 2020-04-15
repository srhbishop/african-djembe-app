// e stands for event

window.addEventListener('keydown', function(e) {
    // selects the audio, and the [data-key=${e.keyCode}] selects the relevant data-key such as 65, 83, etc. Backticks are template literals
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // selects the div .key for visual transformation 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; // stops function from running if you press a key w/ no audio attached to it
    audio.currentTime = 0; // rewinds to start
    audio.play();
    key.classList.add('playing');

});


function removeTransition(e) {
    if(e.propertyName !=='transform') return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('.drum-sound');

// able to play the drum with clicks

keys.forEach((key, index) => {
    key.addEventListener('click', function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        key.classList.add('playing');
    });
});

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Thank you to Wes Bos and his Javascript 30 course, the originator of this JS code! Learning a lot