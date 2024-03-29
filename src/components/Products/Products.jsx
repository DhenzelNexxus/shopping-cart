import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

export default function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('mais relevantes').then((response) => { 
      setProducts(response);
      if (response.length > 1){
        setLoading(false);
      }else {
        return;
      }
      
    });
  }, []);

  

  return (
    (!loading ?   
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>

      :

      <Loading />
    )
    
  );
}
