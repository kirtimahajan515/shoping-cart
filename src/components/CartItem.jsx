import { useCart } from '../contexts/CartProvider'
import styles from './CartItem.module.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function CartItem({ id, title, price, img, quantity}) { 
   const{ IncreaseQty, DecreaseQty, removeItemCart} = useCart()
    return (
    <div className={styles.cartItem}>
        {/* left */}
          <div className={styles.imgAndTitle}>
            <div className={styles.imgContainer}>
                <img src={img} alt={title} className={styles.cartImage}/>
            </div>
            <h1>{title}</h1>
          </div>


        {/* Right */}
          <div className={styles.otherControls}>
            <div className={styles.qtyInput}>
            <button>
                    <AiOutlineMinus onClick={() => {
                    if(quantity <= 1){
                        return;
                    }
                    DecreaseQty(id)
                    }} />
                </button>
              <span className={styles.quantityDisplay}>{quantity}</span>
                <button>
                    <AiOutlinePlus onClick={() => {
                    IncreaseQty(id)
                    }}/>
                </button>
            </div>
            <p>&#8377;{price * quantity}</p>
            <button 
            className={styles.removeItemBtn} 
            onClick={()=>{
                removeItemCart(id)
                }}>
                <ImCross />
                </button>
          </div>



        {/* <-----------------old------------------> */}
            {/* <p>id : {id}</p>
            <p>title : {title}</p>
            <p>price: {price} * {quantity} = {price * quantity}</p>
            <p>quantity: {quantity}</p>
            <button 
                 onClick={() => {
                    IncreaseQty(id)
                    }}>
                    Increase quantity</button>
            <button 
                onClick={() => {
                    if(quantity <= 1){
                        return;
                    }
                    DecreaseQty(id)
                    }}>
                        Decrease quantity</button>
            <button onClick={()=>{
                removeItemCart(id)
                }}>
                Remove Item</button> */}
    </div>
  )
}

export default CartItem;