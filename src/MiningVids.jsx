import React from "react";
import { Container } from "react-bootstrap";



function MiningVids() {
  return (
    <section className="community min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column">
        <h1 className="mt-4">Mining Videos</h1>

        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a
            href="https://youtu.be/qVqGfhezRzQ"
            rel="noreferrer"
            target="_blank"
          >
            
              <div align="center" className="divvid d-flex flex-column">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qVqGfhezRzQ" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <span>Crypto_MKD</span>
              </div>
            
          </a>
          <a href="https://www.youtube.com/watch?v=9ggB5VjveYQ" rel="noreferrer" target="_blank">
            
              <div align="center" className="divvid d-flex flex-column">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9ggB5VjveYQ" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <span class="divvid">TheFarrington<br/>Channel</span>
              </div>
            
          </a>

        </div>

        <h2>International</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a href="https://www.youtube.com/watch?v=AQ0l6P7PfJ8" rel="noreferrer" target="_blank">          
              <div align="center" className="divvid d-flex flex-column">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AQ0l6P7PfJ8" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <span>Makertronic (French)</span>
              </div>            
          </a>
        </div>
      </Container>
    </section>
  );
}

export default MiningVids;
