
import { combineReducers, createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    blogs: blogsReducer,
    posts: postsReducer,
    auth:authReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
