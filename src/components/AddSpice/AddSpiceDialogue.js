import { Grid, Container, IconButton, makeStyles,  TextField, Button } from '@material-ui/core';
import {React, useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: 'white',
        borderRadius: '5px',
        width: '60%',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        left: '20%'
    },
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        minWidth: '200px'
    },
    icon: {
        marginLeft: '95%',
        marginTop: '-15px'
    }
}))


export default function AddSpiceDialogue() {

    const classes = useStyles();

    const [addSpiceState, setAddSpiceState] = useState({
        spicename: '',
        brandname: '',
        purchasedate: '',
        expiredate: '',

    })


    const addSpiceInputChange = event => {
        const {name, value } = event.target;
        setAddSpiceState({
            ...addSpiceState,
            [name]: value
        })
    }

    const addSpice = () => {
        console.log('addingSpice!!');
    }

    return (
        <Container className={classes.background}>
            <IconButton className={classes.icon} >
                <CancelIcon htmlColor='red' />
            </IconButton>
            <form addSpiceState>
                <Grid container spacing={3} justify='center' direction='column' alignItems='center'>
                    <Grid item>
                        <TextField
                            className={classes.inputbox}
                            required
                            variant='outlined'
                            name='spicename'
                            label='Spice Name:'
                            placeholder='Salt'
                            onChange={addSpiceInputChange}
                            value={addSpiceState.spicename}
                        >
                        </TextField>
                        
                        <TextField
                            className={classes.inputbox}
                            required
                            variant='outlined'
                            name='brandname'
                            label='Spice Brand:'
                            placeholder='Mortons'
                            onChange={addSpiceInputChange}
                            value={addSpiceState.brandname}
                        >
                        </TextField>
                        
                    </Grid>
                    <Grid item>
                        <TextField
                        type='date'
                            className={classes.inputbox}
                            required
                            variant='outlined'
                            name='purchasedate'
                            label='Purchase Date:'
                            onChange={addSpiceInputChange}
                            value={addSpiceState.purchasedate}
                            InputLabelProps={{
                                shrink: true,
                              }}
                        >
                            
                        </TextField>
                        <TextField
                        type='date'
                            className={classes.inputbox}
                            required
                            variant='outlined'
                            name='expiredate'
                            label='Expiration Date:'
                            onChange={addSpiceInputChange}
                            value={addSpiceState.expiredate}
                            InputLabelProps={{
                                shrink: true,
                              }}
                        ></TextField>
                    </Grid>
                </Grid>
                <Button variant='contained' color='primary' onClick={addSpice}>Add Spice</Button>
            </form>
        </Container>
    )
}
