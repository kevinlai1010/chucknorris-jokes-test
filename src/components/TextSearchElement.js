import React, { Component } from 'react';

class TextSearchElement extends Component {
    constructor() {
        super();
        this.state = {
            jokes: [],
            query: ''
        };
        this.onClickHandle = this.onClickHandle.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({ query: event.target.value })
    }

    onClickHandle(event) {
        const { query } = this.state
        fetch("https://api.chucknorris.io/jokes/search?query=" + query)
            .then(res => res.json())
            .then(res => {
                if(res.result.length > 0)
                    this.setState({ jokes: res.result.slice(0, 5) })
            })
    }

    render() {
        const { jokes } = this.state

        return (
            <div>
                <input
                    className="form-control"
                    type="input"
                    placeholder=".....Search Text"
                    onInput={this.onInputChange}
                />
                <button type="submit" className='btn btn-success' onClick={this.onClickHandle}>Search Jokes</button>

                {
                    jokes.length > 0 ?
                        <>
                            <div>
                                {jokes.map((joke, index) => {
                                    return <h3 key={index}>{joke.value}</h3>;
                                })}
                            </div>
                        </>
                        :
                        <>
                        </>
                }
            </div>
        );
    }
}

export default TextSearchElement;