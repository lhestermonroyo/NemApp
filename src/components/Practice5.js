import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: "img/img1.jpg",
    altText: "Image 1",
    caption: "This is Image 1"
  },
  {
    src: "img/img2.jpg",
    altText: "Image 2",
    caption: "This is Image 2"
  },
  {
    src: "img/img3.jpg",
    altText: "Image 3",
    caption: "This is Image 3"
  }
];

class Practice5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  onExited() {
    this.animating = false;
  }
  onExiting() {
    this.animating = true;
  }
  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }
    this.setState({ activeIndex: newIndex });
  }
  next() {}
  previous() {}
  render() {
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.alt} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={this.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Practice5;
