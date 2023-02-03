import React from "react";
import RoadTripMapTemplate from "./RoadTripMapTemplate";

function RoadTripMapContribute() {
  return (
    <RoadTripMapTemplate>
      <h4 className="heading4 mt-4">GETTING INVOLVED</h4>
      <p className="mb-1">
        One of the challenges for a decentralized project: "How do I get
        involved?"
      </p>
      <ul class="container2">
        <li>
          I have an idea for the Yerbas Ecosystem, who do I propose it to?
        </li>
        <li>
          Can I get involved as a core developer, app developer or meme artist?
        </li>{" "}
        <li>
          What projects are going on, and can I contribute to any of them?
        </li>
      </ul>

      <h4 className="heading4 mt-4">WORKING ON A PROJECT</h4>
      <p className="mb-1">
        Yerbas is most active in Discord, and the community is always ready
        to engage with you. If you have any cool project ideas, feel free to hit
        us up (on Discord). If you would like to contribute but need some
        inspiration, you may consider one of our ongoing projects (listed in the
        RoadTripMap's content list).
      </p>

     
    </RoadTripMapTemplate>
  );
}

export default RoadTripMapContribute;
