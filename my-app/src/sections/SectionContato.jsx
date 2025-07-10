import layoutSection from './Section.module.css'
import contatoStyle from './SectionContato.module.css'
import Titulo from '../components/Titulo';
import CardRedondo from '../components/CardRedondo';

function SectionContato() {
    return(
        <section className={`${layoutSection.section} ${layoutSection.layoutRow}`}>
            <Titulo>Entre em contato</Titulo>
            <div className={contatoStyle.containerContato}>
                <CardRedondo/>
                <CardRedondo/>
                <CardRedondo/>
            </div>
        </section>
    )
}

export default SectionContato;