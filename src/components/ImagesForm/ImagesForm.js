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

    conditionalImage = () => {
        return (
            (this.props.imageList.length > 0) ?
                this.renderImage() :
                <div></div>
        )
    }

    renderImage = () => {
        return (
            <div>
                <img alt='' className="Image" src={this.props.imageList[this.state.currentIndex].path} />
                <div>
                    <button onClick={() => this.setIndex('decrease')}>Previous</button>
                    <button onClick={() => this.setIndex('increase')}>Next</button>
                </div>
            </div>
        )
    }

    setIndex = (string) => {
        if (string === 'decrease') {
            console.log('clicked on Previous button');
            if (this.state.currentIndex - 1 < 0) {
                this.setState({
                    currentIndex: this.props.imageList.length - 1
                })
            } else {
                this.setState({
                    currentIndex: this.state.currentIndex - 1
                })
            }


        } else if (string === 'increase') {
            console.log('clicked on NEXT button');
            // this.setState({
            //     currentIndex: this.state.currentIndex + 1
            // })            
            if (this.state.currentIndex + 1 > this.props.imageList.length - 1) {
                this.setState({
                    currentIndex: 0
                })
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