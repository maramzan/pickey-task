import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { ICartItem } from "../../types";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "../cartItem";

interface ICartDialogProps {
  open: boolean;
  onClose: () => void;
  cartItems: ICartItem[];
  totalPrice?: number;
  handleRemoveCartItem: (id: number) => void;
  handleItemIncrement: (id: number) => void;
  handleItemDecrement: (id: number) => void;
  handleClearCart: () => void;
}

export default function CartDialog(props: ICartDialogProps) {
  const {
    onClose,
    open,
    cartItems,
    totalPrice,
    handleRemoveCartItem,
    handleItemIncrement,
    handleItemDecrement,
    handleClearCart,
  } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <Box sx={{ minWidth: 400 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 2,
          }}
        >
          <DialogTitle sx={{ pt: 2 }}> Cart Items </DialogTitle>
          <IconButton
            sx={{ height: 30, width: 30 }}
            onClick={onClose}
            aria-label="Cart"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {cartItems?.length === 0 ? (
            <Typography variant="h4" align="center" mt={2} mb={2}>
              No items in cart
            </Typography>
          ) : (
            <>
              {cartItems?.map((item: any) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleItemDecrement={handleItemDecrement}
                  handleItemIncrement={handleItemIncrement}
                  handleRemoveCartItem={handleRemoveCartItem}
                />
              ))}
              <ListItem
                disableGutters
                sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
              >
                <Typography variant="body1" fontWeight={"bold"}>
                  Total:
                </Typography>
                <Typography variant="body1" fontWeight={"bold"}>
                  {`$${totalPrice?.toFixed(2)}`}
                </Typography>
              </ListItem>
              <Box
                sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}
              >
                <Button
                  onClick={handleClearCart}
                  sx={{ marginLeft: 1 }}
                  variant="contained"
                >
                  Checkout
                </Button>
              </Box>
            </>
          )}
        </List>
      </Box>
    </Dialog>
  );
}
