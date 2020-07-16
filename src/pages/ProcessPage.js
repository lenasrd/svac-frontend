import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeIcon from "@material-ui/icons/Code";
import "./pages.css";

export default function ProcessPage() {
  return (
    <main>
      <Typography variant="h4">Process</Typography>
      <Typography>intro</Typography>

      <VerticalTimeline
        className="vertical-timeline-custom-line"
        layout="1-column"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2020"
          iconStyle={{ background: "#3DBCA1", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Collection of questions and implementation of the data collection
            algorithm
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2020"
          iconStyle={{ background: "#35A9A0", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Collection of a small test dataset
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April - July 2020"
          iconStyle={{ background: "#288BA2", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Error detection and correction within data and collection algorithm
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2020"
          iconStyle={{ background: "#2171A1", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Final data collection
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#185C9D", color: "#fff" }}
          icon={<CodeIcon />}
          date="July 2020"
        >
          <h3 className="vertical-timeline-element-title">Publication</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </main>
  );
}
