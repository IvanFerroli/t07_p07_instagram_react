import React, { Fragment, useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(true);

  return (
    <Fragment>
      {like ? (
        <ion-icon onClick={() => setLike(false)} name="heart" style="color: red;" ></ion-icon>
      ) : (
        <ion-icon onClick={() => setLike(true)} name="heart-outline" ></ion-icon>
      )}
    </Fragment>
  );
};

export default LikeButton;