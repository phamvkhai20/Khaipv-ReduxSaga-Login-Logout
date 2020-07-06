import { connect } from 'react-redux'
import Login from '../components/login'

const getUserReq = (user) => {
  return { type: 'GET_LOGIN_REQUEST', payload:user }
}
const mapDispatchToProps = dispatch => {
    return {
      // dispatching actions returned by action creators
      getUserReq: (user) => dispatch(getUserReq(user)),
    }
  }
export default connect(null, mapDispatchToProps)(Login)
