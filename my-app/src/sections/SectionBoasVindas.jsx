import layoutStyles from './Section.module.css'
import boasVindasStyle from './SectionBoasVindas.module.css'
import AnimaAoAparecer from '../animation/AnimaAoAparecer'

import Titulo from '../components/Titulo'


function SectionBoasVindas() {

    return(
        <section className={layoutStyles.section}>
            <AnimaAoAparecer>
            <div className={boasVindasStyle.containerBoasVindas}>
                <Titulo>Olá, mundo! {<br/>}{<br/>} Bem-vindo ao meu portfólio.</Titulo>
                <p className={boasVindasStyle.paragrafoBoasVindas}>Matheus de Andrade / Desenvolvedor Front-End</p>
            </div>
            </AnimaAoAparecer>
            
            <AnimaAoAparecer>
            <img src={'https://avatars.githubusercontent.com/u/103548678?s=400&u=1561f615c250a017e9cce312163e924d804d6e6e&v=4'} className={boasVindasStyle.imagemBoasVindas}/>
            </AnimaAoAparecer>
        </section>
    )
}

export default SectionBoasVindas;