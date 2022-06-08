import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  selectCountryAction,
  setCountMistakesAction,
} from '../redux/reducers/app-reducer';
import FakerPage from './FakerPage';

const FakerPageContainer: FC<any> = function ({
  country,
  mistakes,
  selectCountry,
  setCountMistakes,
}) {
  return (
    <FakerPage
      country={country}
      mistakes={mistakes}
      selectCountry={selectCountry}
      setCountMistakes={setCountMistakes}
    />
  );
};

const mapStateToProps = (state: any) => ({
  country: state.app.country,
  mistakes: state.app.mistakes,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectCountry: (value: string) => dispatch(selectCountryAction(value)),
  setCountMistakes: (value: number) => dispatch(setCountMistakesAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FakerPageContainer);
