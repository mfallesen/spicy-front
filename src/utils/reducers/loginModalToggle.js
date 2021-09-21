const loginModalToggle = ( state = false, action) => {
    switch(action.type){
        case 'OPEN':
            return state = true
        case 'CLOSE':
            return state = false
        default:
            return state = false
    }
}
export default loginModalToggle;