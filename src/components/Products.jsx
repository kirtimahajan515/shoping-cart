import React from 'react'
import { products } from '../data/products';
import Product from './Product';
import Container from './UI/Container'
import styles from './Products.module.css';
function Products() {
  return (
    <Container>
      <h1>The Best ARC</h1>
      <div className={styles.products}>
        {products.map((product) => (
            <Product key={product.id} {...product}/>
        ))}
    </div>
    </Container>
  )
}

export default Products;