import React from 'react';

import './AppStyle.less';

const SQUARES_PER_LINE = 4;

class App extends React.Component {
    constructor() {
        super();

        // The squares are just a list of rgb colors strings ( ex : "rgb(82,232,76)")
        // Since the only important property for a square is its color
        const squares = this.createAllSquares();
        this.state = { squares };
    }

    getTotalSquares = () => {
        return SQUARES_PER_LINE * SQUARES_PER_LINE;
    };

    getRandomColorCode() {
        return ~~(Math.random() * 256);
    }

    getOneRandomRGBColor = () => {
        return `rgb(${this.getRandomColorCode()},${this.getRandomColorCode()},${this.getRandomColorCode()})`;
    };

    createAllSquares = () => {
        const squares = [];
        const squaresAmount = this.getTotalSquares();

        for (let index = 0; index < squaresAmount; index++) {
            squares.push(this.getOneRandomRGBColor());
        }

        return squares;
    };

    onDragStart = (ev, index) => {
        // Store the square index in the squares array
        // for later use in the onDrop callback
        ev.dataTransfer.setData('index', index);
    };

    onDragOver = ev => {
        // To allow the onDrop event to be fired
        ev.preventDefault();
    };

    onDrop = (ev, newIndex) => {
        // Retrieve the index of the dropped square
        const oldIndex = ev.dataTransfer.getData('index');
        this.switchSquares(oldIndex, newIndex);
        this.setState(this.state);
    };

    switchSquares = (oldIndex, newIndex) => {
        const tempData = this.state.squares[oldIndex];
        this.state.squares[oldIndex] = this.state.squares[newIndex];
        this.state.squares[newIndex] = tempData;
    };

    getOneSquareColor = squareIndex => {
        return this.state.squares[squareIndex];
    };

    displaySquares = () => {
        const squares = [];
        const totalSquares = this.getTotalSquares();

        for (let index = 0; index < totalSquares; index++) {
            const squareColor = this.getOneSquareColor(index);
            squares.push(
                <div
                    key={index}
                    id={`square-${index}`}
                    draggable
                    onDragStart={e => {
                        this.onDragStart(e, index);
                    }}
                    onDragOver={e => this.onDragOver(e)}
                    onDrop={e => {
                        this.onDrop(e, index);
                    }}
                    className="square"
                    style={{ background: squareColor }}
                ></div>,
            );
        }

        return squares;
    };

    render() {
        return (
            <div className="app">
                <div className="container">
                    <div className="title-container">
                        <div className="title"> Drag & Drop</div>
                    </div>
                    <div className="board-container">
                        <div
                            className="board"
                            style={{
                                gridTemplateColumns: `repeat(${SQUARES_PER_LINE}, 1fr)`,
                                gridTemplateRows: `repeat(${SQUARES_PER_LINE}, 1fr)`,
                            }}
                        >
                            {this.displaySquares()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
