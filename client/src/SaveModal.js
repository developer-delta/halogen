import React from "react";
import Modal from "react-modal";
import Button from "./Button";
import TextInput from "./TextInput";

Modal.setAppElement("#root"); //To remove error/warning in console for accessibility reasons
function SaveModal() {
  const [modalIsOpen, setmodalIsOpen] = React.useState(false);
  return (
    <div>
      <div className="absolute bottom-3 right-7">
        <Button
          text="Save"
          fontSize="1.2em"
          onClick={() => setmodalIsOpen(true)}
        />
      </div>
      <div>
        <Modal
          className="m-auto w-max mt-20 text-black"
          isOpen={modalIsOpen}
          onRequestClose={() => setmodalIsOpen(false)}
          style={{
            overlay: {
              position: "fixed",
              paddingTop: "12% ",
              zIndex: 20,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <div className="bg-gray-600 py-10 px-16 rounded-lg text-center">
            <h2>Give your new palette a name!</h2>
            <TextInput placeholder="Add Palette's Name" />
            <div className="mt-5 flex justify-between">
              <Button
                text="Cancle"
                color="black"
                background="white"
                width="48%"
                onClick={() => setmodalIsOpen(false)}
              />
              <Button
                text="Save"
                color="black"
                background="white"
                width="48%"
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default SaveModal;