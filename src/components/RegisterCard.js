import React from "react";
import registerPic from "../images/register.png";

const RegisterCard = (props) => {
  const { id, pm10, pm25 } = props.register;
  return (
    <div className="item">
      <img className="ui avatar image" src={registerPic} alt="Avatar data" />
      <div className="content">
        <div className="header">Datos</div>
        <div>{id}</div>
        <div>{pm10}</div>
        <div>{pm25}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default RegisterCard;
