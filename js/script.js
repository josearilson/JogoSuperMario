mario = document.querySelector('.mario');
tubo = document.querySelector('.tubo');
cogumelo = document.querySelector('.cogumelo');
grama = document.querySelector('.grama');
audioJogo = new Audio('./audio/musicaJogo.mp3');
audioGameOver = new Audio('./audio/gameover.mp3');
piso1 = document.querySelector('.piso-1');
piso2 = document.querySelector('.piso-2');
piso3 = document.querySelector('.piso-3')



/*================ Função Start ===================*/

const start = () => {

    tubo.classList.add('tubo-Animacao');
    mario.src = './images/mario.gif';
    mario.style.width = '90px';
    mario.style.marginLeft = '50px';

    function gramaAnimacao() {
        grama.classList.add('grama-Animacao');
    } setInterval(gramaAnimacao, 8000);






    function carregar() {

        function cogumeloAnimacao() {
            cogumelo.classList.add('cogumelo-Animacao');
        } setInterval(cogumeloAnimacao, 1900);



    } setInterval(carregar, 100);








    function pisoAnimacao1() {
        piso1.classList.add('piso-Animacao-1');
    } setInterval(pisoAnimacao1, 0);

    function pisoAnimacao2() {
        piso2.classList.add('piso-Animacao-2');
    } setInterval(pisoAnimacao2, 0);

    function pisoAnimacao3() {
        piso3.classList.add('piso-Animacao-3');
    } setInterval(pisoAnimacao3, 3000);


    audioJogo.play();
    console.log('jogo')
}

document.addEventListener('keydown', start);




/*================ Função Pular ===================*/

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500);
}

document.addEventListener('keydown', jump);






/*================ script para acabar o jogo ===================*/

const GameOver = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const gramaPosition = grama.offsetLeft;
    const pisoPosition1 = piso1.offsetLeft;
    const pisoPosition2 = piso2.offsetLeft;
    const pisoPosition3 = piso3.offsetLeft;
    const cogumeloPosition = cogumelo.offsetLeft;


    if (
        tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80 ||
        cogumeloPosition <= 120 && cogumeloPosition > 0 && marioPosition < 80
    ) {

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        cogumelo.style.animation = 'none';
        cogumelo.style.left = `${cogumeloPosition}px`;


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;


        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        grama.style.animation = 'none';
        grama.style.left = `${gramaPosition}px`;

        piso1.style.animation = 'none';
        piso1.style.left = `${pisoPosition1}px`;

        piso2.style.animation = 'none';
        piso2.style.left = `${pisoPosition2}px`;

        piso3.style.animation = 'none';
        piso3.style.left = `${pisoPosition3}px`;



        function stopAudioJogo() {
            audioJogo.pause();
        } stopAudioJogo();

        audioGameOver.play();

        function stopAudio() {
            audioGameOver.pause();
        } setTimeout(stopAudio, 8000);



        clearInterval(GameOver);


    }
}, 10);

