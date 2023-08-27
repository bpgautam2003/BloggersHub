import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

import React from "react";

const Cover = styled(Card)({
  backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
  backgroundPosition: "center",
  padding: "35px 25px",
});

const Heading = styled(Typography)({
  fontSize: 40,
  fontFamily: "Montserrat",
});

const TextContainer = styled(CardContent)({
  color: "white",
});

export default function Featured() {
  return (
    <Cover>
      <TextContainer>
        <Heading gutterBottom>Title of Featured Blog</Heading>
        <Typography variant="h5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          maiores doloremque corporis totam asperiores qui eligendi vero,
          expedita neque esse impedit ut vitae quasi, rerum quas debitis
          quisquam possimus iste?
        </Typography>
      </TextContainer>
      <CardActions>
        <Button vvariant="text" style={{ color: "white", fontWeight: 700 }}>
          Read more...
        </Button>
      </CardActions>
    </Cover>
  );
}
