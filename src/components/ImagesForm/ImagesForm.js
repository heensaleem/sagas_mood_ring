import React, {Component} from 'react';
import { connect } from 'react-redux';

class ImagesForm extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_IMAGES'})
    }

    render() {
        return (
          <div>
              
            {this.props.reduxState.images.map((image, i) => {
              return <div key={i}><img className="Image" src={image.path} /></div>
          })}
          </div>
        )
      
    }

}    

const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
  
  export default connect(mapStateToProps)(ImagesForm);