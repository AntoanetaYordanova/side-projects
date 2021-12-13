window.addEventListener('DOMContentLoaded', () => {
    const tiles = [...document.querySelectorAll('.tile')];
    const playerDisplay = document.querySelector('.display-player');
    const resetBtn = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', '']
    let currentPlayer = 'X';
    let isGameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    function userAction(tile, index) {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    function handleResultValidation() {
        let winner = null;
        let isFinished = true;

        for(let i = 0; i < 9; i++) {
            if (board[i] == '') {
                isFinished = false;
            }
        }

        for(let i = 0; i < winningConditions.length; i++) {

            let a = board[winningConditions[i][0]];
            let b = board[winningConditions[i][1]];
            let c = board[winningConditions[i][2]];

            if(a == '') {
                continue;
            }

            if (a == b && a == c && b == c) {
                winner = a;
                break;
            }
        }

        if(winner != null) {
            announce(`PLAYER${winner}_WON`);
            isGameActive = false;
        } else if(isFinished) {
            announce('TIE');
            isGameActive = false;
        }

    }

    function changePlayer() {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    function announce (type) {
        announcer.style.display = 'block';
        switch(type){
            case 'PLAYERX_WON' :
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case 'PLAYERO_WON' :
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break; 
                case 'TIE' :
                    announcer.innerHTML = 'Tie';
                    break;
        }
    }

    function updateBoard(index) {
        board[index] = currentPlayer;
    }

    function isValidAction(tile) {
        if(tile.innerText == 'X' || tile.innerText == 'O') {
            return false;
        } else {
            return true;
        }
    }

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if(currentPlayer == 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });

        announcer.style.display = 'none';
    }

    resetBtn.addEventListener('click', resetBoard);
});