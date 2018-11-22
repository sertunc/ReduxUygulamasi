import constants from "../../constants/actionConstants";

const initialState = {
  ogrenciAd: '',
  ogrenciSoyad: '',
  ogrenciler: []
};

export const ogrenciReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.OGRENCI.DEGISTIR_AD:
      return Object.assign({}, state, { ogrenciAd: action.payload.ogrenciAd });

    case constants.OGRENCI.DEGISTIR_SOYAD:
      return Object.assign({}, state, { ogrenciSoyad: action.payload.ogrenciSoyad });

    case constants.OGRENCI.EKLE:
      const yeniOgrenci = { ogrenciAd: state.ogrenciAd, ogrenciSoyad: state.ogrenciSoyad };
      const yeniListe = [...state.ogrenciler, yeniOgrenci];
      const liste = Object.assign({}, state, { ogrenciler: yeniListe });
      return liste;

    default:
      return state;
  }
};
