/**
 * This is template for progressive image loading, if not required then you can avoid this component
 */

import React, { Component } from "react";
import "./ProgressiveImage.css";

const omit = (obj: any, omitKey: string) =>
  Object.keys(obj).reduce((result: any, key: string) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const overlayStyles = {
  // position: "absolute",
  filter: "blur(1px)",
  transition: "opacity ease-in 1000ms",
  clipPath: "inset(0)",
};

type Props = {
  className?: string;
  alt: string;
  overlaySrc: string;
  src: string;
  width?: string | number;
  height?: string | number;
};

type State = {
  highResImageLoaded: boolean;
};

export class ProgressiveImage extends Component<Props, State> {
  highResImage: HTMLImageElement | null = null;
  constructor(props: Props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }
  render() {
    const { overlaySrc } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");
    console.log({ highResImageLoaded });
    return (
      <span className="image-holder">
        <img
          {...filteredProps}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={(img) => {
            this.highResImage = img;
          }}
          src={this.props.src}
          {...(highResImageLoaded && {
            style: {
              display: "block",
              height: this.props.height,
              width: this.props.width,
            },
          })}
          className="main-image"
        />
        <img
          {...filteredProps}
          className={`${this.props.className}  ${overlayStyles}`}
          {...(highResImageLoaded && { style: { display: "none" } })}
          src={overlaySrc}
        />
      </span>
    );
  }
}
