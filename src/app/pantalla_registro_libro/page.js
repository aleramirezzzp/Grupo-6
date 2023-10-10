'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Input from '@/components/Input/Input'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const pantalla_registro_libro = () =>{

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);
    const [contendoIsVisible, setContenidoIsVisible] = useState("DU");

    function swapTopBar()
    {
        setTopBarIsVisible(!topBarIsVisible)
    }

    function swapContenidoDU()
    {
        setContenidoIsVisible("DU")
    }

    function swapContenidoU()
    {
        setContenidoIsVisible("U")
    }

    function swapContenidoP()
    {
        setContenidoIsVisible("P")
    }

    let leftBarContent

    if (topBarIsVisible)
    {
        leftBarContent = <LeftBar/>
    }

    let contenido

    if (contendoIsVisible==="DU")
    {
        contenido = (
            <div className={styles.input1}>
            <Input namew='Titulo'></Input>
            <Input namew='Autor, autores'></Input>
            <Input namew='ISBN'></Input>
            <Input namew='Serie, tipo'></Input>
            </div>
        )           
        
    }

    return(
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar}></TopBar>
            <div className={styles.main}>
                {leftBarContent}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Hola, profesor</h1>
                        
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.selector}>
                    <ButtonGroup className="mb-2">
                        <Button onClick={swapContenidoDU}>INSERTAR NUEVO LIBRO</Button>
                    </ButtonGroup>                
                    </div>
                    <br></br>
                    
                    {contenido}
                    <div className={styles.guardar}>
                    <Button>Guardar</Button></div>
                </div>
            </div>
                      
        </div>

    )

}
<Button>Guardar</Button>
export default pantalla_registro_libro;
