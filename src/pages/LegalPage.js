import Typography from "@material-ui/core/Typography";
import React from "react";

export default function LegalPage() {
  return (
    <main>
      <Typography variant="h4">Legal</Typography>
      <Typography>
        <br />
        <strong>Privacy</strong>
        <br />
        <br />
        The website itself does not store any user data and does not use
        cookies.
        <br />
        However it uses embedded graphics hosted by{" "}
        <a href="https://flourish.studio/">Flourish</a>. Please see their{" "}
        <a href="https://flourish.studio/privacy/">
          privacy page for more details on that.
        </a>
        <br />
        <br />
        <strong>Imprint</strong>
        <br />
        <br />
        Responsible for editorial content: Paul-Eric Lange
        <br />
        <br />
        <strong>Operated by</strong>
        <br />
        <br />
        Bytex Digital UG (haftungsbeschränkt)
        <br />
        <br />
        Schönhauser Straße 59D
        <br />
        13158 Berlin
        <br />
        Germany
        <br />
        <br />
        Managing director: Paul-Eric Lange
        <br />
        Telephone: +49 (0)176 36327203
        <br />
        E-Mail: contact@bytex.digital
        <br />
        <br />
        Registrating court: Amtsgericht Pinneberg
        <br />
        Registration number: HRB 13731 PI
        <br />
        VAT No.: DE318222054
      </Typography>
    </main>
  );
}
