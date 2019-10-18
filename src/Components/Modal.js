import React, {Component} from 'react';

class Modal extends Component {

    render(){
        return ( 
            <div  className="Modal">
                <button>x</button>
                <h1>{this.props.message}</h1>
            </div> 
        );
  }
}

export default Modal;
