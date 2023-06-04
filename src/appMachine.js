import { createMachine, interpret, assign } from 'xstate';
// import { gameWrite, chatWrite } from './dbClient.js'

// create an initialBoard Array of strings 364 elements long containing 'e'
const initialBoard = Array(364).fill('e');
const games = [
  {name: 'game1', status: 'pending', id: '123'},
  {name: 'game2', status: 'active', id: '124'},
  {name: 'game3', status: 'active', id: '125'},
  {name: 'game4', status: 'complete', id: '126'},
]

const turnlogic = {
    predictableActionArguments: true,
    id: 'turnmachine',
    initial: 'turn',
    states: {
      turn: {
        on: {
          SUBMIT: {
            target: 'notturn',
            actions: [ 'submitSpace', 'updateBoard' ]
          }
        }
      },
      notturn: {
        on: {
          UPDATE: {
            target: 'turn'
          }
        }
      }
    }
  }

const logic = {
    predictableActionArguments: true,
    id: 'gogame',
    initial: 'auth',
    context: {
        user: null,
        userGames: games,
        gameid: null,
        turn: 0,
        boardstate: initialBoard,
        ko: [],          // ints
        blackdead: 0,
        whitedead: 0,
        handicapp: 0,
        history: [],     // {index, color, turnInt}
        players: [],     //[ { name, color, accepts }, ... ]
        chat: [],        // {id, timestamp, text},
        authMsg: ''
    },
    on: {
        LOGOUT: {
            target: 'auth',
        },
        GAME_EXIT: {
            target: 'gameselection',
        },
        UPDATE: {actions: [ 'dataupdate' ]},
    },
    states: {
        auth: {
            on: {
                LOGIN: {
                    target: 'gameselection',
                },
                LOGIN_ERROR: {
                    actions: [ 'updatesigninmsg' ]
                },
            },  
        },  
        gameselection: {
            on: {
                NEW_GAME: {
                    target: 'gameform',
                },
                JOIN_GAME: {
                    target: 'gamenego',
                },
            },
        },
        gameform: {
            on: {
                CREATE_GAME: {
                    target: 'gamenego',
                },
            },
        },
        gamenego: {
            on: {
                HAS_TWO_ACCEPTS: {
                    target: 'gameplay',
                },
                GAME_EDIT: {},
            },
        },
        gameplay: {
            on: {
                DOUBLE_PASS: {
                    target: 'gameover',
                },
            }, 
            ...turnlogic, 
        },
        gameover: {},
    },
};

const functions = { 
    actions: 
  {
    submitSpace: ( context, event ) => { 
      console.log( 'submit event', event ) 
    },
    gamewrite: ( context, event ) => { 
      // gameWrite(event)
    },
    dataupdate: ( context, event ) => {
      console.log("Fuck the data")
    },
    // updateBoard: assign( { you: 'dean' } )
    // updateBoard: assign( () => {return { you: 'dean' } })
    updatesigninmsg: assign( { authMsg: 'bad login, try again' }  ),
    updateBoard: assign( (context, event) => {
      const b = [...context.board]
      b[event.spaceIndex] = context.turn
      const nextTurn = context.turn === 'b' ? 'w' : 'b' ;
      return { you: 'dean', board: b, turn: nextTurn} 
    })
  }
}

export { functions, logic }