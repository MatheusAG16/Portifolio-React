import styles from './Titulo.module.css'
import AnimaAoAparecer from '../animation/AnimaAoAparecer';

function Titulo({children}) {
    return(
        <AnimaAoAparecer><h1 className={styles.titulo}>{children}</h1></AnimaAoAparecer>
    )
}

export default Titulo;