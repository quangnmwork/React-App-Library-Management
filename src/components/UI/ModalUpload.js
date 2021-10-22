import React from 'react';
import ReactDOM from 'react-dom';
import './ModalUpload.css';
import * as IoIcons from 'react-icons/io';
const ModalUpLoad = ({ isShowing, hide ,success}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        {/* <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div> */}
        <p>
          {success?<IoIcons.IoMdCheckmarkCircle style={{'color':'#40ed37','fontSize':'5rem'}}/>:
          <IoIcons.IoMdCloseCircle style={{'color':'#fc2408','fontSize':'5rem'}}/>}
        </p>
        <p>Upload {success?'Successful':'Fail! Fill full information'}!</p>
        <button type="button" className="modal-button"  onClick={hide}>
            Ok
        </button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalUpLoad;