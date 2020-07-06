import { connect } from 'react-redux'
import Header from '../components/layout/header'

const getTokeLogout = (token) => {
  return { type: 'LOGOUT_REQUEST', setToken:token }
}
const mapDispatchToProps = dispatch => {
    return {
      // dispatching actions returned by action creators
      getTokeLogout: (token) => dispatch(getTokeLogout(token)),
    }
  }
export default connect(null, mapDispatchToProps)(Header)