import carrosselStyle from "./CarrosselTecnologia.module.css"
import CardRedondo from "./CardRedondo"
import logoHtml from '../assets/html5.svg'
import logoCss from '../assets/CSS3.svg'
import logoJavaScript from '../assets/Javascript.svg'
import logoReact from '../assets/react2.svg'
import logoPython from '../assets/python.svg'
import logoMysql from '../assets/mysql.svg'
import logoJava from '../assets/java.svg'
import logoBootstrap from '../assets/bootstrap.svg'
import logoWordPress from '../assets/wordpress.svg'
import logoNodeJs from '../assets/nodeJs.svg'


function CarrosselTecnologia() {
    return(
        <div className={carrosselStyle.container}>
            <CardRedondo img={logoHtml} title={'HTML'}/>
            <CardRedondo img={logoCss} title={'CSS'}/>
            <CardRedondo img={logoJavaScript} title={'JavaScript'}/>
            <CardRedondo img={logoReact} title={'React'}/>
            <CardRedondo img={logoPython} title={'Python'}/>
            <CardRedondo img={logoMysql} title={'MySql'}/>
            <CardRedondo img={logoNodeJs} title={'Node.js'}/>
            <CardRedondo img={logoBootstrap} title={'Bootstrap'}/>
            <CardRedondo img={logoJava} title={'Java'}/>
            <CardRedondo img={logoWordPress} title={'WordPress'}/>

            <CardRedondo img={logoHtml} title={'HTML'}/>
            <CardRedondo img={logoCss} title={'CSS'}/>
            <CardRedondo img={logoJavaScript} title={'JavaScript'}/>
            <CardRedondo img={logoReact} title={'React'}/>
            <CardRedondo img={logoPython} title={'Python'}/>
            <CardRedondo img={logoMysql} title={'MySql'}/>
            <CardRedondo img={logoNodeJs} title={'Node.js'}/>
            <CardRedondo img={logoBootstrap} title={'Bootstrap'}/>
            <CardRedondo img={logoJava} title={'Java'}/>
            <CardRedondo img={logoWordPress} title={'WordPress'}/>

        </div>
    )
}

export default CarrosselTecnologia;