import React, {useState} from 'react'
import {Avatar} from '@material-ui/core'

const FotoProfil = ({image}) => {
    const [username, setUsername] = useState(localStorage.getItem('username'))    
    console.log(typeof username)

    return (                
        <Avatar src={image} alt="Remy Sharp"  >
            {image ? "" : username[0] }
        </Avatar>                       
    )
}

export default FotoProfil
