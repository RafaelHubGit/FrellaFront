import React from 'react'
import Modal from 'react-modal';
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegisterComponent';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        position               : 'fixed'
    }
};
Modal.setAppElement('#root');

const styles = {
    headerContainer: {
        height: "35px"
    },
    imagenContainer: {
        display: "flex",
        alignItems: "center",
        marginRight: "20px"
    },
    alignButton: {
        position: "absolute",
        right: "8px",
        fontWeight: "bold",
        height: "30px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        color: "#7f7d7d"
    },
    bodyContainer: {

    },
    fondo: {
        background: `url(https://firebasestorage.googleapis.com/v0/b/el33-94306.appspot.com/o/productoFondo.jpg?alt=media&token=ed4e4daf-e9f1-492c-911a-958a0cd81d7c)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100%"
    }
}

export const LoginRegisterModal = ({ isOpen=true, closeFnc }) => {
  return (
    <Modal
        isOpen={ isOpen }
        //   onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="general__modalRegisterLogin"
        overlayClassName="modal-fondo"
    >

        <div style={ styles.headerContainer }>
                <button 
                    type="button" 
                    className="btn"
                    style={ styles.alignButton }
                    onClick={ closeFnc }
        >
                    X
                </button>

        </div>

        <div className="loginReg__ModalBody">
            
            {/* <LoginComponent /> */}

            <RegisterComponent />

        </div>
    </Modal>
  )
}
