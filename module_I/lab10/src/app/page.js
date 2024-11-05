"use client";

import Image from "next/image";
import styles from "./page.module.css";

import {useState, useMemo, useCallback} from "react";
import {useGetProductsQuery} from "lab10/store/services/product.api";
import ProductItem from "lab10/components/product.item";

export default function Home() {
  
  const {data, error, isLoading} = useGetProductsQuery();
  const [search, setSearch] = useState('');
  
  const filteredProducts = useMemo(() =>
       data?.filter(product => product.name.toLowerCase().includes(search.toLowerCase())),
    [search, data]);
  
  const handleProduct = useCallback((product) => {
    alert(`has hecho clic en el Producto ${product.name}`);
  }, [search]);
  
  return (
    <div>
      <h1>Lista de Productos</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {
          isLoading ?
            <h3>Loading..</h3>
            :
            filteredProducts?.map((product) => (
              <div key={product.id} onClick={() => handleProduct(product)}>
                <ProductItem product={product} />
              </div>
            ))
        }
      </div>
    </div>
  );
}
