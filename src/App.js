import style from "./App.module.css";
import Cards from "../src/components/Cards/Cards.jsx";
import Nav from "../src/components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

/* const URL_BASE = 'https://rickandmortyapi.com/api';
const API_KEY = 'b3607287c501.75998f2c466278552b4e'; */

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login";
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/"); //!access es negar access lo que es igual a true
  }, [navigate, access]); //Queda pendiente de access para dar acceso a home

  const onSearch = async (id) => {
    try {
      const idFound = characters.find(char => char.id === id);
      if(idFound) {return alert("This character exist.")}

      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (characters) => characters.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className={style.Container}>
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      ) : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
