import constants from "../../constants/actionConstants";

const initialState = {
  sinifAd: '',
  sinifOgretmen: ''
};

export const sinifReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SINIF.DEGISTIR_AD:
      const ad = Object.assign({}, state, { sinifAd: action.payload.sinifAd });
      return ad;
    case constants.SINIF.DEGISTIR_OGRETMEN:
      const ogretmen = Object.assign({}, state, { sinifOgretmen: action.payload.sinifOgretmen });
      return ogretmen;
    default:
      return state;
  }
};
