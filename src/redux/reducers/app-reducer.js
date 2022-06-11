export const selectCountryAction = (country) => ({
  type: 'SELECT-COUNTRY',
  country,
});
export const setCountMistakesAction = (count) => ({
  type: 'SET-COUNT-MISTAKES',
  count,
});
export const setDataAction = (data) => ({
  type: 'SET-DATA',
  data,
});

const initState = {
  country: '',
  mistakes: 3,
  data: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function appReducer(state = initState, action) {
  switch (action.type) {
    case 'SELECT-COUNTRY': {
      const stateCopy = {
        ...state,
        country: action.country,
      };

      return stateCopy;
    }
    case 'SET-COUNT-MISTAKES': {
      const stateCopy = {
        ...state,
        mistakes: action.count,
      };

      return stateCopy;
    }
    case 'SET-DATA': {
      const stateCopy = {
        ...state,
        data: [...action.data],
      };

      console.log(stateCopy);
      return stateCopy;
    }
    default:
      return state;
  }
}

export default appReducer;
