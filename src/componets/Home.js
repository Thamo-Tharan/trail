import {useSelector, useDispatch} from 'react-redux'
const Home=()=>{
    /*State to manage username */
const unamefornext=useSelector(state=>state.uname);
//const unamedispatch=useDispatch();
console.log(unamefornext)
    return(
    <div id='header'>
        <h2>Welcome home {unamefornext}</h2>
        </div>
        )
        }
export default Home;