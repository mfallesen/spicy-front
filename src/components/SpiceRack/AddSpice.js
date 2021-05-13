import { Button, IconButton, Modal } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import {React, useState} from 'react'
import AddSpiceDialogue from './AddSpiceDialogue';

export default function AddSpice() {

    const [addedSpiceState, setAddedSpiceState] = useState({

    })

    const [modalOpen, setModalOpen] = useState(false)

    const handleAddClick = () => {
        console.log("Clicky")
        setModalOpen(true)
    }

    // TODOS:
    const addModalOpen = () => {
        setModalOpen(true)
    }

    const handleAddModalClose = () => {
        setModalOpen(false)
    }

    return (
        <div>
            <IconButton onClick={handleAddClick}>
                <AddIcon/>
            </IconButton>
            <Modal
                open={modalOpen}
                onClose={handleAddModalClose}
                aria-labelledby='add spice'
                aria-describedby='add spice to spice rack dialogue'
            >
                <AddSpiceDialogue></AddSpiceDialogue>
            </Modal>
            
        </div>
    )
}
