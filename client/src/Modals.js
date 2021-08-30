import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import Glass from "./Glass";
import Passport from "./Passport";

Modal.setAppElement("#root"); //To remove error/warning in console for accessibility reasons
function Modals(props) {
  /* Boolean values  are used to open and close modal. Initial value is false meaning that modal is closed by default. 
   onClick attribute will be used for a button to open modal on click. Once clicked, the boolean value is set as true */
  const [modalIsOpen, setmodalIsOpen] = React.useState(false);
  const openModal = () => setmodalIsOpen(true);
  const closeModal = () => setmodalIsOpen(false);
  return (
    <div>
      <div className="mr-10">
        <Glass>
          <Button text="Sign up" onClick={openModal} />
        </Glass>
      </div>
      <Modal
        className="m-auto w-max mt-20 text-black"
        isOpen={modalIsOpen} //To open this modal based on a state variable that is set on button click
        onRequestClose={closeModal} //Either clicking on overlay or pressing ESC to close this modal
        style={{
          //Modal's style prop
          overlay: {
            position: "fixed",
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
        <Passport />
      </Modal>
    </div>
  );
}

export default Modals;
