function Gameboard() {
    const gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let round = 0;
    let player1,player2;
    let history={};
    const setgame=(f,s)=>{
        player1=f;
        player2=s;
    };
    const resetgame=()=>{
        for (let i; i<10;i++){
            addgameboard(0,g);
        }
    }
    const getplayer=()=>{return{player1,player2}};
    const nextround=()=>++round;
    const addgameboard=(chose,index)=>{gameboard[index]=chose};
    const winnderhistory=(round,player)=>{history[round]=`${player} win`};
    const drawhistory = (round)=>{history[round]="draw!"};
    return {setgame, gameboard, nextround, getplayer, addgameboard, drawhistory, winnderhistory, resetgame};
}

const startpoint = function displayController() {
    const startbutton = document.querySelector("#start");
    const startscreenbutton = document.querySelectorAll(".choice");
    const startscreen = document.querySelector("#startscreen");
    // ox 선택한다.
    let newgame=Gameboard();
    let playero = player("o");
    let playerx = player("x");
    startscreenbutton.forEach((item)=>{item.addEventListener("click", () => {
        startbutton.setAttribute("value", item.id)})}
    );
    startbutton.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.value == "o") {
            newgame.setgame(playero, playerx);
            startbutton.classList.remove("screenon");
            startscreen.classList.add("screenoff");
        } else if (event.target.value == "x") {
            newgame.setgame(playerx, playero);
            startbutton.classList.remove("screenon");
            startscreen.classList.add("screenoff");
        }
    })
}();

function gamelogic() {
    // array를 채운다.

    // 못채우면 return false;

    // 누군가가 이겼으면 let winner = player;

    // array가 꽉 찼으면 let draw = true;

    // 
}
function player(sign) {
    return { sign };
}

// 버튼을 눌러서 게임을 시작한다.
// 틱택토를 한다.
// 게임 한판 끝나면 dialog에서 다음 라운드를 클릭한다.
// 3번 이기거나 지면 dialog에서 결과창이 나온다.
// 결과창의 닫기 혹은 reset을 누른다.