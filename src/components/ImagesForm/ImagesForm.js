import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../ImagesForm/Images.css';
import TagsForm from '../TagsForm/TagsForm';

class ImagesForm extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_IMAGES' })
    }

    state = {
        currentIndex: 0
    }
//condition to check if the image list is greater than 0, if it is greater renderImage otherwise return empty div
    conditionalImage = () => {
        return (
            (this.props.imageList.length > 0) ?
                this.renderImage() :
                <div></div>
        )
    }
//renders an image by its path and display it in Dom with the buttons previous and next
    renderImage = () => {
        return (
            <div>
                <img alt='' className="Image" src={this.props.imageList[this.state.currentIndex].path} />
                <div>
                    <button className="previous" onClick={() => this.setIndex('decrease')}>Previous</button>
                    <button className="next" onClick={() => this.setIndex('increase')}>Next</button>
                </div>
            </div>
        )
    }
//if previous button is clicked decreases the currentIndex by 1 and shows the previos image
//if the Next button is clicked increases the currentIndex by 1 and shows the next image 
    setIndex = (string) => {
        //if clicked on previous button
        if (string === 'decrease') {
            console.log('clicked on Previous button',this.state.currentIndex);
            //nested if else to check the current indexState is less than 0 set state to imagelist length -1
            if (this.state.currentIndex - 1 < 0) {
                this.setState({
                    currentIndex: this.props.imageList.length - 1
                })
                //otherwise setState of current index -1
            } else {
                this.setState({
                    currentIndex: this.state.currentIndex - 1
                })
            }
//if clicked on Next button case
        } else if (string === 'increase') {
            console.log('clicked on NEXT button', this.state.currentIndex);
            // this.setState({
            //     currentIndex: this.state.currentIndex + 1
            // }) 
            //nested if else to check the current indexState is greater than imageList length then set state to 0           
            if (this.state.currentIndex + 1 > this.props.imageList.length - 1) {
                this.setState({
                    currentIndex: 0
                })
            //otherwise setState of currentIndex to +1    
            } else {
                this.setState({
                    currentIndex: this.state.currentIndex + 1
                })
            }
        }
    }


    render() {
        console.log("images", this.props.imageList);
        return (
            <div>
                <h2>Image Title</h2>
                {/* <pre>{JSON.stringify(this.props.imageList)}</pre> */}
                {/* to display image Carousal DOM  */}
                {this.conditionalImage()}
                <TagsForm currentImageIndex={this.state.currentIndex} />
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