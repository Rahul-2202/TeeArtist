import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductCard = ({image, title, description, price}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(title);
  };
  return (
    <Card sx={{maxWidth: 245, maxHeight: 385, margin: 4}}>
      <div style={{position: "relative"}}>
        <FavoriteIcon
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer"
          }}
          color={isLiked ? "disabled" : "error"}
          className="wishlistIcon"
          onClick={handleLike}
        />
        <CardMedia
          component="img"
          height={307}
          maxWidth={245}
          alt="product image"
          image={image}
        />
      </div>
      <div style={{padding: "0px 5px 0px 12px"}}>
        <h4
          className="text-left"
          style={{
            color: "rgb(88, 92, 112)",
            padding: 0,
            margin: 0,
            marginBottom: 4,
            marginTop: 7
          }}
        >
          {title}
        </h4>
        <hr
          style={{
            padding: 0,
            margin: 0,
            marginBottom: 1,
            marginTop: 1
          }}
        />
        <div className="row">
          <h5
            style={{
              padding: 0,
              margin: 0,
              marginBottom: 4,
              fontWeight: "normal"
            }}
          >
            {description}
          </h5>
          <div className="col-12" style={{paddingRight: "0px"}}>
            <span className="offer fsemibold">
              <b>₹ {price}</b>
            </span>
          </div>
          <div className="col-12 percentage-off member-savings pb-1">
            &nbsp;
          </div>
        </div>
      </div>
    </Card>
  );
};
export default ProductCard;
