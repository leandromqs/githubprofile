import styles from './Perfil.module.css'

const Perfil = ({perfilUser}) => {
    return (
        <header className={styles.header}>
            <img className={styles.fotoPerfil} src={`https://github.com/${perfilUser}.png`}/>
            <h1 className={styles.nomePerfil}> {perfilUser}</h1>
        </header>
    )
}

export default Perfil;