import { useState } from 'react';

const Home = () => {

    const [HomeName, setHomeName] = useState('Accueil');

    const handleClick = () => {
        setHomeName('Home');
    }

    return (
        <div className="home">
            <h2>{HomeName}</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home