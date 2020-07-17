import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./pages.css";

import CodeIcon from "@material-ui/icons/Code";
import InsertChartOutlinedIcon from "@material-ui/icons/InsertChartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import FilterNoneOutlinedIcon from "@material-ui/icons/FilterNoneOutlined";
import ScatterPlotOutlinedIcon from "@material-ui/icons/ScatterPlotOutlined";
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import FindInPageIcon from "@material-ui/icons/FindInPage";

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
          icon={<SearchOutlinedIcon />}
        >
          <Typography>
            <strong>Data collection analysis</strong>
            <br />
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
          iconStyle={{ background: "#3DBCA1", color: "#fff" }}
          icon={<FindInPageIcon />}
        >
          <Typography>
            <strong>Scraping the data</strong>
            <br />
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
          iconStyle={{ background: "#35A9A0", color: "#fff" }}
          icon={<FilterNoneOutlinedIcon />}
        >
          <Typography>
            <strong>Duplicates</strong>
            <br />
            <br />
            Detecting duplicates was one of the major issue when trying to work
            with the scraped data. Not only does more data increase processing
            times but it also separates the data relations that are necessary
            for omnidirectional data queries. If the keyword “artificial
            intelligence” appears in many different spellings, each of it is
            linked to a distinct list of books and papers. A query to find all
            papers that use the keyword “artificial intelligence” becomes
            difficult and imprecise when all other variations of the keyword are
            unknown. In order to avoid this situation all keywords were compared
            against the keyword database during scraping and only genuinely new
            keywords were added. The similarity check with the keywords in the
            database was performed using the{" "}
            <a href="https://github.com/seatgeek/fuzzywuzzy">fuzzywuzzy</a>{" "}
            python package. It parses the texts into tokes and compares them
            using the{" "}
            <a href="https://en.wikipedia.org/wiki/Levenshtein_distance">
              Levenshtein distance
            </a>
            .
            <br />
            <br />
            <code>
              Artificial Intelligence <br />
              Artificial intelligence
              <br />
              Artificial inteligence
              <br />
              artificial intelligence - AI
              <br />
              <br />
              All matched with <i>artificial intelligence</i>
              <br />
            </code>
            <br />
            Using identical and fuzzy matches the over 1.600.000 keywords could
            be reduced by 80% to around 320.000.
            <br />
            <br />
            Duplicates are not only an issue for keywords, but for locations as
            well. Universities, Companies and individuals publish with a lot of
            variations in spelling and especially language. To try and eliminate
            some of the duplicates the Google Maps Places API was used.
            <br />
            <br />
            <code>
              HTW Berlin, Berlin, Germany <br />
              HTW Berlin - Hochschule für Technik und Wirtschaft Berlin Germany
              <br />
              HTW Berlin - University of Applied Sciences, 10318 Berlin
              <br />
              <br />
              All matched with{" "}
              <i>HTW Berlin University of Applied Sciences, Germany, DEU</i>
            </code>
            <br />
            <br />
            The search results were be compared against previous results and
            allowed for reliable duplication checks - if there was a search
            result. You can find more details on issues regarding this in our
            limitations section. Using identical and Places API based matches,
            the initial 640000 locations could be reduced by 70% to around
            190000.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#35A9A0", color: "#fff" }}
          icon={<StorageOutlinedIcon />}
        >
          <Typography>
            <strong>Storage</strong>
            <br />
            <br />
            The intermediate data was stored in a read optimized MySQL database.
            The total size of this data set is only 1 GB.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#288BA2", color: "#fff" }}
          icon={<ChatBubbleOutlineOutlinedIcon />}
        >
          <Typography>
            <strong>Translations</strong>
            <br />
            <br />
            Authors often used native language variants of city and country
            names. For the data analysis it was however required to be able to
            group data based on geographical locations. To allow for easier
            processing and increasing the chance of successful search results
            during geocoding, all city and country names were translated to
            english using the python libraries{" "}
            <a href="https://pypi.org/project/pycountry/">pycountry</a>,{" "}
            <a href="https://pypi.org/project/countryinfo/">countryinfo</a> as
            well as the{" "}
            <a href="https://nominatim.openstreetmap.org/">Nominatim</a> and
            Google Maps API.
            <br />
            <br />
            <code>
              Deutschland
              <br />
              Germany
              <br />
              Federal Republic of Germany
              <br />
              F.R. of Germany
              <br />
              <br />
              All became <i>Germany, DEU</i>
              <br />
            </code>
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#288BA2", color: "#fff" }}
          icon={<LanguageOutlinedIcon />}
        >
          <Typography>
            <strong>Geocoding</strong>
            <br />
            <br />
            Some of our visualizations distinguish data within a country or even
            within a single city. To find the necessary geo coordinates for the
            locations again the{" "}
            <a href="https://nominatim.openstreetmap.org/">Nominatim</a> API was
            used.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#2171A1", color: "#fff" }}
          icon={<ScatterPlotOutlinedIcon />}
        >
          <Typography>
            <strong>Grouping</strong>
            <br />
            <br />
            To increase the significance of top rankings both universities and
            companies had to be grouped by their name to account for multiple
            locations they are active from. The grouping is only partially based
            on fuzzy matches. If names were too short or otherwise likely to
            cause false positive matches only perfect matches were allowed.
            <code>
              <br />
              <br />
              Microsoft Research, United States
              <br />
              Microsoft Research, Australia
              <br />
              Microsoft Research, Canada
              <br />
              Microsoft Research, Israel
              <br />
              Microsoft Research, Japan
              <br />
              Microsoft Research, Germany
              <br />
              … and many more
              <br />
              <br />
              All count towards one single <i>Microsoft Research</i>
            </code>
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#2171A1", color: "#fff" }}
          icon={<PanToolOutlinedIcon />}
        >
          <Typography>
            <strong>Manual refinements</strong>
            <br />
            <br />
            Changes in the data were evaluated after each processing step. Edge
            cases that caused false detections were manually corrected and
            important missing data was updated manually in several iterations.
            Due to caching on the Springer-Verlag servers it was necessary to
            write specialized crawlers that repeatedly tried to fill gaps in the
            data.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#185C9D", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <Typography>
            <strong>Result calculations</strong>
            <br />
            <br />
            For the refined data set over 50 different python scripts were
            written to calculate intermediate data and results to be used within
            the visualizations.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#185C9D", color: "#fff" }}
          icon={<InsertChartOutlinedIcon />}
        >
          <Typography>
            <strong>Visualizations</strong>
            <br />
            <br />
            Finally all the results could be visualized.{" "}
            <a href="https://gephi.org/">Gephi</a> was used for graphs networks.
            The web based tool <a href="https://flourish.studio/">Flourish</a>{" "}
            allowed for a variety of interactive and animated charts. To quickly
            run complex queries on the dataset{" "}
            <a href="https://www.tableau.com/">Tableau</a> was used as it did
            not need any intermediate data transport formats and could operate
            directly on top of the database.
          </Typography>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#185C9D", color: "#fff" }}
          icon={<SearchOutlinedIcon />}
        >
          <Typography>
            <strong>Analysis</strong>
            <br />
            <br />
            As the last step all visualizations were evaluated and checked for
            plausibility. Results that showed interesting or significant data
            were selected for the publication on this website.
          </Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </main>
  );
}
