import { fetchJoke } from '../actions'
import { connect } from 'react-redux'
import React from 'react'
import Joke from './Joke'

class RandomJoke extends React.Component {
    componentWillMount() {
        this.props.fetchJoke()
    }
    render() {
        return (
            <div>
                <Joke joke={this.props.joke} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchJoke: () => dispatch(fetchJoke())
})

const mapStateToProps = state => ({
    joke: state.joke,
  })

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke)