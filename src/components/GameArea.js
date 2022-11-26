import React, { Component } from "react";
import "./GameArea.css";
import InputChoice from "./InputChoice";
import BangHanhDong from "./BangHanhDong";


class GameArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            map: [
                [0, 0, 0, 0, 2, 0],
                [0, 0, 0, -1, -1, -1],
                [0, 0, 0, 0, 0, 0],
                [-1, -1, -1, -1, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, -1, -1, -1, -1],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
            ],
            playerY: 3,
            playerX: 7,
        };

        this.map = this.map.bind(this);

        this.keyPressedEvent = this.keyPressedEvent.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    keyPressedEvent({ key }) {
        if (key === "ArrowUp") {
            this.moveUp();
        } else if (key === "ArrowDown") {
            this.moveDown();
        } else if (key === "ArrowLeft") {
            this.moveLeft();
        } else if (key === "ArrowRight") {
            this.moveRight();
        } else {
            return;
        }
    }

    moveUp() {
        let x = this.state.playerX;
        let y = this.state.playerY;
        let map = this.state.map;
        if(x==0) return;
        if(map[x-1][y]==-1) return;
        let newMap = map;
        newMap[x][y]=0;
        newMap[x-1][y]=1;
        this.setState( {
            map :newMap,
            playerX:this.state.playerX-1,
        } )
        console.log(newMap);
    }

    moveDown() {
        let x = this.state.playerX;
        let y = this.state.playerY;
        let map = this.state.map;
        if(x==7) return;
        if(map[x+1][y]==-1) return;
        let newMap = map;
        newMap[x][y]=0;
        newMap[x+1][y]=1;
        this.setState( {
            map :newMap,
            playerX:this.state.playerX+1,
        } )
        console.log(newMap);}

    moveLeft() {
        let x = this.state.playerX;
        let y = this.state.playerY;
        let map = this.state.map;
        if(y==0) return;
        if(map[x][y-1]==-1) return;
        let newMap = map;
        newMap[x][y]=0;
        newMap[x][y-1]=1;
        this.setState( {
            map :newMap,
            playerY:this.state.playerY-1,
        } )
        console.log(newMap);}

    moveRight() {
        let x = this.state.playerX;
        let y = this.state.playerY;
        let map = this.state.map;
        if(y==5) return;
        if(map[x][y+1]==-1) return;
        let newMap = map;
        newMap[x][y]=0;
        newMap[x][y+1]=1;
        this.setState( {
            map :newMap,
            playerY:this.state.playerY+1,
        } )
        console.log(newMap);}

    componentDidMount() {
        document.addEventListener("keydown", this.keyPressedEvent, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyPressedEvent, false);
    }

    map() {
        let gameMap = [];

        for (let i = 0; i < this.state.map.length; i++) {
            let row = this.state.map[i];
            let gameRow = [];

            for (let j = 0; j < row.length; j++) {
                if (row[j] === 0)
                    gameRow.push(
                        <span className="road square" key={i * 3 + j}></span>
                    );
                else if (row[j] === -1)
                    gameRow.push(
                        <span className="wall square" key={i * 3 + j}></span>
                    );
                else if (row[j] === 2)
                    gameRow.push(
                        <span className="diamond square" key={i * 3 + j}></span>
                    );
                else if (row[j] === 1)
                    gameRow.push(
                        <span className="player square" key={i * 3 + j}></span>
                    );
            }

            gameMap.push(
                React.createElement(
                    "div",
                    { className: `row`, key: `row${i}` },
                    ...gameRow
                )
            );
        }

        return gameMap;
    }

    render() {
        return (
        
            <div className="App">
            <div className="game-area">
                <div className="container">
                    {this.map()}   
                    
                </div>
                
            </div>
            <BangHanhDong moveUp={()=>this.moveUp()} moveDown={()=>this.moveDown()} moveLeft={()=>this.moveLeft()} moveRight={()=>this.moveRight()}/>
            </div>
        );
    }
}

export default GameArea;
