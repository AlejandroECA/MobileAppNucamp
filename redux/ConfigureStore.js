import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { campsites } from './campsites/campsites.Reducer'
import { comments } from './comments/comments.Reducer'
import { promotions } from './promotions/promotions.Reducer'
import { partners } from './partners/partners.Reducer'
import { favorites } from './favorites/favorites.Reducer'

export const ConfigureStore =() => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            partners,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}