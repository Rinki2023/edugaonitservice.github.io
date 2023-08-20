import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Frontendbackend(props){
    return(
        <>
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
        </>
    )
}

export default function Frontend(){
    return(
        
     <>
         <Frontendbackend
      image="https://th.bing.com/th/id/R.a80a78d389b5e917085e33bb89ea8b52?rik=rqloADFh2eU9og&riu=http%3a%2f%2ftoghr.com%2fwp-content%2fuploads%2f2020%2f05%2ffi-4-mei-2020-1.jpg&ehk=UzsCQIxkSyp0KYdpoc%2bRYZjfqMvnh1WGcCLFGiPNZF4%3d&risl=&pid=ImgRaw&r=0"
      Title="App development is the process in which developers create an application to be used on smartphones, tablets and other mobile devices. "
      Time="2 years"
      Plateform="online"
    />
     </>
    )
}