import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagssForm extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TAGS' })
    }

    state = {
        name: '',
        tag_id: 0
    }

    handleTagChange = (event) => {
        console.log(event.target.value);
        this.setState({
          tag_id : event.target.value
        })
      } 
    
      
    
      handleClick = () => {
    
        this.props.dispatch({type: 'ADD_I', payload:  {image_id:this.props.imageList[this.props.currentImageIndex].id, tag_id:this.state.tag_id }})
      }
    render(){
        return(
           <div>
               <pre>{JSON.stringify(this.props.tagsList)}</pre>
           
           <div>
           
           <select value={this.state.tag_id} onChange={this.handleTagChange}>
               <option disabled value="0">Pick One!</option>
             {this.props.tagsList.map( tag => {
               return (
                 <option value={tag.id}>{tag.name}</option>
               )
             })}
           </select>
           <button onClick={this.handleClick}>Add Tag!</button>
         </div>
         </div>

        )
        
    }

}

const mapStateToProps = (reduxState) => {
    return {
         tagsList: reduxState.tags,
         imageList: reduxState.images
    }
}

export default connect(mapStateToProps)(TagssForm);