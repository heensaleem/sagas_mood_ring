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
    console.log('in handle tag change',event.target.value);
    this.setState({
      tag_id: event.target.value
    })
  }
  

  handleClick = () => {
    console.log('clicked on add tag button and tag id is:',this.state.tag_id )
    this.props.dispatch({ type: 'ADD_TAGS', payload: { images_id: this.props.imageList[this.props.currentImageIndex].id, tags_id: this.state.tag_id } })
  }
  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.props.tagsList)}</pre> */}
        
        <select value={this.state.tag_id}  onChange={this.handleTagChange}>
          <option disabled value="0">Pick One!</option>
          {this.props.tagsList.map(tag => {
            return (
              <option value={tag.id} onChange={this.handleNameChange} >{tag.name}</option>
            )
          })}
        </select>
        <button onClick={this.handleClick}>Add Tag!</button>
        <p>Tags</p>
        <ol>{this.state.name}</ol>
        
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