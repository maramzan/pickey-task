import ProductCard from "../../components/productCard";
import {
  Alert,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LoadingCard from "../../components/loadingCard";
import useProducts from "./hooks/useProducts";
import { categories } from "../../constants";
import ErrorComponent from "../../components/errorComponent";
import useCart from "./hooks/useCart";
import CartDialog from "../../components/cartDialog";
import Navbar from "../../components/navbar";

const Products = () => {
  const {
    products,
    loading,
    error,
    handleSearchChange,
    handleCategoryChange,
    search,
    category,
  } = useProducts();

  const {
    handleAddToCart,
    cartItems,
    openCart,
    handleCartClose,
    handleCartOpen,
    totalPrice,
    handleRemoveCartItem,
    handleItemDecrement,
    handleItemIncrement,
    handleClearCart,
    showMessage,
    handleShowMessage,
    handleHideMessage,
    message,
  } = useCart();

  return (
    <Box>
      <Navbar onCartClick={handleCartOpen} />
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

      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {loading ? (
            Array(8)
              .fill(null)
              .map((_, index) => <LoadingCard key={index} />)
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                handleShowMessage={handleShowMessage}
                key={product.id}
                onAddToCart={handleAddToCart}
                product={product}
                inCart={cartItems.some((item) => item.id === product.id)}
              />
            ))
          ) : (
            <Typography mt={3} variant="h5">
              No Products Found
            </Typography>
          )}
        </Container>
      )}

      <CartDialog
        open={openCart}
        onClose={handleCartClose}
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleRemoveCartItem={handleRemoveCartItem}
        handleItemDecrement={handleItemDecrement}
        handleItemIncrement={handleItemIncrement}
        handleClearCart={handleClearCart}
      />

      <Snackbar
        open={showMessage}
        autoHideDuration={2000}
        onClose={handleHideMessage}
      >
        <Alert
          onClose={handleHideMessage}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;
