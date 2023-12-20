import Modal from 'react-modal';

Modal.setAppElement('#root');

export const MyModal = ({ modalIsOpen, modalIsClose, largeImg, tags }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalIsClose}
      style={{
        overlay: {
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(63, 81, 181, 0.12)',
          zIndex: '1200',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
      contentLabel="Example Modal"
    >
      <img src={largeImg} alt={tags} />
    </Modal>
  );
};
