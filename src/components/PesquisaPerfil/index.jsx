import { useState } from 'react'

import logo from '../../assets/githublogo.png'
import styles from './PesquisaPerfil.module.css'
import '../../global.css'

function PesquisaPerfil({userNameSearch}) {
    const [userName, setUserName] = useState('')

    function tratarSubmit(evento) {
        evento.preventDefault();
        const nome = userName.trim();
        if (!nome) return;
        userNameSearch(nome)
    }

    return (
        <div class="container">
            <div className={styles.pesquisaPerfil}>
                <h1 className={styles.gitHubProfile}>GitHub Profile</h1>
                <form onSubmit={tratarSubmit} className={styles.inputBtn}>
                    <input onChange={evento => setUserName(evento.target.value)} className={styles.campoPesquisa} type="text" placeholder='Digite o perfil desejado' />
                    <button class="button" type="submit">Pesquisar</button>
                </form>
                <img className={styles.gitHubLogo} src={logo} />
            </div>
        </div>
    )
}

export default PesquisaPerfil; 