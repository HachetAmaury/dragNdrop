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

    createAllSquares = () => {
        const squares = [];
        const squaresAmount = SQUARES_PER_LINE * SQUARES_PER_LINE;

        for (let index = 0; index < squaresAmount; index++) {
            squares.push(this.getOneRandomRGBColor());
        }

        return squares;
    };

    getOneRandomRGBColor = () => {
        return `rgb(${this.getRandomColorCode()},${this.getRandomColorCode()},${this.getRandomColorCode()})`;
    };

    getRandomColorCode() {
        return Math.floor(Math.random() * 255);
    }

    displaySquares = () => {
        const squares = [];

        for (let index = 0; index < this.state.squares.length; index++) {
            const square = this.state.squares[index];
            squares.push(
                <div
                    key={index}
                    className="square"
                    style={{ background: square }}
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
