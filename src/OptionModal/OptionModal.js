import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        //This converts props.selectedOption to a boolean value
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        contentLabel="Selected Option">
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.closeModal}>Okay</button>
    </Modal>
)


export default OptionModal;