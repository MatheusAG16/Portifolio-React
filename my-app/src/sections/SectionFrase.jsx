import layoutStyle from "./Section.module.css"
import sectionFrase from "./SectionFrase.module.css"
import Titulo from "../components/Titulo";

function SectionFrase() {
    return(
        <section className={layoutStyle.section}>
            <div className={sectionFrase.container}>
                <Titulo>Código é a poesia da lógica, escrita para resolver problemas humanos.</Titulo>
                <img src="https://nerdizmo.ig.com.br/wp-content/uploads/2024/02/netflix-e-studio-ghibli-capa.jpg" className={sectionFrase.imagemSectionFrase} />
            </div>
        </section>
    )
}

export default SectionFrase;