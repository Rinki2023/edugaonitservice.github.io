import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Tooltip(props) {
  return (
    <>
      <Card sx={{ maxWidth: 345, backgroundColor:"#0000" }}>
        <CardActionArea>
          {props.logo}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {props.months}
          </Button>{" "}
          <Button size="small" color="primary">
            {props.plateform}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default function Explore() {
  return (
    <>
      <Tooltip
        logo="Hello"
        title="Welcome"
        details="nehvbbfv"
        months="12 month"
        plateform="online"
      />
      <Tooltip
        logo="Hello"
        title="Welcome"
        details="nehvbbfv"
        months="2 years"
        plateform="ofline"
      />
      <Tooltip
        logo="Hello"
        title="Welcome"
        details="nehvbbfv"
        months="1 years"
        plateform="classroom"
      />
    </>
  );
}
