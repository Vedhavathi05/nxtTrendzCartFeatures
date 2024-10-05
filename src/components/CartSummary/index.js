// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const calculationPrice = () =>
        cartList.reduce(
          (accumulator, each) => accumulator + each.quantity * each.price,
          0,
        )

      return (
        <div>
          <h1>Order Total: Rs{calculationPrice()}/- </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
