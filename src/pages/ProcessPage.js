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

      <VerticalTimeline
        className="vertical-timeline-custom-line"
        layout="1-column"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3DBCA1", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <Typography>
            <strong>Data collection analysis</strong>
            <br />
            The first step was to analyze how to locate all the data that needs
            to be collected for the project. Starting with the{" "}
            <a href="https://link.springer.com/search/page/1?facet-series=%22558%22&facet-content-type=%22Book%22">
              root page
            </a>{" "}
            for the “Lecture Notes in Computer Science” series, all links to all
            books from the over 600 pages in the listing had to be collected.
            For each book the process was repeated in order to get all links to
            its papers.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#35A9A0", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <Typography>
            <strong>Scraping the data</strong>
            <br />
            The Springer-Verlag does not offer a structured data set for the
            target books and papers so the information had to be scraped from
            each web page. The scraping was done using the python framework{" "}
            <a href="https://scrapy.org/">scrapy</a>.
            <br />
            <br />
            To assist further processing steps the data was first trimmed to
            remove all unwanted characters.
            <br />
            <code>” 11 June 1997, ” => 11 June 1997</code>
            <br />
            <br />
            Then the different date and number formats could be parsed.
            <br />
            <code>
              11 June 1997 => 11.06.1997
              <br />
              IV => 4<br />
              1.4k => 1400
            </code>
            <br />
            <br />
            Additionally keywords were scanned for abbreviations.
            <br />
            <code>
              ML (machine learning) => machine learning <br /> Natural language
              processing (NPL) => Natural language processing
            </code>
          </Typography>
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
