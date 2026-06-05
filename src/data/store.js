import {configureStore} from '@reduxjs/toolkit';
import GalleryReducer from './GallerySlice';

const store = configureStore({
    reducer: {
        gallery: GalleryReducer,
    }
});
export default store;