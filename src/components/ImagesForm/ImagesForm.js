import React, {Component} from 'react';
import { connect } from 'react-redux';

class ImagesForm extends Component {
    state = {
      
    }

}    

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
  
  export default connect(mapStateToProps)(ImagesForm);