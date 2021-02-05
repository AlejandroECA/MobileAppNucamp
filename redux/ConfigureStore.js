import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { campsites } from './campsites/campsites.Reducer'
import { comments } from './comments/comments.Reducer'
import { promotions } from './promotions/promotions.Reducer'
import { partners } from './partners/partners.Reducer'

export const ConfigureStore =() => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            partners,
            promotions
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}