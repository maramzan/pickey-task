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
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography fontWeight={600}>{product.title}</Typography>
        <Typography variant="body2" mt={1}>
          {product.category}
        </Typography>

        <Typography mt={1} variant="body2" color="text.secondary">
          {product.description.substring(0, 100) +
            (product.description.length > 100 ? "..." : "")}
        </Typography>
      </CardContent>
    </Card>
  );
}
