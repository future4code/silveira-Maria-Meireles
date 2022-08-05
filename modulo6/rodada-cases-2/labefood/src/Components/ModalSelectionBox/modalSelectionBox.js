import * as React from 'react';
import Modal from '@mui/material/Modal';
import { 
    ModalBox,
    ModalTitle,
    AddToCartButton, 
    SelectQuantityInput
} from './style'

const ModalSelectionBox = ({openModal, setOpenModal}) => {
  
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropProps={{
            timeout: 500
        }}
      >
        <ModalBox>
            <ModalTitle> Selecione a quantidade desejada: </ModalTitle>
            <SelectQuantityInput> 
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
            </SelectQuantityInput>
            <AddToCartButton> Adicionar ao carrinho </AddToCartButton>  
        </ModalBox>
      </Modal>
    </>
  );
}

export default ModalSelectionBox;