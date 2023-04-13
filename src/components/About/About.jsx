import style from "./about.module.css";
import aboutImg from "../../img/about-photo.jpg"

const About = () => {
    return (
        <div>
            <h1 className={style.title}>About Main Character</h1>
            <div className={style.about}>
                <div className={style.containerAbout}>
                    <div className={style.information}>
                        <h2>Name: Jose Centeno</h2>
                        <h2>Status: Alive</h2>
                        <h2>Species: Human</h2>
                        <h2>Gender: Male</h2>
                        <h2>Origin Name: Earth (webft37a)</h2>
                    </div>
                    <div className={style.image}>
                        <img src={aboutImg} alt={aboutImg} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;