import layoutStyles from './Section.module.css'
import stylesSobreMim from './SectionSobreMim.module.css'
import Titulo from '../components/Titulo'
import AnimaAoAparecer from '../animation/AnimaAoAparecer'

function SectionSobreMim() {
    return(
            <section className={layoutStyles.section}>
                <div className={stylesSobreMim.containerSobreMim}>
                    <Titulo>Quem é Matheus?</Titulo>
                    <p className={stylesSobreMim.paragrafoSobreMim}>Estudante de Análise e Desenvolvimento de Sistemas, desenvolvedor Front-End com React e apaixonado por escrever códigos!<br/></p>
                    <hr/>
                </div>
                <AnimaAoAparecer>
                    <img src='https://i.imgur.com/lF6MOee.jpeg' className={stylesSobreMim.imagemSobreMim}/>
                </AnimaAoAparecer>
            </section>
    )
}

export default SectionSobreMim;