import React from "react";
//import { Link } from "react-router-dom";
import RegisterCard from "./RegisterCard";

const RegisterList = (props) => {
  console.log(props);

  const deleteRegisterHandler = (id) => {
    props.getRegisterId(id);
  };

  const renderRegisterList = props.registers.map((register) => {
    return (
      <RegisterCard
        register={register}
        clickHandler={deleteRegisterHandler}
        key={register.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>Register List</h2>
      <div className="ui celled list">{renderRegisterList}</div>
    </div>
  );
};

export default RegisterList;
