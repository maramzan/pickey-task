import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { ICartItem } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";

interface ICartItemProps {
  item: ICartItem;
  handleRemoveCartItem: (id: number) => void;
}

const CartItem = ({ item, handleRemoveCartItem }: ICartItemProps) => (
  <Box key={item.id}>
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <ListItemAvatar>
          <Avatar
            alt="Product Thumbnail"
            src={item?.image}
            sx={{ objectFit: "contain" }}
          />
        </ListItemAvatar>
        <Box>
          <ListItemText
            sx={{
              color: "text.primary",
              fontWeight: 700,
              display: "inline-block",
            }}
            primary={
              item?.title.length > 50
                ? item.title.substring(0, 50) + "..."
                : item.title
            }
          />
          <Box>
            <ListItemText
              sx={{
                color: "secondary.light",
                fontWeight: 700,
              }}
              primary={`$${item.price.toFixed(2)}`}
            />

            <ListItemText
              sx={{
                color: "text.light",
                fontWeight: 700,
              }}
              primary={`x ${item.quantity}`}
            />
          </Box>
        </Box>
      </Box>
      <IconButton
        sx={{ height: 30, width: 30, marginLeft: 5 }}
        onClick={() => handleRemoveCartItem(item.id)}
        aria-label="Cart"
      >
        <DeleteIcon fontSize="large" color="error" />
      </IconButton>
    </ListItem>
    <Divider />
  </Box>
);

export default CartItem;
