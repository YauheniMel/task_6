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
export const setCommandAction = (command) => ({
  type: 'SET-COMMAND',
  command,
});
export const incrementPageAction = () => ({
  type: 'INCREMENT-PAGE',
});

const initState = {
  country: '',
  mistakes: 3,
  command: '',
  data: [],
  page: 0,
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

      return stateCopy;
    }
    case 'SET-COMMAND': {
      const stateCopy = {
        ...state,
        command: action.command,
      };

      return stateCopy;
    }
    case 'INCREMENT-PAGE': {
      const stateCopy = {
        ...state,
        page: state.page + 1,
      };

      return stateCopy;
    }
    default:
      return state;
  }
}

export default appReducer;
