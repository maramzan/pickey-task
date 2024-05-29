import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import { IProduct } from "../../types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ActionAreaCard({ product }: { product: IProduct }) {
  return (
    <Card sx={{ width: 250, mt: 2, ml: 2 }}>
      <CardHeader
        title={product.name}
        subheader={`$${product.price}`}
        action={
          <IconButton aria-label="settings">
            <ShoppingCartIcon />
          </IconButton>
        }
      />
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="250"
        image={product.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography>{product.category}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
