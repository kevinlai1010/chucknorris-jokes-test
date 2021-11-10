export const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random'
    return (dispatch, getState) => {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: 'INC_JOKE_COUNT' })
                dispatch({ type: 'SET_JOKE', payload: res.value })
            })
    }
}

export const getJokeCategories = () => {
    const url = 'https://api.chucknorris.io/jokes/categories'
    return (dispatch, getState) => {
        return fetch(url)
            //.then(res => res.json())
            .then(res => {
                dispatch({ type: 'SET_JOKE_CATEGORIES', payload: res.json() })
            })
    }
}

