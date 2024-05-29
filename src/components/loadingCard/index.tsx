import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

export default function LoadingCard() {
  return (
    <Card sx={{ width: 250, mt: 2, ml: 2 }}>
      <CardHeader
        title={<Skeleton variant="text" width="60%" />}
        subheader={<Skeleton variant="text" width="40%" />}
      />
      <Skeleton variant="rectangular" width="100%" height={250} />
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
}
