import { useState } from 'react';
import './styles.css'

type Props = {
    onSearch?: (searchText: string) => void;
}

export default function SearchBar({onSearch}: Props) {

    const [text, setText] = useState("");
    
    function handleSubmit(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if (onSearch) {
            onSearch(text);
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
    }

    function handleResetClick(){
        setText("");
        if (onSearch) {
            onSearch("");
        }
    }

    return (
        <form className="dsc-search-bar" onSubmit= {handleSubmit}>
            <button type="submit">🔎︎</button>
            <input 
            value={text}
            onChange= {handleChange}
            type="text" 
            placeholder="Nome do produto" />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}