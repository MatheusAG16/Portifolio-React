import layoutSection from './Section.module.css'
import contatoStyle from './SectionContato.module.css'
import Titulo from '../components/Titulo';
import CardRedondo from '../components/CardRedondo';

// Importando as logos
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import instagramLogo from '../assets/instagram.svg'


function SectionContato() {
    return(
        <section className={`${layoutSection.section} ${layoutSection.layoutRow}`}>
            <Titulo>Entre em contato</Titulo>
            <div className={contatoStyle.containerContato}>
                <a target="_blank" href="https://github.com/MatheusAG16">
                    <CardRedondo img={githubLogo} title={'GitHub'}/>
                </a>
                <a target="_blank" href="https://www.instagram.com/matheus_a.g/">
                    <CardRedondo img={linkedinLogo} title={'Instagram'}/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/matheus-germano-217070203/">
                    <CardRedondo img={instagramLogo} title={'Linkedin'}/>
                </a>
            </div>
        </section>
    )
}

export default SectionContato;