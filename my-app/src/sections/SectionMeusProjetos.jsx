import layoutStyle from './Section.module.css'
import meusProjetosStyle from './SectionMeusProjetos.module.css'
import Titulo from '../components/Titulo'
import CardProjeto from '../components/CardProjeto'
import listaDeProjetos from '../data/projetos.js'

// Import Swiper para carrossel de projetos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SectionMeusProjetos() {
    return(
        <section className={`${layoutStyle.section} ${layoutStyle.layoutRow}`}>
            <Titulo>Meus Projetos</Titulo>

            <div className={meusProjetosStyle.containerCarrossel}>
                <Swiper 
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}
            >
                {listaDeProjetos.map(projeto => (
                    <SwiperSlide key={projeto.id}>
                            <div className={meusProjetosStyle.containerWrapper}>
                                <CardProjeto projeto={projeto} />
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

        </section>
    )
}

export default SectionMeusProjetos;