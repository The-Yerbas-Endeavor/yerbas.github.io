import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faApple,
  faUbuntu,
  faAndroid,
  faGithub,

} from "@fortawesome/free-brands-svg-icons";

import {faDumpsterFire, faWallet } from "@fortawesome/free-solid-svg-icons";

function Wallets() {
  return (
    <section className="wallets min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column">
        <h1 className="mt-4">Wallets</h1>

        <h2>Desktop (Full-node)</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
        <a
            href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/latest"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faGithub} />
                <span>Latest</span>
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/yerbas-win-2.1.1.4.zip"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faWindows} />
                <span>Windows</span>
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/Yerbas-Qt.dmg"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faApple} />
                <span>macOS</span>
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/yerbas-ubuntu20-2.1.1.4.tar.gz"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faUbuntu} />
                <span>Ubuntu20</span>
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/yerbas-ubuntu18-2.1.1.4.tar.gz"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faUbuntu} />
                <span>Ubuntu18</span>
              </div>
            </Button>
          </a>
        </div>
        <h2>Paper</h2>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <a
            href="\papetwallet.html"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faWallet} />
                <span>Simple Paper</span>
              </div>
            </Button>
          </a>
          <a
            href="https://yerbas.org/vanity-yerb/index.html"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-thirdary btn-outline-light">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faDumpsterFire} />
                <span>Vanity</span>
              </div>
            </Button>
          </a>
        </div>

        <h2>Mobile</h2>
        <span className="subtitle">(Coming soon...)</span>
        <div className="d-flex flex-row flex-wrap justify-content-lg-start justify-content-center">
          <Button className="btn btn-thirdary btn-outline-light" disabled>
            <div className="d-flex flex-column">
              <FontAwesomeIcon className="icon" icon={faAndroid} />
              <span>Android</span>
            </div>
          </Button>
          <Button className="btn btn-thirdary btn-outline-light disabled">
            <div className="d-flex flex-column">
              <FontAwesomeIcon className="icon" icon={faApple} />
              <span>iOS</span>
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
}
  
export default Wallets;
