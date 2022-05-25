const { useReducer, useCallback } = require('react')
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}
// otra forma de hacer el reducer en vez del switch, aunque el switch es el recomendado
// const ACTIONS_REDUCER = {
//   [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
//     ...state,
//     keyword: action.payload
//   }),
//   [ACTIONS.UPDATE_RATING]: (state, action) => ({
//     ...state,
//     rating: action.payload
//   })
// }
const REDUCER = (state, action) => {
  // const actionReducer = ACTIONS_REDUCER[action.type]
  // return actionReducer ? actionReducer(state, action) : state
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export const useForm = ({ initialKeyword = '', initialRating = 'g' } = {}) => {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: initialKeyword,
    rating: initialRating
  })
  const { keyword, rating } = state
  const updateKeywordFn = useCallback((keyword) => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }), [])
  const updateRatingFn = useCallback((rating) => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }), [])
  return {
    keyword,
    rating,
    updateKeyword: keyword =>
      updateKeywordFn(keyword),
    updateRating: rating =>
      updateRatingFn(rating)
  }
}
