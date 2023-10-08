'use client'
import Link from 'next/link'
import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useRouter } from 'next/navigation'


const pantallaPerfil = () => {

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);
    const [contendoIsVisible, setContenidoIsVisible] = useState("DU");

    function swapTopBar() {
        setTopBarIsVisible(!topBarIsVisible)
    }

    function swapContenidoDU() {
        setContenidoIsVisible("DU")
    }

    function swapContenidoU() {
        setContenidoIsVisible("U")
    }

    function swapContenidoP() {
        setContenidoIsVisible("P")
    }

    let leftBarContent

    if (topBarIsVisible) {
        leftBarContent = <LeftBar />
    }

    let contenido

    if (contendoIsVisible === "DU") {
        contenido = (
            <>
                <Input namew='Usuario'></Input>
                <br></br>
                <Input namew='Constrasena Actual'></Input>
                <Input namew='Nueva Contrasena'></Input>
                <Input namew='Repetir Contrasena'></Input>
            </>)

    }
    else if (contendoIsVisible === "U") {
        contenido = (
            <>
                <Input namew='Universidad'></Input>
                <Input namew='Carrera'></Input>
                <Input namew='Agregar Cursos'></Input>
            </>)
    }
    else {
        contenido = (
            <>
                <Input namew='Titulo'></Input>
                <Input namew='Presentacion'></Input>
            </>)
    }

    return (
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Biblioteca</h1>
                        <a href="/pantalla_registro_libro" className={styles.nuevoRecursoBtn}>Añadir un nuevo recurso</a>

                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.buscar}>
                        <input
                            type="text"
                            placeholder="Ingresa la palabra clave"
                            className={styles.inputBusqueda}
                        />
                        <button className={styles.boton}>Buscar</button>
                    </div>
                    <div className={styles.librosContainer}>
                        <div className={styles.libro}>
                            <div className={styles.circulo}>PP</div>
                            <h3>Psychology of computer programming</h3>
                            <img src="imagen_libro_1.jpg" alt="Libro 1" />
                            <p>ISBN: 0932633420</p>
                            <p>Autor:0932633420</p>
                            <p>ISBN: Addison Wesley</p>
                            <button className={styles.reservarBtn}>Reservar</button>
                        </div>


                        <div className={styles.libro}>
                            <div className={styles.circulo}>PP</div>
                            <h3>Programming pearls</h3>
                            <img src="imagen_libro_2.jpg" alt="Libro 2" />
                            <p>ISBN: 0932633420</p>
                            <p>Autor:0932633420</p>
                            <p>ISBN: Addison Wesley</p>
                            <p>No Disponible</p>
                            <button className={styles.reservarBtn}>Reservar</button>

                        </div>
                        <div className={styles.libro}>
                            <div className={styles.circulo}>PP</div>
                            <h3>Functional Programming</h3>
                            <img src="imagen_libro_3.jpg" alt="Libro 3" />
                            <p>ISBN: 0932633420</p>
                            <p>Autor:0932633420</p>
                            <p>ISBN: Addison Wesley</p>
                            <p>No Disponible</p>
                            <button className={styles.reservarBtn}>Reservar</button>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default pantallaPerfil;