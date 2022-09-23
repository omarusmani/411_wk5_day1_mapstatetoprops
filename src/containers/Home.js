import {connect} from 'react-redux';
import Home from "../components/Home";
// import state from "../redux/state"
const mapStatetoProps =(state)=>{
    return{
        cars:state.cars
    }
}
export default connect(mapStatetoProps)(Home);