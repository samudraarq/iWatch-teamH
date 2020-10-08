import React from 'react'
import {Button} from '@material-ui/core'

const LogOut = ({handleLogOut}) => {

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleLogOut}
            >             
            Log Out            
        </Button>   
    )
}

export default LogOut
