import React from "react";

import "./styles.scss";

const Button = props => {
  return (
    <div className="button" onClick={props.onClick}>
      {props.text}
    </div>
  );
};

export default Button;
