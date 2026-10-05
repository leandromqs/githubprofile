import { useEffect, useState } from "react";
import styles from './RepoList.module.css'


function RepoList({ userRepos }) {
    const [repos, setRepoList] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${userRepos}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepoList(resJson)
                }, 3000)
            })
            .catch(e => {
                alert('O suário não existe.')
            })
    }, [userRepos])

    return (
        <>
            {repos > 0 ? (
                <div class="container">
                    {estaCarregando ? (
                        <h1 className={styles.carregando}>Carregando...</h1>
                    ) : (
                        <ul className={styles.list}>
                            {repos.map(({ id, name, language, html_url }) => (
                                <li key={id} className={styles.listItem}>
                                    <div>
                                        <b>Nome:</b>
                                        {name}
                                    </div>
                                    <div>
                                        <b>Linguagem:</b>
                                        {language}
                                    </div>
                                    <a className={styles.listItemLink} target="_blank" href={html_url}>Visite no GitHub</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            ) : (
                <div class="container">
                    {estaCarregando ? (
                        <h1 className={styles.carregando}>Carregando...</h1>
                    ) : (
                        <h1 className={styles.notfound}>O usuário não existe!</h1>
                    )}
                </div>

            )}

        </>
    )
}



export default RepoList; 