import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Development(props){
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={props.image}/> 
                  <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text>
                      {props.Text}
                    </Card.Text>
                    <Button variant="primary" className="mx-3">{props.Time}</Button>
                    <Button variant="primary">{props.Plateform}</Button>
                  </Card.Body>
                </Card>
              
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}
export default function WebDevelopment(){
    return(
        
      <Development
      image="https://berkarir.id/wp-content/uploads/2020/07/web-developer-multitasking.jpg"
      Title="Web development refers to the creating, building, and maintaining of websites. "
      Time="2 years"
      Plateform="online"
    />
    )
}