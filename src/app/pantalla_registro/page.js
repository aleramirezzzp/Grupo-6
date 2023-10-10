'use client'

import styles from './page.module.css';
import Input from '../../components/Input/Input.jsx';

const pantallaRegistro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1_1}>Sistema de Citas para Atención a Estudiantes</h1>
      <h1 className={styles.h1_2}>Pagina de Registros</h1>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h5 className={styles.h5_1}>Datos personales</h5>
          <div className={styles.input1}>
            <Input namew='Nombres'></Input>
            <Input namew='Apellidos'></Input>
            <Input namew='Tipo de Documento'></Input>
            <Input namew='Nro de Documento'></Input>
          </div>
        </div>
        <div className={styles.rightContent}>
          <h5 className={styles.h5_1}>Datos de la cuenta</h5>
          <div className={styles.input1}>
            <Input namew='Correo Electronico'></Input>
            <Input namew='Password'></Input>
            <Input namew='Ingrese Password nuevamente'></Input>
            <button className={styles.registrar}>Registrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pantallaRegistro;
