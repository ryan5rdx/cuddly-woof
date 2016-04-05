import { combineReducers } from 'redux'
import {SELECT_TAB} from '../actions/MainActions'

const initialState = {
    selectedTab: 'home'
}

function mainApp(state = initialState, action) {
    switch(action.type){
        case SELECT_TAB:
            return Object.assign({}, state, {
                selectedTab:action.newTab
            })
        default:
            return state
    }
}

export default mainApp
