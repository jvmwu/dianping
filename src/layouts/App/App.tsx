import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ErrorToast from '../../components/ErrorToast';
import Home from '../Home';
import './style.css';

class App extends Component {
   render() {
      const {
         error,
         appActions: { clearError }
      } = this.props;
      return (
         <div className="App">
            <Home />
            {error ? <ErrorToast msg={error} clearError={clearError} /> : null}
         </div>
      );
   }
}

const mapStateToProps = (state, props) => {
   return {
      error: getError(state)
   };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      appActions: bindActionCreators(appActions, dispatch)
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
