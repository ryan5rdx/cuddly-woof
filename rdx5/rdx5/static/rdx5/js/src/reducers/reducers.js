import { combineReducers } from 'redux'
import {SWITCH_TAB} from '../actions/MainActions'

const initialState = {
    selectedTab: 'home'
}

function mainApp(state = initialState, action) {
    switch(action.type){
        case SWITCH_TAB:
            return Object.assign({}, state, {
                selectedTab:action.newTab
            })
        default:
            return state
    }
}

export default mainApp
