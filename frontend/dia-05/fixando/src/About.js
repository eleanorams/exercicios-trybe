import React from 'react'

class AboutMe extends React.Component {
    render() {
        const AboutMe = 'Eleanora Martins. Não gosto de fazer nada. Vou matar um certo alguém'
        const MinhasHabilidades = 'Nenhuma habilidade'
        return <>
        <h1> Eleanora </h1>
        <p> { AboutMe } </p>
       <h2> Minhas Habilidades </h2>
       <ul>
        <li>Nenhuma</li>
        <li>Nada</li>
        <li>Não sei</li>
       </ul>
        </>
    }
}

export default AboutMe;