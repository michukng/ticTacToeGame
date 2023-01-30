document.addEventListener('readystatechange', (myEvent) => {
    if (myEvent.target.readyState === 'complete') {        
        initApp();
    };
});

const whoseMove = document.getElementById('whoseMove');
let setPlayerMove = 'Ruch gracza nr 1';
whoseMove.textContent = setPlayerMove;
const moveArray = [];
const arrayWinCombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9],
]

let gameOver = false;

const initApp = () => {
    let xOrO;
    let counter = 0; 
    for (i=1; i<10; i++) {      
        let item = `item${i}`;
        let itemBoard = document.getElementById(item);
            itemBoard.addEventListener('click', (myEvent) => {
                if (gameOver) return;
                if (xOrO === "X") {
                    xOrO = "O";
                } else {
                    xOrO = "X";
                };
                myEvent.target.textContent = xOrO;            
                setTextMove = setMove();
                whoseMove.textContent = setTextMove;
                let result = `${xOrO}`;
                counter++;
                if (whoWon(Number(item.charAt(4)), result)){
                    whoseMove.textContent = whoWon();
                    gameOver = true;
                    if (counter != 9)
                        createButton();
                };
                if (counter === 9) {
                    if (!whoWon()) {
                        whoseMove.textContent = "Remis"
                        createButton();
                    } else {
                        createButton();
                    };                    
                };
            }, {once: true});
        };
    
    };



const setMove = () => {
    if (setPlayerMove === 'Ruch gracza nr 1') {
        setPlayerMove = 'Ruch gracza nr 2';
    } else {
        setPlayerMove = 'Ruch gracza nr 1';
    };
    return setPlayerMove;
};

const whoWon = (divNumber, result) => {
    for (firstIndexOfList=0; firstIndexOfList<arrayWinCombination.length; firstIndexOfList++) {
        let secondIndexOfList = arrayWinCombination[firstIndexOfList].indexOf(divNumber)
        if (secondIndexOfList >= 0) {
            arrayWinCombination[firstIndexOfList][secondIndexOfList] = result;
        };
        const arrayWithX = ['X', 'X', 'X']
        const arrayWithO = ['O', 'O', 'O']
        const isEqualWithX = arrayWinCombination[firstIndexOfList].toString() === arrayWithX.toString();
        const isEqualWithO = arrayWinCombination[firstIndexOfList].toString() === arrayWithO.toString();

        if (isEqualWithX) {
            textWithResult = 'Wygrał gracz nr 1'
            return textWithResult
        } else if (isEqualWithO) {
            textWithResult = 'Wygrał gracz nr 2'
            return textWithResult
        };
    };

};

const createButton = () => {
    const createButton = document.getElementById('createButton')
    const button = document.createElement('button');
    button.appendChild(document.createTextNode('Zagraj jeszcze raz'))
    button.classList.add('textButton')
    createButton.appendChild(button);
    createButton.classList.add('playAgainButton')
    button.addEventListener('click', () => {
        location.reload();
    });
};