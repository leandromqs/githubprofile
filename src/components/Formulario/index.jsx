import { useEffect, useState } from "react";

const Formulario = () => {
    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();
    const [nome, setNome] = useState();

    useEffect(() => {
        console.log('Componentes carregados')

        return () => {
            console.log('Coponente finalizado')
        }
    }, [])


    const retornaMedia = () => {
        const soma = nota1 + nota2 + nota3;
        const media = soma / 3;
        
        if (media >= 7) {
            return (
                <p>Você passou de ano!</p>
            )
        } else {
            return(
                <p>Você NÃO passou de ano!</p>
            )
        }
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Digite seu nome" onChange={evento => setNome(evento.target.value)}/>
                <input type="number" placeholder="Insira a sua primeira nota" onChange={evento =>  setNota1(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Insira a sua segunda nota" onChange={evento =>  setNota2(parseInt(evento.target.value))}/>
                <input type="number" placeholder="Insira a sua terceira nota" onChange={evento =>  setNota3(parseInt(evento.target.value))}/>
                <br/>
            </form>
        </div>
    )
}

export default Formulario;