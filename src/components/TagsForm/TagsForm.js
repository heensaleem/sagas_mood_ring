import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagssForm extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_TAGS' })
  }

  state = {
    name: '',
    tag_id: 0,
    //image_id:0
  }

  handleTagChange = (event) => {
    console.log('in handle tag change', event.target.value);
    this.setState({
      tag_id: event.target.value
    })
  }


  handleClick = () => {
    console.log('clicked on add tag button and tag id is:', this.state.tag_id)
    this.props.dispatch({ type: 'ADD_TAGS', payload: { images_id: this.props.imageList[this.props.currentImageIndex].id, tags_id: this.state.tag_id } })
  }
  render() {
    return (
      <div>
         <pre>{JSON.stringify(this.props.tagNameList)}</pre> 

        <select value={this.state.tag_id} onChange={this.handleTagChange}>
          <option disabled value="0">Pick One!</option>
          {this.props.tagsList.map((tag, i) => {
            return (
              <option key={i} value={tag.id} onChange={this.handleNameChange} >{tag.name}</option>
            )
          })}
        </select>
        <button onClick={this.handleClick}>Add Tag!</button>
        {/* <div>
          {this.props.tagsNameList.map((image_id) => {
            if(image_id === this.state.image_id){
              return <p>{this.state.name}</p>
            }
          })}
        </div>   */}

      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    tagsList: reduxState.tags,
    imageList: reduxState.images,
    tagNameList: reduxState.tagsName.images_id
  }
}

export default connect(mapStateToProps)(TagssForm);