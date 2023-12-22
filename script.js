function Gamehistory() {
    let round = 0;
    let acutalround=0;
    let player1, player2;
    let player1win=0;
    let history = [];
    const setgame = (f, s) => {
        player1 = f;
        player2 = s;
    };
    const getplayer = () => { return [player1, player2] };
    const winnerhistory = (player) => { history[++round] =`${player1.sign==player? "player1" : "player2"} win`; if(player1.sign == player){player1win++};acutalround++;};
    const drawhistory = () => { history[++round] = "draw!" };
    const gethistory = () => { return history };
    const getactualround = () => acutalround;
    const getplayer1win = () => player1win;
    const getround = () => round

    return { getround, setgame, getplayer, drawhistory, winnerhistory, gethistory, getactualround, getplayer1win };
}

function Game() {
    const gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let laps = 0;
    const getgameboard = () => gameboard;
    const getlaps = () => laps;
    const setlaps = () => ++laps;
    const clearGame = (cell, gamestart, dialog=false)=>{
        if (dialog==false){
            return cell.forEach(function (element) { element.textContent = "" });
    }
        return result(dialog,gamestart,cell).showModal();
    };
    const addgameboard = (chose, index) => { gameboard[index] = chose };
    return { getgameboard, getlaps, setlaps, addgameboard, clearGame };
}

const startscreen = function () {
    const startbutton = document.querySelector("#start");
    const startscreenbutton = document.querySelectorAll(".choice");
    const startscreen = document.querySelector("#startscreen");
    const cell = document.querySelectorAll(".cell");
    const dialog = document.querySelector("dialog");
    const reset = document.querySelector("#resetButton");
    const loading = document.querySelector("#loading");

    window.loading = setTimeout(function(){loading.setAttribute("style","display:none;")},2000)
    // ox 선택한다.
    let gamestart = Gamehistory();
    let playero = player("o");
    let playerx = player("x");
    startscreenbutton.forEach((item) => {
        item.addEventListener("click", () => {
            startbutton.setAttribute("value", item.id)
        })
    }
    );

    startbutton.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.value == "o") {
            gamestart.setgame(playero, playerx);
            startbutton.classList.remove("screenon");
            startscreen.classList.add("screenoff");
        } else if (event.target.value == "x") {
            gamestart.setgame(playerx, playero);
            startbutton.classList.remove("screenon");
            startscreen.classList.add("screenoff");
        }
    })

    let p = 0;
    let newround = Game();
    reset.addEventListener("click",()=>{newround.clearGame(cell,gamestart);newround=Game();})
    console.log(newround.getgameboard());
    Array.from(cell).forEach(function (element) {
            element.addEventListener('click', function tik(event) {
            if (newround.getgameboard()[event.target.id] == 0) {
                newround.setlaps();
                element.textContent = gamestart.getplayer()[p].sign;
                newround.addgameboard(gamestart.getplayer()[p].sign, event.target.id)
                if (gamelogic(newround) == true) {
                    gamestart.winnerhistory(gamestart.getplayer()[p].sign);
                    newround.clearGame(cell, gamestart, dialog);
                    newround = Game();
                }
                if (newround.getlaps() >= 9) {
                    gamestart.drawhistory();
                    console.log(gamestart.gethistory());
                    newround.clearGame(cell, gamestart, dialog);
                    newround = Game();
                }
                p = (p + 1) % 2;
            }
        })
    })
}();

function gamelogic(game) {
    // 승리 array
    const winRule = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]];

    // 누군가가 이겼으면 let winner = player;
    for ([a, b, c] of winRule) {
        if (game.getgameboard()[a] == game.getgameboard()[b] && game.getgameboard()[b] == game.getgameboard()[c] && game.getgameboard()[c] != 0) {
            return true;
        }
    }
}

function player(sign) {
    return { sign };
}

function result(dialog,gamestart,cell){
    // dialog가 떴을 때 gamehistory에서 player1을 가져오고 
    // actualround-player1==3이면 player2승리
    // player1==3이면 player1 승리
    // 만약 아무것도 아니면 next가 나오는 dialog 제작.
    const next = document.querySelector("#nextButton");
    const r=document.querySelector(".result");
    const finish = document.querySelector("#finishButton");
    if (gamestart.getactualround()-gamestart.getplayer1win()==3){
        r.childNodes[1].childNodes[1].textContent=`player2 Win`;
        finish.addEventListener("click",()=>location.reload());
        return r;
        }else if (gamestart.getplayer1win()==3){
        r.childNodes[1].childNodes[1].textContent=`player1 Win`
        finish.addEventListener("click",()=>location.reload());
        return r;
    }else{
    const newli = document.createElement("li");
    newli.textContent=`${gamestart.getround()+"round"} : `+gamestart.gethistory()[gamestart.gethistory().length-1];
    next.parentElement.childNodes[1].appendChild(newli);
    cell.forEach(function (element) { element.textContent = "" });
    }
    return dialog;
}

// 틱택토를 한다.
// 게임 한판 끝나면 dialog에서 다음 라운드를 클릭한다.
// 3번 이기거나 지면 dialog에서 결과창이 나온다.
// 결과창의 닫기 혹은 reset을 누른다.