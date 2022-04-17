import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ heading, content }) {
  return (
    <Card py={4} sx={{ minWidth: 275, minHeight: 175, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
}
