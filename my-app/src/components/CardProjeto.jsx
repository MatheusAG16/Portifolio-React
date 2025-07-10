import cardProjetoStyle from './CardProjeto.module.css'

function CardProjeto({projeto}) {

    return(
        
        <div className={cardProjetoStyle.itemProjeto}>
            <a href={projeto.link} target='_blank'>
                <img className={cardProjetoStyle.imgProjeto} src={projeto.img}/>
                <h2 className={cardProjetoStyle.tituloProjeto}>{projeto.titulo}</h2>
                <p className={cardProjetoStyle.breveDescricao}>{projeto.breveDescricao}</p>
            </a>
        </div>
    );
}

export default CardProjeto;