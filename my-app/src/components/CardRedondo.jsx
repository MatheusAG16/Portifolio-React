import style from './CardRedondo.module.css'

function CardRedondo({img, title}) {
    

    return (
        <div className={style.container}>
            <img className={style.imagemProjeto} src={img}/>
            <h1>{title}</h1>
        </div>
    );
}

export default CardRedondo;