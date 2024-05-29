import { useState, useEffect, useCallback, useMemo } from "react";
import { IProductsState } from "../../../types";
import { productsData } from "../../../constants";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../store/slices/productsSlice";

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: "", category: "" });

  const dispatch = useDispatch();

  const { products } = useSelector(
    (state: { productState: IProductsState }) => state.productState
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters((filters) => ({ ...filters, search: e.target.value }));
    },
    []
  );

  const handleCategoryChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      setFilters((filters) => ({ ...filters, category: event.target.value }));
    },
    []
  );

  // As we have a few products, we can filter them on the client-side one all the data is fetched.
  // In case we are fetching data from an API and we want to apply filters on the server-side,
  // we can use a technique called debouncing.
  const filteredProducts = useMemo(() => {
    const { search, category } = filters;

    return products.filter((product) => {
      return (
        (search
          ? product.name.toLowerCase().includes(search.trim().toLowerCase())
          : true) &&
        (category && category !== "All Categories"
          ? product.category === category
          : true)
      );
    });
  }, [filters, products]);

  // here we are mocking an API call using setTimeout, in a real app you would fetch the data from an API
  // if we want to use real api data, we can use the fetchProducts thunk, which is commented out in the productsSlice.ts file
  useEffect(() => {
    setTimeout(() => {
      dispatch(setProducts(productsData));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  return {
    products: filteredProducts,
    loading,
    handleSearchChange,
    handleCategoryChange,
    search: filters.search,
    category: filters.category,
  };
};

export default useProducts;
