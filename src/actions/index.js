export const fetchJoke = () => {
    const max = 500 // Total number of jokes allowed per session
    const url = 'https://api.chucknorris.io/jokes/random'
    return (dispatch, getState) => {
        if (!getState().tooMany) {
            if (getState().jokeCount >= max) {
                // Runs synchronously
                dispatch({ type: 'TOO_MANY' })
                dispatch({ type: 'SET_JOKE', payload: 'cutting you off' })
            }
            // Runs asynchronously
            // NOTE THAT A PROMISE IS BEING RETURNED HERE!
            else return fetch(url)
                .then(res => res.json())
                .then(res => {
                    dispatch({ type: 'INC_JOKE_COUNT' })
                    dispatch({ type: 'SET_JOKE', payload: res.value })
                })
        }
        else {
            // Runs synchronously
            dispatch({ type: 'SET_JOKE', payload: "no more jokes" })
        }
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

