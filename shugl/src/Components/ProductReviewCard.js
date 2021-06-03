import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginLeft: "25px",
    marginTop: "1.5rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductReviewCard(props) {
  const classes = useStyles();
  let history = useHistory();
  if (props.id === "shamsi") {
    history.push(`/view/${props.id}`);
  } else if (props.id === "dua") {
    history.push(`/view/${props.id}`);
  } else if (props.id === "jb") {
    history.push(`/view/${props.id}`);
  } else if (props.id === "hanif") {
    history.push(`/view/${props.id}`);
  } else if (props.id === "united") {
    history.push(`/view/${props.id}`);
  } else if (props.id === "friends") {
    history.push(`/view/${props.id}`);
  }

  return (
    <Card
      className={classes.root}
      id="proClass"
      style={{ borderRadius: "10px 10px", marginBottom: "2rem" }}
    >
      <Link to={`/view/productPage/${props.url}`}>
        <CardActionArea>
          <CardMedia
            style={{ width: 250 }}
            className={classes.media}
            image={props.imgUrl}
            title="Paella dish"
          />
          <div
            className="row"
            style={{
              marginLeft: "0.05rem",
              marginTop: "0.5rem",
              maxWidth: 220,
            }}
          >
            <div className="col col-md-5">
              <h5 style={{ fontWeight: "bold", color: "black" }}>
                {props.name}
              </h5>
            </div>
            <div className="col col-md-3 offset-md-3">
              <h6 style={{ marginTop: "0.4rem", color: "grey" }}>
                {props.price}
              </h6>
            </div>
          </div>
          <div className="row" style={{ maxWidth: 250 }}>
            <div className="col col-md-7">
              <CardHeader subheader={props.description.substring(0, 15)} />
            </div>
            <div className="col col-md-4">
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </div>
          </div>
        </CardActionArea>
      </Link>
    </Card>
  );
}
