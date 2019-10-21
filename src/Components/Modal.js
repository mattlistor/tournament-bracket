import React, {Component} from 'react';

let modalStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
}

let closeButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50px',
    border: 'none',
    width: '30px',
    height: '30px',
    fontweight: 'bold',
    alignSelf: 'flex-end',
    outline: 'none'
}
class Modal extends Component {
    render(){
        return (  
            <div id="myModal" className="modal" onClick={() => this.props.closeModal()}>
                <div id="object" className="fadeIn" onClick={() => this.props.closeModal()}>
                    <div className="close" onClick={() => this.props.closeModal()}>&times;</div>
                    <div className="message">
                        <p>{this.props.message}</p>
                    </div>                    
                </div>
            </div>
        );
  }
}

export default Modal;
