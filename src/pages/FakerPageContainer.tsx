import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  selectCountryAction,
  setCommandAction,
  setCountMistakesAction,
  setDataAction,
  incrementPageAction,
} from '../redux/reducers/app-reducer';
import FakerPage from './FakerPage';

const FakerPageContainer: FC<any> = function ({
  country,
  mistakes,
  selectCountry,
  setCountMistakes,
  data,
  setData,
  setCommand,
  command,
  setPage,
  page,
}) {
  return (
    <FakerPage
      country={country}
      mistakes={mistakes}
      selectCountry={selectCountry}
      setCountMistakes={setCountMistakes}
      data={data}
      setData={setData}
      setCommand={setCommand}
      command={command}
      page={page}
      setPage={setPage}
    />
  );
};

const mapStateToProps = (state: any) => ({
  country: state.app.country,
  mistakes: state.app.mistakes,
  data: state.app.data,
  command: state.app.command,
  page: state.app.page,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectCountry: (value: string) => dispatch(selectCountryAction(value)),
  setCountMistakes: (value: number) => dispatch(setCountMistakesAction(value)),
  setData: (data: Array<any>) => dispatch(setDataAction(data)),
  setCommand: (command: string) => dispatch(setCommandAction(command)),
  setPage: () => dispatch(incrementPageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FakerPageContainer);
