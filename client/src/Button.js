import React from "react";
import Modal from "react-modal";
import LoginSignUp from "./LoginSignUp";

Modal.setAppElement("#root"); //To remove error/warning in console for accessibility reasons
function Button(props) {
  /* Boolean values  are used to open and close modal. Initial value is false meaning that modal is closed by default. 
   onClick attribute will be used for a button to open modal on click. Once clicked, the boolean value is set as true */
  const [modalIsOpen, setmodalIsOpen] = React.useState(false);
  const openModal = () => setmodalIsOpen(true);
  const closeModal = () => setmodalIsOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-gray-500 text-white px-4 py-1 rounded-full float-right mr-10 text-base"
      >
        {props.text}
      </button>
      <Modal
        className="m-auto w-max mt-20 text-black"
        isOpen={modalIsOpen} //To open this modal based on a state variable that is set on button click
        onRequestClose={closeModal} //Either clicking on overlay or pressing ESC
        style={{
          //Modal's style prop
          overlay: {
            position: "fixed",
            paddingTop: "30px",
            zIndex: 20,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <button
          className="float-right text-white text-xl px-3 py-1 "
          onClick={closeModal}
        >
          x
        </button>
        <LoginSignUp />
      </Modal>
    </div>
  );
}

export default Button;
