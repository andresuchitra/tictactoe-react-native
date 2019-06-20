import { combineReducers } from 'redux';
import {
    SET_BOARD,
    SET_TILE_CONTENT,
    SET_CURRENT_PLAYER
} from '../constants'

const INITIAL_STATE = {
  currentPlayer: 1,
  board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
  ],
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BOARD: {
        return {
            ...state,
            board: action.board
        }
    }
    case SET_TILE_CONTENT: {
        let newBoard = [];
        let board = action.payload.board;

        board.forEach(row => {
            newBoard.push(row.slice(0))
        })

        newBoard[action.payload.row][action.payload.col] = action.payload.currentPlayer

        console.log(newBoard);
        return {
            ...state,
            board: newBoard,
        }
    }
    case SET_CURRENT_PLAYER: {
        return {
            ...state,
            currentPlayer: action.next
        }
    }
    default:
      return state
  }
};

export default game;
