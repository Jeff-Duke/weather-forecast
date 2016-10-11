import { connect } from 'react-redux';
import ExtendedForecast from '../components/ExtendedForecast';

const mapStateToProps = (state) => (
  {
    ExtendedForecast: state.extendedForecastReducer,
  }
);

export default connect(mapStateToProps)(ExtendedForecast);
