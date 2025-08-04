import React, { useState, useEffect, useRef } from "react";
import { Box, ImageList } from "@mui/material";
import { fetchAllData } from "./axios";
import { NewProduct } from "../components/NewProduct";
import { newProductComponent } from "../styles/styles";
import HoverableBox from "../components/HoverableBox";
import SearchField from "../components/SearchProduct";
import SortProducts from "../components/SortProducts";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortValue, setSortValue] = useState(0);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    fetchAllData("products", isMounted, setProducts);
    !filteredProducts.length ? setFilteredProducts(products) : setFilteredProducts(filteredProducts);
    return () => {
      isMounted.current = false;
    };
  }, [products, filteredProducts]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        mx: "3em",
      }}>
        <Box sx={{ display: "flex", mb: "1em" }}>
          <SearchField products={products} setFilteredProducts={setFilteredProducts}/>
          <SortProducts sortValue={sortValue} setSortValue={setSortValue}/>
        </Box>
      <Box sx={{ display: "inline-flex" }}>
        <ImageList
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}>
          {filteredProducts
            .slice() // create a copy to avoid mutating state
            .sort((a, b) => {
              if (sortValue === 10) return a.title.localeCompare(b.title);
              if (sortValue === 20) return b.title.localeCompare(a.title);
              if (sortValue === 30) return a.price - b.price;
              if (sortValue === 40) return b.price - a.price;
              return 0;
            })
            .map((item) => (
              <HoverableBox
                item={item}
                key={item.id}
                setOpen={setOpenDialog}
                setSelectedProduct={setSelectedProduct}
              />
            ))
          }
          <Box sx={{ ...newProductComponent, cursor: "pointer" }}>
            <NewProduct
              open={openDialog}
              setOpen={setOpenDialog}
              editData={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </Box>
        </ImageList>
      </Box>
    </Box>
  );
};

export default ProductList;
