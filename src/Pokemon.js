import {useState, useEffect} from 'react';
import PokeItem from './PokeItem';

const SearchBox = ({ onSearch }) => {
    const [value, setValue] = useState('')
    return(
        <div className="searchBox">
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => onSearch(value)}>
                Buscar
            </button>
        </div>
    )
}


const Pokemon = () => {
    const [findPokemon, setFindPokemon] = useState('ditto');
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        if(findPokemon) {
            const logic = async () => {
                const url = `https://pokeapi.co/api/v2/pokemon/${findPokemon}`;
                const data = await fetch(url).then(response => response.json())
                const pokemons = data
                setName(pokemons.name)
                setImgUrl(pokemons.sprites.front_default);
    
            }
    
            logic() 
        }
    }, [findPokemon])

    return (
        <div className="cardContainer">
            <div>
                <SearchBox className="textName" onSearch={setFindPokemon} />
                <PokeItem name={name} imgUrl={imgUrl} />
            </div>
        </div>
    )
}

export default Pokemon;