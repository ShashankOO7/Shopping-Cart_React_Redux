import Cart from '../components/Cart'
import {connect} from 'react-redux'
import {removeFromCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    removeFromCartHandler:data=>dispatch(removeFromCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
// export default Home;