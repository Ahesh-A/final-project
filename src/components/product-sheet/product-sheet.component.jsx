import './product-sheet.styles.scss';
import { Fragment } from 'react';
import ProductCard from '../product-card/productcard.component';
const ProductSheet = () => {
    return (
        <Fragment>
            <div className="product-sheet">
                <ProductCard 
                imageUrl = "../../assets/men/men6.jpg"/>
            </div>
        </Fragment>
        
    );
};

export default ProductSheet;