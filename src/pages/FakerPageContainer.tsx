import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  selectCountryAction,
  setCountMistakesAction,
  setDataAction,
} from '../redux/reducers/app-reducer';
import FakerPage from './FakerPage';

const FakerPageContainer: FC<any> = function ({
  country,
  mistakes,
  selectCountry,
  setCountMistakes,
  data,
  setData,
}) {
  return (
    <FakerPage
      country={country}
      mistakes={mistakes}
      selectCountry={selectCountry}
      setCountMistakes={setCountMistakes}
      data={data}
      setData={setData}
    />
  );
};

const mapStateToProps = (state: any) => ({
  country: state.app.country,
  mistakes: state.app.mistakes,
  data: state.app.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectCountry: (value: string) => dispatch(selectCountryAction(value)),
  setCountMistakes: (value: number) => dispatch(setCountMistakesAction(value)),
  setData: (data: Array<any>) => dispatch(setDataAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FakerPageContainer);
