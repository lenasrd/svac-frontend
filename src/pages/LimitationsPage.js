import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: "2em",
  },
  section: {
    marginBottom: "2em",
  },
}));

export default function LimitationsPage() {
  const classes = useStyles();
  return (
    <main>
      <Typography variant="h4">Limitations</Typography>
      <Typography className={classes.listItem}>
        This section points out the limitations the visualizations on this
        website are bound to.
        <br />
        <br />
        <strong>Available data</strong>
        <ul>
          <li>
            All visualizations only contain data available until 11.07.2020.
          </li>
          <li>
            Data have been collected from
            https://link.springer.com/bookseries/558 and the subpages of this
            book series. (As of 11.07.2020).
          </li>
        </ul>
        <strong>Absolute statements</strong>
        <ul>
          <li>
            Statements made on this website are never absolute and always refer
            to the captured dataset.
          </li>
          <li>
            On this website, the term “publication” is used to describe the
            papers published within a book.
          </li>
          <li>
            On this website, the term “institution” is used to describe
            universities, companies and in some cases individuals that do not
            have an organization attached to them.
          </li>
        </ul>
        <strong>Political statements</strong>
        <ul>
          <li>
            We explicitly do not represent any political opinion with the names
            or allocation of countries used in the visualizations, but rather
            follow the designations given by the authors and the results
            returned by the geolocation services.
          </li>
        </ul>
        <strong>Author names</strong>
        <ul>
          <li>
            Authors with the same name can not be differentiated with the given
            data structure. Therefore authors are only considered the same if
            their linked institution is the same.
            <br />
            <strong>Effect:</strong> Authors that publish from more that one
            institution will be interpreted as multiple persons. Some
            visualisations could be distorted by that.
          </li>
        </ul>
        <strong>University names</strong>
        <ul>
          <li>
            Springer does not suggest fixed spellings for universities.
            Therefore two different unifying algorithms has been implemented,
            fuzzy name matching and strict name matching.
            <ul>
              <li>
                <i>Strict name matching</i> <br />
                Here the names of two universities need to be identical to be
                merged. <br />
                <strong>Effect:</strong> There may be still two entries for the
                same university that have different description. For example “TU
                Berlin” and “Technical University of Berlin” would not be merged
                together with strict name matching even though they represent
                the same university.
              </li>
              <li>
                <i>Fuzzy name matching</i>
                <br />
                Fuzzy name matching merges two universities when their names are
                partially the same. They don’t need to be identical. <br />
                <strong>Effect:</strong> Universities that are not the same,
                like “TU Berlin” and “HTW Berlin” would be merged with a
                university called “Berlin”, because both names overlap with it.
                The “Berlin” university is one of many examples where fields
                were misused or filled with the wrong data. Especially city and
                country names often appear in a university names.
              </li>
            </ul>
          </li>
          <li>
            Both unifying algorithms were used in this project depending on the
            visualization.
          </li>
          <li>
            Despite those two algorithms to unify university names, different
            spellings may have remained in both approaches.
            <br />
            <strong>Effect:</strong> Different spellings of one university will
            be interpreted as several universities.
            <br />
            <strong>Potential solution:</strong> Having a project budget (of at
            least 3000€ for the current amount of data) would have enabled a
            more in depth use of the Google Maps API to resolve a lot more
            conflicts.
          </li>
        </ul>
        <strong>Geo locations</strong>
        <ul>
          <li>
            We can not ensure, that all geo locations that have been found are
            correct. Either because no location could be found at all or the
            query would match multiple places. Some institutions only provided a
            city name which is sometimes not unique. For example “Boston” can be
            found both in the UK and in the USA. Which one is returned as
            primary result depends on the bias of the geolocation data from
            Nominatim.
            <br />
            <strong>Effect:</strong> Map visualizations might contain false data
            points.
          </li>
        </ul>
        <strong>Keywords</strong>
        <ul>
          <li>
            There are two types of keywords, those that have been generated
            automatically and those that have been added by the authors.
            <br />
            <strong>Effect:</strong> Some keywords might not be meaningful.
          </li>
          <li>
            Springer does not suggest fixed spellings for keywords. A unifying
            algorithm has been implemented, but some differences in spelling may
            have remained.
            <br />
            <strong>Effect:</strong> Ununified spellings of one keyword will be
            interpreted as multiple keywords.
          </li>
        </ul>
        <strong>Null values</strong>
        <ul>
          <li>
            12095 Books total
            <br />
            Books with any number of NULL fields: 2513 (20,78%)
            <br />
            introduction is NULL: 1988 (16,44%)
            <br />
            subtitle is NULL: 477 (3,94%)
            <br />
            citations is NULL: 200 (1,65%)
          </li>
          <li>
            365799 Papers total
            <br />
            Papers with any number of NULL fields: 117446 (32,11%)
            <br />
            abstract is NULL: 7108 (1,94%)
            <br />
            citations is NULL: 114442 (31,29%)
          </li>
          <li>
            If values were not displayed on the web page of a book or paper even
            after repeated attempts the data remained null in the database.
            <br />
            <strong>Effect:</strong> Papers and books that have null values had
            to be excluded from result calculations as a default value could not
            be assumed. Some visualisations could be distorted by that.
          </li>
          <li>
            192517 Institutions total
            <br />
            Institutions with any number of NULL fields: 144767 (75,20%)
            <br />
            city is NULL: 144767 (75,20%)
            <br />
            country is NULL: 2436 (1,27%)
          </li>
          <li>
            For the majority of data there is no information available on the
            city.
            <br />
            <strong>Effect:</strong> Visualizations that display map data on a
            city level detail only take a quarter of the total data into
            account.
          </li>
          <li>
            A few Institutions do not list any information about their country
            and there was no search result available for them from any of the
            used geolocation services.
            <br />
            <strong>Effect:</strong> Results that rely on the country
            information in any step of the processing are at least slightly
            incorrect/incomplete.
          </li>
        </ul>
      </Typography>
    </main>
  );
}
