import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { CardMedia } from "@material-ui/core";

function HogCard({ hog, handleDelete, handleHide }) {
  const [showDetails, setShowDetails] = useState(false);
  function handleClick() {
    setShowDetails(showDetails ? false : true);
  }
  return (
    <Card variant="outlined" className="ui eight wide column" onClick={handleClick}>
      <CardContent style={{ width: 250 }}>
        <Typography>{hog.name}</Typography>
        <CardMedia component="img" image={hog.image} alt={hog.specialty} />
        {showDetails ? (
          <div>
            <Typography>Specialty: {hog.specialty}</Typography>
            <Typography>Weight: {hog.weight}</Typography>
            <Typography>{hog.greased ? "Hog is greased" : "Hog is not greased"}</Typography>
            <Typography>Highest medal achieved: {hog["highest medal achieved"]}</Typography>
          </div>
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleHide(hog)}>
          Hide
        </Button>
        <Button size="small" onClick={() => handleDelete(hog.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default HogCard;
