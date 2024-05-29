import { Typography } from "@mui/material";

const ErrorComponent = ({ error }: { error: string }) => {
  return (
    <Typography mt={3} variant="h5" textAlign="center" color="error">
      {error}
    </Typography>
  );
};

export default ErrorComponent;
