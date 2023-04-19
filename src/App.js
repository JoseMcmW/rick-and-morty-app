import style from "./App.module.css";
import Cards from '../src/components/Cards/Cards.jsx';
import Nav from '../src/components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form.jsx';
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

/* const URL_BASE = 'https://rickandmortyapi.com/api';
const API_KEY = 'b3607287c501.75998f2c466278552b4e'; */

const email = "josemcentenoc@gmail.com";
const password = "Vinny09";

function App() {
   const location = useLocation();
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate("/home");
      }
   };

   useEffect(() => {
      !access && navigate("/") //!access es negar access lo que es igual a true
   }, [navigate, access]); //Queda pendiente de access para dar acceso a home

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFiltered)
   };

   return (
      <div className={style.Container}>
         {
         location.pathname !== "/" ? <Nav onSearch={onSearch} setAccess={setAccess}/> : null
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

      </div>
   );
};

export default App;
