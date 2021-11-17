import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from '../api/registers';
import "./App.css";
import Header from "./Header";
import AddRegister from "./AddRegister";
import RegisterList from "./RegisterList";

function App() {
  const [registers, setRegisters] = useState([]);

  //RetrieveRegisters
  const retrieveRegisters = async () => {
    const response = await api.get("/registers");
    return response.data;
  };

  const addRegisterHandler = async (register) => {
    //console.log(register);
    const request = {
      ...register
    };
    const response = await api.post("/registers", request);
    setRegisters([...registers, response.data]);
  };

  const removeRegisterHandler = async (id) => {
    await api.delete(`/registers/${id}`);
    const newRegisterList = registers.filter((register) => {
      return register.id !== id;
    });
    setRegisters(newRegisterList);
  };

  useEffect(() => {
    /*const retrieveRegisters = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveRegisters) setRegisters(retrieveRegisters);*/
      const getAllRegisters = async () => {
        const allRegisters = await retrieveRegisters();
        if (allRegisters) setRegisters(allRegisters);
      };
      getAllRegisters();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(registers));
  }, [registers]);

  return (
    <div className="ui container">
      {/*<Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <RegisterList
                registers={registers}
                getRegisterId={removeRegisterHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddRegister addRegisterHandler={addRegisterHandler} />}
          />

        </Routes>
      </Router>*/}
      <Header />
      <AddRegister addRegisterHandler={addRegisterHandler} />
      <RegisterList
        registers={registers}
        getRegisterId={removeRegisterHandler}
      />
    </div>
  );
}

export default App;
