import layoutStyles from './Section.module.css'
import stylesSobreMim from './SectionSobreMim.module.css'
import Titulo from '../components/Titulo'
import AnimaAoAparecer from '../animation/AnimaAoAparecer'

function SectionSobreMim() {
    return(
            <section className={layoutStyles.section}>
                <div className={stylesSobreMim.containerSobreMim}>
                    <Titulo>Quem é Matheus?</Titulo>
                    <p className={stylesSobreMim.paragrafoSobreMim}>Sou Desenvolvedor Front-End Freelancer, estudante de Analise e Desenvolvimento de Sistemas e apaixonado por escrever códigos!<br/></p>
                    <hr/>
                </div>
                <AnimaAoAparecer>
                    <img src='https://matheusag16.github.io/meu-portifolio/images/foto-perfil-att.jpeg' className={stylesSobreMim.imagemSobreMim}/>
                </AnimaAoAparecer>
            </section>
    )
}

export default SectionSobreMim;