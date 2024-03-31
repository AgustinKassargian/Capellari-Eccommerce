'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './tabs.module.css';


export default function Tabs() {
  const router = useRouter();
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const handleProductClick = (route) => {
    // Manejar la navegación a la página de productos
    router.push('/products'.concat(`?${route}=true`));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex space-x-4 gap-4">
      <Link className={styles.tab} href="/">
        Home
      </Link>
        <div
          className='relative z-10'
          onMouseEnter={() => setShowProductsDropdown(true)}
          onMouseLeave={() => setShowProductsDropdown(false)}
        >
          <Link
            href={'/products'}
            className={`${styles.tab} ${showProductsDropdown ? styles.active : ''}`}
            // onClick={()=> router.push('/products')}
          >
            Products
          </Link>
          <div style={!showProductsDropdown ? {display: 'none'} : {display:'block', height:'0px'}}/>
          <div className={styles.dropdown} style={!showProductsDropdown ? {display: 'none'} : {display:'block', opacity:1,  transform: 'translateY(1px)', color:'black'}}>
            <ul>
              <li onClick={()=> router.push('/products')}>All Products</li>
              <li onClick={()=>handleProductClick('Heladeras')}>Fridges</li>
              <li onClick={()=>handleProductClick('Televisores')}>Tvs</li>
              <li onClick={()=>handleProductClick('Microondas')}>Microwaves</li>
              <li  onClick={()=> router.push('/products')}>Others</li>
            </ul>
          </div>
        </div>
        <Link className={styles.tab} href="/about_us">
          About Us
        </Link>
        <Link className={styles.tab} href="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
}





