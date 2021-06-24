import { IconButton, Modal } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import {React, useState} from 'react'
import AddSpiceDialogue from './AddSpiceDialogue';

export default function AddSpice() {


    const [modalOpen, setModalOpen] = useState(false)

    const handleAddClick = () => {
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
            <IconButton className='addSpiceButton' onClick={handleAddClick}>
                <AddIcon/>
            </IconButton>
            <Modal
            // onClick={handleAddModalClose}
                open={modalOpen}
                onClose={handleAddModalClose}
                aria-labelledby='add spice'
                aria-describedby='add spice to spice rack dialogue'
            >
                <AddSpiceDialogue ></AddSpiceDialogue>
            </Modal>
            
        </div>
    )
}
