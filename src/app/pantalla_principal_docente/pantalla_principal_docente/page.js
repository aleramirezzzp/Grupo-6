'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import { useState } from "react"

const pantallaPDocente = () => {

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);

    function swapTopBar() {
        setTopBarIsVisible(!topBarIsVisible)
    }

    let leftBarContent

    if (topBarIsVisible) {
        leftBarContent = <LeftBar />
    }

    return (
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar} />
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>

                    <h4>Bienvenido Profesor</h4>
                    <div className={styles.linea}></div>


                    <div className={styles.sectionUltimasReservas}>

                        <h4>Ultimas reservas</h4>
                        <div className={styles.booksContainer}>
                            <div className={styles.book}>
                                <h4>Título del Libro 1</h4>
                                <p>Fecha: 10 de octubre de 2023</p>
                                <p>Hora: 15:00</p>
                            </div>
                            {/* Libro 2 */}
                            <div className={styles.book}>
                                <h4>Título del Libro 2</h4>
                                <p>Fecha: 12 de octubre de 2023</p>
                                <p>Hora: 11:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionLosMasPedidos}>
                        <div className={styles.verTodoButton}>
                            <button>Ver todo</button>
                        </div>
                        <h4>Los mas pedidos</h4>
                        <div className={styles.booksContainer}>
                            <div className={styles.book}>
                                <h4>Título del Libro 1</h4>
                                <p>Fecha: 10 de octubre de 2023</p>
                                <p>Hora: 15:00</p>
                            </div>
                            {/* Libro 2 */}
                            <div className={styles.book}>
                                <h4>Título del Libro 2</h4>
                                <p>Fecha: 12 de octubre de 2023</p>
                                <p>Hora: 11:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pantallaPDocente;