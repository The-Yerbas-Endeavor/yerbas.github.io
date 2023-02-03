import React from "react";
import { Modal, Row, Col, Button, Image, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faShoppingCart,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import SocialFaucetLogo from "./assets/img/socialfaucet.png";
import CustomDivider from "./CustomDivider";
import YerbasCollection1Logo from "./assets/img/yerbascollection1.png";
import MerchCryptoYerbasLogo from "./assets/img/merch_cryptoyerbas.png";
import MerchYerbasArtLogo from "./assets/img/merch_yerbasart.png";
import NFTLogo from "./assets/img/yerbasnftplatform.png";
import BSCLogo from "./assets/img/bsc.png";
import SmartnodeLogo from "./assets/img/smartnode.png";

function Projects() {
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);

  return (
    <section className="projects min-height-fill">
      <Container className="py-3 py-lg-5 d-flex flex-column mt-4">
        <h1 className="mt-4">Projects</h1>
        <span className="divvid subtitle">
          Project ideas we are working on.
        </span>

        <div id="activities">
          <h2>Activities</h2>
          <div className="cards-container">
            <a
              href="https://nft.yerbas.org"
              target="_blank"
              rel="noreferrer"
              className="project-card d-flex flex-row"
            >
              <div className="mb-auto mx-auto">
                <div className="logo-holder">
                  <Image src={NFTLogo} />
                </div>
                <h5 className="text-primary">NFT Platform</h5>
                <p className="text-muted">
                  Trade NFTs on the Yerbas mainnet.
                </p>
              </div>
            </a>
            <a
              href="https://discord.gg/XGEp2cKSKF"
              target="_blank"
              rel="noreferrer"
              className="project-card d-flex"
            >
              <div className="mb-auto mx-auto">
              <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faDice} />
                </div>
                <h5 className="text-primary">Yerbasino</h5>
                <p className="text-muted">
                  Play games using Yerbas on Discord.
                </p>
              </div>
            </a> 
            <a
              href="https://discord.gg/XGEp2cKSKF"
              className="project-card d-flex"
            >
              <div className="mb-auto mx-auto">
                <div className="logo-holder">
                  <Image src={SocialFaucetLogo} />
                </div>
                <h5 className="text-primary">Weekly Airdrop</h5>
                <p className="text-muted">
                  Earn Yerbas in our frequent Discord airdrops.
                </p>
              </div>
            </a>  
            <div
              className="project-card d-flex"
              onClick={() => setMarketplaceModalShow(true)}
            >
              <div className="mb-auto mx-auto">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faShoppingCart} />
                </div>
                <h5 className="text-primary">Marketplace</h5>
                <p className="text-muted">
                  Purchase merchandise/NFTs created by our community members.
                </p>
              </div>
            </div> 
          </div>
        </div>
        <div id="infrastructure">
          <h2>Infrastructure</h2>
          <div className="cards-container">
            <a
              href="https://yerbas.org/wallets"
              className="project-card d-flex"
            >
              <div className="mb-auto mx-auto">
                <div className="logo-holder">
                  <FontAwesomeIcon className="faicon" icon={faWindowRestore} />
                </div>
                <h5 className="text-primary">Core Wallets</h5>
                <p className="text-muted">
                  Hold and send Yerbas.
                </p>
              </div>
            </a>
            <a
              href="/smartnodesetup"
              className="project-card d-flex"
            >
              <div className="mb-auto mx-auto">
              <div className="logo-holder">
                  <Image src={SmartnodeLogo} />
                </div>
                <h5 className="text-primary">Smartnode Setup</h5>
                <p className="text-muted">
                  Smartnode setup instructions for Ubuntu.
                </p>
              </div>
            </a>
            <a
              rel="noreferrer"
              href="https://wrap.yerbas.org"
              target="_blank"
              className="project-card d-flex"
            >
              <div className="mb-auto mx-auto">
                <div className="logo-holder">
                  <Image src={BSCLogo} />
                </div>
                <h5 className="text-primary">BSC Wrap</h5>
                <p className="text-muted">
                  Wrapped Yerbas on the BSC chain.
                </p>
              </div>
            </a>
          </div>
        </div>
      </Container>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={marketplaceModalShow}
        onHide={() => {
          setMarketplaceModalShow(false);
        }}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Yerbas Marketplace
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="marketplace-container">
            <Row>
              <Col>
                <h5>Merchandise</h5>
              </Col>
            </Row>
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={MerchYerbasArtLogo} />
                </div>
                <a
                  target="_blank"
                  href="/"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    ! Store
                  </Button>
                </a>
              </div>
            </div>
            <CustomDivider />
            <Row>
              <Col>
                <h5>NFTs (OpenSea)</h5>
              </Col>
            </Row>
            <div className="d-flex flex-row justify-content-center flex-wrap">
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={YerbasCollection1Logo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Yerbas Collection #1
                  </Button>
                </a>
              </div>
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={MerchCryptoYerbasLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io"
                  rel="noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    CryptoYerbas
                  </Button>
                </a>
              </div>
            </div>
            <CustomDivider />
            <Row>
              <p>
                To list your own Yerbas merchandise/NFT collection, hit us up
                on our Discord channel.
              </p>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setMarketplaceModalShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Projects;
