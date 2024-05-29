import ProductCard from "../../components/productCard";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LoadingCard from "../../components/loadingCard";
import useProducts from "./hooks/useProducts";
import { categories } from "../../constants";

const Products = () => {
  const {
    products,
    loading,
    handleSearchChange,
    handleCategoryChange,
    search,
    category,
  } = useProducts();

  return (
    <Box>
      <Container sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <TextField
          value={search}
          onChange={handleSearchChange}
          id="outlined-basic"
          label="search product..."
          variant="outlined"
          sx={{ width: 300, mr: 2 }}
        />
        <FormControl sx={{ width: 150 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category || "All Categories"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>

      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {loading
          ? Array(8)
              .fill(null)
              .map((_, index) => <LoadingCard key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </Container>
    </Box>
  );
};

export default Products;
