import React from "react";
import { ProgressiveImage } from "../../components/ProgressiveImage";

export class Homepage extends React.Component {
  render() {
    return (
      <section>
        <p>Homepage</p>
        <div className="row">
          <div className="col-sm-4">
            <ProgressiveImage
              alt={"woman"}
              overlaySrc={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
              }
              src={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              height="200px"
              width="150px"
            />
          </div>
          <div className="col-sm-4">
            <ProgressiveImage
              alt={"woman"}
              overlaySrc={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
              }
              src={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              height="200px"
              width="150px"
            />
          </div>
          <div className="col-sm-4">
            <ProgressiveImage
              alt={"woman"}
              overlaySrc={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
              }
              src={
                "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              }
              height="200px"
              width="150px"
            />
          </div>
        </div>
      </section>
    );
  }
}
