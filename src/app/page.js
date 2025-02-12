'use client'

import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react' 
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const [usuario, setUsuario] = useState('');  
  const [password, setPassword] = useState('');  

  const router = useRouter();
  
  const handleClick = () =>{
      
      if(usuario === 'adminDocente' && password === 'adminDocente'){
          router.push('/pantalla_principal_docente');

      }else if(usuario === 'adminEstudiante' && password === 'adminEstudiante'){
          router.push('/pantalla_principal_estudiante');
      }
      else{
          alert('Acceso denegado');
      }
      
  }

  const handleClick2 = () =>{
      
        router.push('/pantalla_registro');
    
}
  
  return (

    
    <main className={styles.container}>
      <h1 className={styles.titulo}>Sistema de reserva de libro</h1>
      <form>
      
        <div className={styles.form_box}>
          <input type='text' className={styles.form_input} onChange={e => setUsuario(e.target.value)}></input>
          <label for='' className={styles.form_label}>Usuario o Correo</label>
        </div>
        <div className={styles.form_box}>
          <input type='password' className={styles.form_input} onChange={e => setPassword(e.target.value)}></input>
          <label for='' className={styles.form_label}>Contraseña</label>
        </div>

      </form>
      <div className={styles.parrafo1}>
      <p className={styles.parrafo}><Link className={styles.lnk} href='/' text="Olvidé mi contraseña" >Olvidé mi contraseña</Link> </p>
      </div>
      <div className={styles.btn}>
        <div className={styles.a}>
            <button className={styles.registrousuario} onClick={handleClick2}>Registro usuario</button> <button className={styles.ingresar} onClick={handleClick}> Ingresar </button>
          </div>
      </div>
  
    </main>

  )
}
