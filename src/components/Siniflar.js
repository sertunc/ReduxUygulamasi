import React, { Component } from 'react';
import { connect } from 'react-redux';

class Siniflar extends Component {
  render() {
    return (
      <div>
        <p>
          <b>Sınıf</b>
        </p>
        Ad : <input id="txtSinifAd" type="text" onChange={event => this.props.degistirSinifAd(event)} />
        <br />
        Ogretmen : <input id="txtOgretmenAd" type="text" onChange={event => this.props.degistirSinifOgretmen(event)} />
        <br />
        <br />
        Sınıf : {this.props.sinifAd}, Öğretmen: {this.props.sinifOgretmen}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sinifAd: state.sinifReducer.sinifAd,
    sinifOgretmen: state.sinifReducer.sinifOgretmen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    degistirSinifAd: (e) => {
      dispatch({
        type: 'SINIF.DEGISTIR_AD',
        payload: { sinifAd: e.target.value }
      });
    },
    degistirSinifOgretmen: (e) => {
      dispatch({
        type: 'SINIF.DEGISTIR_OGRETMEN',
        payload: { sinifOgretmen: e.target.value }
      });
    }
  };
};

const SinifConnected = connect(mapStateToProps, mapDispatchToProps)(Siniflar);

export default SinifConnected;
