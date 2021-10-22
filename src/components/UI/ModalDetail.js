import React from 'react';
import ReactDOM from 'react-dom';
import './ModalDetail.css';

const ModalDetail = (props) => {

  return(props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal modal-home">
          <div className="modal-container">
            <div className="modal-img">
              <img src='https://images.routledge.com/common/jackets/crclarge/978149876/9781498760805.jpg' alt='Book image'></img>
            </div>
            <div className="modal-detail">
              <p className="modal-property">Book Name:</p>
              <p className="modal-descript">{props.book.bookName}</p>
              <p className="modal-property">Author:</p>
              <p className="modal-descript">Adam</p>
              <p className="modal-property">Category:</p>
              <p className="modal-descript">Java</p>
              <p className="modal-property">Stars:</p>
              <p className="modal-descript">Java</p>
              <p className="modal-property">Pages:</p>
              <p className="modal-descript">Java</p>
            </div>
          </div>
          <div className="modal-description">
            <p className="modal-property modal-bottom">Description</p>
            Many computer scientists, engineers, applied mathematicians, and physicists use 
            geometry theory and geometric computing methods in the design 
            of perception-action systems, intelligent autonomous systems, and man-machine interfaces
          </div>
          <div className="modal-btn">
            <button type="button"  className="modal-button" onClick={props.hide}>
                Close
            </button>
          </div>
          
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null)
};

export default ModalDetail;