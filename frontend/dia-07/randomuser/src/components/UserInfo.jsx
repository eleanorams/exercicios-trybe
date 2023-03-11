import React from 'react';

// foto, nome, email e idade do usuário

class UserInfo extends React.Component {
    state = {
        user: [],
        loading: true,

    }

    componentDidMount() {
        fetch('https://api.randomuser.me/')
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                user: data.results,
                loading: false
            })
        })
    }

    shouldComponentUpdate(_nextProps, nextState) {
        const AGE = 50;
        if (nextState.user[0].dob.age < AGE) return true;
      }

    render() {
    const { user, loading } = this.state
    if (loading) return <p>Carregando...</p>;
    return (
        <div>
        {user.map((element) => {
            const { title,first, last } = element.name;
            const { large } = element.picture;
            const { age } = element.dob;
            return (
                <>
                    <div key={element.email}>
                <img src={large} alt={first} />
                <p>{title} {first} {last} </p>
                <p>{element.email}</p>
                <p>{age}</p>
                </div> 
                </>
            )
        })}
        </div>
    )
    }
}

export default UserInfo;