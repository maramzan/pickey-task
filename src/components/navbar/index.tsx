import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useSelector } from "react-redux";
import { ICartState } from "../../types";

const Navbar = ({ onCartClick }: { onCartClick: () => void }) => {
  const totalItems = useSelector(
    (state: { cartState: ICartState }) => state.cartState.totalItems
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {"PICKEY"}
          </Typography>
          <IconButton
            onClick={onCartClick}
            aria-label="Cart"
            sx={{ color: "#fff" }}
          >
            <Badge badgeContent={totalItems} color="error">
              <AddShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
