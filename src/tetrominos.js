export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            ['I'],
            ['I'],
            ['I'],
            ['I']
        ],
        color: '80, 227, 230'
    },
    J: {
        shape: [
            [0, 'J'],
            [0, 'J'],
            ['J', 'J']
        ],
        color: '36, 95, 223'
    },
    L: {
        shape: [
            ['L', 0],
            ['L', 0],
            ['L', 'L']
        ],
        color: '223, 173, 36'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '223, 217, 36'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0]
        ],
        color: '48, 211, 56'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132, 61, 198'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '223, 173, 36'
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[randTetromino]
}