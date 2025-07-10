import layoutStyle from './Section.module.css'
import styleFormacaoTecnologia from './SectionFormacaoTecnologia.module.css'
import Titulo from '../components/Titulo';

//Import images
import CarrosselTecnologia from '../components/CarrosselTecnologia';


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
                <CarrosselTecnologia/>
            </div>
            <ul className={styleFormacaoTecnologia.listaTecnologia}>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>BootStrap</li>
                <li>Java</li>
                <li>WordPress</li>
            </ul>
        </section>
        
    )
}

export default SectionFormacaoTecnologia;