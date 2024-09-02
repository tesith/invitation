import ReactModal from 'react-modal';
import './modal.css';

/*overlay는 모달 창 바깥 부분을 처리하는 부분이고,
content는 모달 창부분이라고 생각하면 쉬울 것이다*/
const customModalStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100%",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "360px",
      height: "225px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

const Modal = ({isOpen, close, children}) => {
    return (
        <>
            <ReactModal isOpen={isOpen}
            onRequestClose={close}
            style={customModalStyles}
            ariaHideApp={false}
            contentLabel="Pop up Message"
            shouldCloseOnOverlayClick={true}
            >
              {children}
              <button className="closeButton" onClick={close}>X</button>
            </ReactModal>
        </>
    )
}

export default Modal;