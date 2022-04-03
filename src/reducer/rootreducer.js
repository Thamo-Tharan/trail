const initialstare={
    count:1
}
const Usernamestore={
    uname:''
}
const rootreducer=(state=initialstare,action)=>{

    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}
            case 'DECREMENT':
            return {count:state.count-1}
            default:
                return state
    }
}
const rootreducerforuname=(state=Usernamestore,action)=>{

    switch(action.type){
        case 'login':
            return {uname:action.value}
            default:
                return state
    }
}
export default rootreducerforuname