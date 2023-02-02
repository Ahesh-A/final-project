import "./cart-dropdown-sheet.styles.scss";

const CartDropdownSheet = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-dropdown-sheet">
      <div className="cart-drop-down-image-container">
        <img src={require(`../../${imageUrl}`)} alt="name" />
      </div>
      <div className="cart-drop-down-product-description">
        <span className="cart-drop-down-product-name">{name}</span>
        <span className="cart-drop-down-product-price-quantity">
          {`${quantity}`} x &#x20B9;{`${price}`}
        </span>
      </div>
    </div>
  );
};

export default CartDropdownSheet;
