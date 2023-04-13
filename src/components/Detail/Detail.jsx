import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css"

const Detail = () => {
    const url = 'https://rickandmortyapi.com/api';
    const key = 'b3607287c501.75998f2c466278552b4e';
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${url}/character/${id}?key=${key}`).then(
        ({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert("No hay personajes con ese ID");
        }
        }
    );
    return setCharacter({});
    }, [id]);

    return (
        <div>
            <h1 className={style.title}>About Main Character</h1>
            <div className={style.detail}>
                <div className={style.containerDetail}>
                    <div className={style.information}>
                        <h2>Name: {character?.name}</h2>
                        <h2>Status: {character?.status}</h2>
                        <h2>Species: {character?.species}</h2>
                        <h2>Gender: {character?.gender}</h2>
                        <h2>Origin Name: {character?.origin?.name}</h2>
                    </div>
                    <div className={style.image}>
                        <img src={character?.image} alt={character?.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
