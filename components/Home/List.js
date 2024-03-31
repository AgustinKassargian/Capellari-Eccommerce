import React from 'react';
import ProductCard from './ProductCard';

export default function List({ array }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
      {array && array.map((element, index) => (
        <ProductCard
          key={index}
          name={element.title}
          price={element.price}
          img={element.mainImg}
          align={index % 3 === 0 ? "start" : index % 3 === 1 ? "center" : "end"}
          slug={element.slug}
        />
      ))}
    </div>
  );
}