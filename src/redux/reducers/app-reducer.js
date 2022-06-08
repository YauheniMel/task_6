export const selectCountryAction = (country) => ({
  type: 'SELECT-COUNTRY',
  country,
});
export const setCountMistakesAction = (count) => ({
  type: 'SET-COUNT-MISTAKES',
  count,
});

const initState = {
  country: '',
  mistakes: 3,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function appReducer(state = initState, action) {
  switch (action.type) {
    case 'SELECT-COUNTRY': {
      const stateCopy = {
        ...state,
        country: action.country,
      };

      console.log(stateCopy);
      return stateCopy;
    }
    case 'SET-COUNT-MISTAKES': {
      const stateCopy = {
        ...state,
        mistakes: action.count,
      };

      console.log(stateCopy);
      return stateCopy;
    }
    default:
      return state;
  }
}

export default appReducer;
