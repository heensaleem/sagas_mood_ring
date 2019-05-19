import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../ImagesForm/Images.css';

class ImagesForm extends Component {

    state = {
        currentIndex: 0
    }

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_IMAGES'})
    }

    conditionalImage = () => {
        return(
            (this.props.imageList.length > 0) ?
            this.renderImage() :            
            <div></div>
        )
    }

    renderImage = () => {
        return (
            <div>
        <img alt=''className="Image" src={this.props.imageList[this.state.currentIndex].path} />
        <div>
            <button onClick={() => this.setIndex('decrease')}>Previous</button>
            <button onClick={() => this.setIndex('increase')}>Next</button>

        </div>  
        </div> 
        )
        
        
    }

    setIndex = (string) => {
         if(string === 'decrease'){
           return this.state.currentIndex - 1
         }else if(string === 'increase'){
            return this.state.currentIndex + 1 
         }
    }

    // render() {
    //     return (
        //   <div>
        //       <pre>{JSON.stringify(this.props.imageList)}</pre>
        //     {this.props.imageList.map((image, i) => {
        //       return <div key={i}><img className="Image" src={image.path} /></div>
        //   })}
        //   </div>
        render(){
            console.log("images", this.props.imageList);
            return(
                <div>
                    <pre>{JSON.stringify(this.props.imageList)}</pre>                
                    {this.conditionalImage()}
                
                </div>
            )
        }

}    

const mapStateToProps = (reduxState) => {
    return {
      imageList: reduxState.images
    }
  }
  
  export default connect(mapStateToProps)(ImagesForm);