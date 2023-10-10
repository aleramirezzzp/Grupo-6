'use client'

import styles from './page.module.css'
import TopBar from '../../components/TopBar/TopBar.jsx'
import LeftBar from '../../components/LeftBar/LeftBar.jsx'
import React, { useState } from "react"


const pantallaPerfil = () => {

    const [topBarIsVisible, setTopBarIsVisible] = useState(true);
    const [contendoIsVisible, setContenidoIsVisible] = useState("DU");
    const [selectedFilters, setSelectedFilters] = useState([]); 
    function swapTopBar() {
        setTopBarIsVisible(!topBarIsVisible)
    }

    let leftBarContent

    if (topBarIsVisible) {
        leftBarContent = <LeftBar /> 
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [bookType, setBookType] = useState("");

    const handleFilterChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedFilters([...selectedFilters, value]);
        } else {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
        }
    };

    const handleClear = () => {
        setSearchQuery("");
        setBookType("");
        setSelectedFilters([]); 
    };

    return (
        <div className={styles.container}>
            <TopBar onButtonClick={swapTopBar} />
            <div className={styles.main}>
                {leftBarContent} {/* Render the LeftBar component */}
                <div className={styles.contenido}>
                    <div className={styles.containerTitulo}>
                        <h1 className={styles.titulo}>Búsqueda</h1>
                    </div>
                    <div className={styles.linea}></div>
                    <div className={styles.buscar}>
                        <input
                            type="text"
                            placeholder="Ingresa la palabra clave"
                            className={styles.inputBusqueda}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Ingresa el tipo de libro"
                            className={styles.inputBusqueda}
                            value={bookType}
                            onChange={(e) => setBookType(e.target.value)}
                        />

                        <div className={styles.filters}>
                            <p><h4>Incluir búsqueda en:</h4> </p>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Titulo"
                                    checked={selectedFilters.includes("Titulo")}
                                    onChange={handleFilterChange}
                                />
                                Título
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Autor"
                                    checked={selectedFilters.includes("Autor")}
                                    onChange={handleFilterChange}
                                />
                                Autor
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Serie"
                                    checked={selectedFilters.includes("Serie")}
                                    onChange={handleFilterChange}
                                />
                                Serie
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="ISBN"
                                    checked={selectedFilters.includes("ISBN")}
                                    onChange={handleFilterChange}
                                />
                                ISBN
                            </label>
                        </div>
                    </div>
                    <div className={styles.buscar}>
                        <button className={styles.boton} onClick={handleClear}>Limpiar</button>
                        <button className={styles.boton}>Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pantallaPerfil;

