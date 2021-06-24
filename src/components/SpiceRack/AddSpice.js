import { IconButton, Modal, Button } from '@material-ui/core'
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
        <div >
            <Button  onClick={handleAddClick} className='addSpiceButton' >
                Add Spice <AddIcon/>
            </Button>
            <Modal
        // handleModalClose={handleAddModalClose}
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
