import { useState, useEffect, useCallback, useMemo } from "react";
import { IProductsState } from "../../../types";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/slices/productsSlice";
import { AppDispatch } from "../../../store";

const useProducts = () => {
  const [filters, setFilters] = useState({ search: "", category: "" });
  const [showMessage, setShowMessage] = useState(false);

  const handleMessageHide = () => {
    setShowMessage(false);
  };

  const dispatch: AppDispatch = useDispatch();

  const { products, loading, error } = useSelector(
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

  const filteredProducts = useMemo(() => {
    const { search, category } = filters;

    return products.filter((product) => {
      return (
        (search
          ? product.title.toLowerCase().includes(search.trim().toLowerCase())
          : true) &&
        (category && category !== "All Categories"
          ? product.category === category
          : true)
      );
    });
  }, [filters, products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return {
    products: filteredProducts,
    loading,
    error,
    handleSearchChange,
    handleCategoryChange,
    search: filters.search,
    category: filters.category,
    handleMessageHide,
    showMessage,
  };
};

export default useProducts;
