// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  LEFTarrow = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const newIndex =
      (currentIndex - 1 + reviewsList.length) % reviewsList.length
    this.setState({currentIndex: newIndex})
  }

  RIGHTarrow = () => {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const newIndex = (currentIndex + 1) % reviewsList.length
    this.setState({currentIndex: newIndex})
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state

    const CurrentReview = reviewsList[currentIndex]
    return (
      <div className="bgImage">
        <h1>Reviews</h1>
        <div className="reviews">
          <img src={CurrentReview.imgUrl} alt={CurrentReview.username} />
          <p>{CurrentReview.username}</p>
          <p>{CurrentReview.companyName}</p>
          <p>{CurrentReview.description}</p>
        </div>
        <div className="arrows">
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.LEFTarrow}
            />
          </button>
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt=" right arrow"
              onClick={this.RIGHTarrow}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
