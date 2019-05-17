import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getProductDetails, addItemToCart } from '../../actions';


class ProductDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            quantity: 1
        }
    }

    increase(){
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    decrease(){
        const { quantity } = this.state;

        if(quantity <= 1) return;

        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    componentDidMount(){
        console.log('Product ID:', this.props.match.params.product_id);
        this.props.getProductDetails(this.props.match.params.product_id);
    }

    async handleAddItem(){
        const {addItemToCart, details: {pid}, history } = this.props;

        await addItemToCart(pid, this.state.quantity);

        history.push('/cart');
    }

    render(){

        const { details } = this.props;

        //Do a check, if details are null, return a loading message <h1>Product Loading</h1>

        if(!details){
            return <h1>Product Loading...</h1>
        }

        return(
            <div className="product-details">
                <h1 className="center">{details.name}</h1>
                <div>
                    <button onClick={this.decrease.bind(this)}>-</button>
                    <span>{this.state.quantity}</span>
                    <button onClick={this.increase.bind(this)}>+</button>
                    <button onClick={this.handleAddItem.bind(this)}> Add To Cart</button>
                </div>
                <div className="center">
                    <img src={details.image.url} alt={details.image.altText} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        details: state.products.details
    }
}

export default connect(mapStateToProps,{
    getProductDetails:getProductDetails,
    addItemToCart:addItemToCart
 })(ProductDetails);