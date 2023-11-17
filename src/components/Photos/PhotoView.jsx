import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

function PhotoView({ photo }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card key={photo.id} sx={{ height: "100%" }}>
        <CardMedia
          component={"img"}
          sx={{ minHeight: "23.2rem", width: "100%" }}
          image={photo.thumbnailUrl}
          alt={photo.title}
        />
        <CardContent sx={{ height: "3rem", mt: "auto" }}>
          <Typography variant="subtitle1">{photo.title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default React.memo(PhotoView);
