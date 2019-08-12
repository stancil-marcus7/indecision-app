import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal
        //This converts props.selectedOption to a boolean value
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        //Going to allow us to use our own styles for the modal
        className="modal"
        closeTimeoutMS={200}
        contentLabel="Selected Option">
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.closeModal}>Okay</button>
    </Modal>
)


export default OptionModal;