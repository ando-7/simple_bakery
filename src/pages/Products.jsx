import { Box } from "@mui/material";
import ProductList from "../api/ProductList";
import { careerBoxStyle } from "../styles/styles";

function Products() {

  return (
    <Box sx={careerBoxStyle}>
          <ProductList />
    </Box>
  );
}

export default Products;
