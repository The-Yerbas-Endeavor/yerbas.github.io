import React from "react";
import { Container } from "react-bootstrap";
import CustomDivider from "./CustomDivider.jsx";
import { useLocation } from "react-router-dom";

const ENTRIES = [
  ["/roadtripmap", "Prologue"],
  ["/roadtripmap/manifesto", "Our manifesto"],
  ["/roadtripmap/contribute", "How to get involved?"],
  ["/roadtripmap/nftplatform", "Project: Yerbas NFT platform"],
];

function RoadTripMapTemplate(props) {
  const location = useLocation();
  const entry = ENTRIES.find((x) => x[0] === location.pathname);

  return (
    <section className="section-a min-height-fill">
      <h1 className="text-primary mt-5 text-center">YERBAS ROADTRIP MAP</h1>
      <CustomDivider />
      <Container>
        <div className="roadtripmap-content">
          <h4>{entry[1].toUpperCase()}</h4>
          <ul>
            {ENTRIES.map((x) => (
              <li key={x[0]}>
                <a href={x[0]} className="simple-link">
                  {entry[0] !== x[0] && <span>{x[1]}</span>}
                  {entry[0] === x[0] && (
                    <span>
                      <u>
                        <b>{x[1]}</b>
                      </u>
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          {props.children}
        </div>
      </Container>
    </section>
  );
}

export default RoadTripMapTemplate;
