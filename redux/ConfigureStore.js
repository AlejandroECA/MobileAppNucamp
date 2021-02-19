import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { campsites } from './campsites/campsites.Reducer'
import { comments } from './comments/comments.Reducer'
import { promotions } from './promotions/promotions.Reducer'
import { partners } from './partners/partners.Reducer'
import { favorites } from './favorites/favorites.Reducer'


const config = {
    key: 'root',
    storage,
    debug: true
}


export const ConfigureStore =() => {
    const store = createStore(
        persistCombineReducers(config, {
            campsites,
            comments,
            partners,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    )

    const persistor = persistStore(store);

    return { persistor, store };
}