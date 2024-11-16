/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const NewArrivalCard = ({ product }) => {
  const { _id, name, image, title, price } = product;

  return (
    <div className="mx-auto">
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            sx={{ height: "300px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              price:${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="flex justify-center mb-4">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-ghost flex">
              <BsCart4></BsCart4> Slect-Option
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NewArrivalCard;
