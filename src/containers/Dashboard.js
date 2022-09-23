import {connect} from 'react-redux';
import Dashboard from "../components/Dashboard";
// import state from "../redux/state"
const mapStatetoProps =(state)=>{
    return{
        cars:state.cars,
        user:state.user
    }
}
export default connect(mapStatetoProps)(Dashboard);