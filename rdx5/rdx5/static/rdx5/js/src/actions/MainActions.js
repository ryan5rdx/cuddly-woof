
/*
 * Action Types
 */
export const SWITCH_TAB = 'SWITCH_TAB'

/*
 * other constants
 */
/*
 *  Action Creators
 */
export function switchTab(newTab)  {
    return {type: SWITCH_TAB, newTab}
}
