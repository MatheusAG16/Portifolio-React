import layoutStyle from './Section.module.css'
import styleFormacaoTecnologia from './SectionFormacaoTecnologia.module.css'
import Titulo from '../components/Titulo';
import CardRedondo from '../components/CardRedondo'

//Import images
import logoHtml from '../assets/html5.svg'
import logoCss from '../assets/CSS3.svg'
import logoJavaScript from '../assets/Javascript.svg'
import logoReact from '../assets/react2.svg'


function SectionFormacaoTecnologia() {
    

    return(
        <section className={`${layoutStyle.section} ${layoutStyle.layoutRow}`}>
            <div className={styleFormacaoTecnologia.containerTitulo}>
                <Titulo>Formação e Tecnologias</Titulo>
                <ul className={styleFormacaoTecnologia.listaFormacao}>
                    <h2>Formação</h2>
                    <li>Cursando Tecnólogo em Análise e desenvolvimento de sistemas pela UNINOVE.</li>
                </ul>
            </div>
            <div className={styleFormacaoTecnologia.containerTecnologia}>
                <CardRedondo img={logoHtml} title={'HTML 5'}/>
                <CardRedondo img={logoCss} title={'CSS 3'}/>
                <CardRedondo img={logoJavaScript} title={'JavaScript'}/>
                <CardRedondo img={logoReact} title={'React'}/>
                <h2 className={styleFormacaoTecnologia.subTituloTecnologias}>Tecnologias</h2>
            </div>  
        </section>
        
    )
}

export default SectionFormacaoTecnologia;