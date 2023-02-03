import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faReddit,
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";



function Community() {
  return (
    <section className="community min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column">
        <h1 className="mt-4">4:20 with us here</h1>

        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
         
         <a
            href="https://discord.gg/XGEp2cKSKF"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faDiscord} />
                <span>Discord</span>
              </div>
            </Button>
          </a>
          <a href="https://t.me/Yerbas420" rel="noreferrer" target="_blank">
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>Telegram</span>
              </div>
            </Button>
          </a>
          <a
            href="https://twitter.com/Yerbas_Endeavor"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <span>Twitter</span>
              </div>
            </Button>
          </a>
          <a
            href="https://www.reddit.com/r/Yerbas/"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faReddit} />
                <span>Reddit</span>
              </div>
            </Button>
          </a>
           <a
            href="https://github.com/The-Yerbas-Endeavor"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faGithub} />
                <span>Github</span>
              </div>
            </Button>
          </a>
        </div>

        <h2>International (16:20)</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a href="https://t.me/yerbas_ru/4" rel="noreferrer" target="_blank">
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />
                <span>Русский</span>
              </div>
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Community;
