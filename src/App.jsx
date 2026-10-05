import { useRef, useState, useEffect } from 'react'

import Perfil from './components/Perfil'
import RepoList from './components/ReposList'
import PesquisaPerfil from './components/PesquisaPerfil'


function App() {
  const [perfilUserName, setPerfilUserName] = useState('')
  const resultadoRef = useRef(null)

  useEffect (() => {
    if (perfilUserName.length > 2) {
      resultadoRef.current?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [perfilUserName])

  return (
    <>
      <PesquisaPerfil userNameSearch={setPerfilUserName} />
      {perfilUserName.length > 2 && (
        <>
          <div ref={resultadoRef}>
            <Perfil perfilUser={perfilUserName} />
            <RepoList userRepos={perfilUserName} />
          </div>
        </>
      )}
    </>
  )
}

export default App
