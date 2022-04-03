import {combineReducers} from 'redux'
import rootreducer from './rootreducer'
import rootreducerforuname from './rootreducer'
const allReducers = () => combineReducers({
    count: rootreducer,
    uname: rootreducerforuname,
  });
export default allReducers