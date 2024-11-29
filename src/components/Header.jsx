import React, { useEffect, useState } from 'react';
import Modal from './UI/Modal';
import Cart from './Cart';
import styles from './Header.module.css'
import Container from './UI/Container';
import { IoCart } from "react-icons/io5";
import { useCart } from '../contexts/CartProvider';
function Header() {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
    const[isModalOpen, setIsModelOpen] = useState(false);
   function closeModal() {
      setIsModelOpen(false);
    }

    useEffect(() => {
        if(isModalOpen){
            document.documentElement.style.overflowY = "hidden";
        }
        else {
            document.documentElement.style.overflowY = "scroll";
        }

    },[isModalOpen]);
  return (
    <header className={styles.Header}>
        <Container>
        <nav className={styles.nav}>
            <h1>ARC Shop</h1>
            <button 
             className={styles.showCartBtn}
            onClick={() => {setIsModelOpen(true)}}>
              <span className={styles.cartIconAndNumber}>
                 <IoCart/> 
                {totalQuantity > 0 && (
                 <span className={styles.number}>
                  {totalQuantity}
                  </span>
                )}
              </span>
              <span>Cart</span>
              </button>
        </nav>
        </Container>
        {isModalOpen && ( 
          <Modal closeModal={closeModal}>
            <Cart />
          </Modal>
        )}
    </header>
  )
}

export default Header;