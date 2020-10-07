import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import styles from '../Navbar.module.css'

const Search = () => {
    const [input, setInput] = useState("")
    let history = useHistory();

    const handleChange = (e) =>{        
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()        
        if(e.key==='Enter'){     
            history.push(`/search/${input}`)       
            
        }
    }


    return (        
        <input
          type="text"
          className={styles.input}
          placeholder="Search movies"
          onChange={handleChange}
          onKeyUp={handleSubmit}          
        ></input>        
    )
}

export default Search