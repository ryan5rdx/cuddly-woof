
/*
 * Action Types
 */
export const SELECT_TAB = 'SELECT_TAB'

/*
 * other constants
 */
/*
 *  Action Creators
 */
export function selectTab(newTab)  {
    return {type: SELECT_TAB, newTab}
}
