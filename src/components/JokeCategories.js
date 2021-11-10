import { fetchJoke, getJokeCategories } from '../actions'
import { connect } from 'react-redux'
import React from 'react'

class JokeCategorySelect extends React.Component {

    constructor() {
        super();
        this.state = {
            current_category: 'Random',
            categories: [],
            joke: '',
        };
        this.onClickHandle = this.onClickHandle.bind(this)
        this.onChangeSelect = this.onChangeSelect.bind(this)
    }

    onChangeSelect(event) {
        this.setState({ current_category: event.target.value })
    }

    onClickHandle(event) {
        const { current_category } = this.state
        let url = '';
        if (current_category !== 'Random') {
            url = "https://api.chucknorris.io/jokes/random?category=" + current_category
        } else {
            url = "https://api.chucknorris.io/jokes/random"
        }

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({ joke: res.value })
            })
    }

    componentWillMount() {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then(res => res.json())
            .then(res => {
                this.setState({ categories: res });
            });
    }

    render() {
        const { categories, joke } = this.state;

        // console.log('sdfsjflsdjfslf', categories)

        return (
            <div>
                {
                    categories.length > 0 ?
                        <div>
                            <select onChange={this.onChangeSelect}>
                                <option>Random</option>
                                {categories.map((category, index) => {
                                    return <option key={index}>{category}</option>;
                                })}
                            </select>
                            <button type="submit" className='btn btn-success' onClick={this.onClickHandle}>Get Joke</button>
                        </div>
                        :
                        <></>
                }
                <h3>{joke}</h3>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchJoke: () => dispatch(fetchJoke()),
    getJokeCategories: () => dispatch(getJokeCategories())
})

export default connect(null, mapDispatchToProps)(JokeCategorySelect)