import React from 'react'
import './App.css';
import { connect } from 'react-redux'

import JokeCategorySelect from './components/JokeCategories'
import TextSearchElement from './components/TextSearchElement'
import RandomJoke from './components/RandomJoke'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Joke:</h1>
        <RandomJoke />
        <JokeCategorySelect categories={this.props.categories} />
        <TextSearchElement />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  joke: state.joke,
})

export default connect(mapStateToProps)(App)