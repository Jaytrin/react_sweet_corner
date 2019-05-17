import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllProducts} from '../../actions' ;
import './products.scss';
import ProductItem from './product_item';

class Products extends Component{


    componentDidMount(){
        this.props.getAllProducts();
    }

    render(){

        const {history, products} = this.props;
        const productItems = this.props.products.map(product => {
            return <ProductItem key = {product.pid} {...product} goToDetails={() => history.push(`/products/${product.pid}`)} />
        })
            
           return(
            <div className="products">
                <h1 className="center">Shop Our Products</h1>
                {productItems}
            </div>
           );
    }
}

function mapStateToProps(state){
    return{
        products: state.products.list
    }
}


export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);