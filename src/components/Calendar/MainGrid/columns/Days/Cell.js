import React ,{useState} from 'react'
import classes from './Cell.module.css'
import Modal from './Modal'


const Cell = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
   <div>

    <div className={classes.cell}
    onClick={() => {
      setModalOpen(true);
    }}
  >
    
    </div>
  {modalOpen && <Modal setOpenModal={setModalOpen} />}
  </div>
  
  )
}

export default Cell