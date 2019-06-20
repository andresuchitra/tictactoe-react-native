import {
    SET_BOARD,
    SET_TILE_CONTENT,
    SET_CURRENT_PLAYER
} from '../constants.js'

export const setBoard = (board) => {
    return {
        type: SET_BOARD,
        board: board,
    }
}

export const setCurrentPlayer = (nextPlayer) => {
    return {
        type: SET_CURRENT_PLAYER,
        next: nextPlayer
    }
}

export const setTileContent = (payload) => {
    return {
        type: SET_TILE_CONTENT,
        payload: {
            board: payload.board,
            currentPlayer: payload.currentPlayer,
            row: payload.row,
            col: payload.col,
        }
    }
}