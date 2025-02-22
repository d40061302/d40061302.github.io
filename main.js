console.log('JS en el main.js');

window.onload = inicializar;



function inicializar() {

    var playButton = document.getElementById
        ('playButton');
    var mainVideo = document.getElementById
        ('mainVideo');

    playButton.onclick = onPlayButton;


    function onPlayButton() {
        console.log(mainVideo.paused);
        if (mainVideo.paused) {
            mainVideo.play();
            playButton.innerHTML = 'Pause';

        } else {
            mainVideo.pause();
            playButton.innerHTML = 'Play';
        }

    }

    console.dir(mainVideo);

}