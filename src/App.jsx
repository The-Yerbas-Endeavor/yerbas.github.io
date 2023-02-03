import "./App.scss";
import React from "react";
import { Button } from "react-bootstrap";
import Main from "./Main";
import Privacy from "./Privacy";
import SmartnodeSetup from "./SmartnodeSetup";
import MiningVids from "./MiningVids";
import Wallets from "./Wallets";
import Donate from "./Donate";
import Community from "./Community";
import RoadTripMapContribute from "./RoadTripMapContribute";
import RoadTripMapManifesto from "./RoadTripMapManifesto";
import RoadTripMapNFTPlatform from "./RoadTripMapNFTPlatform";
import RoadTripMapPrologue from "./RoadTripMapPrologue";

import ReactGA from "react-ga";

// Controls.
import {
  Modal,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Image
} from "react-bootstrap";

// Assets.
import LivecoinwatchLogo from "./assets/img/LivecoinwatchLogo.png";
import NomicsLogo from "./assets/img/NomicsLogo.png";
import BitoreumLogo from "./assets/img/BitoreumLogo.png";
import AltbustersLogo from "./assets/img/AltbustersLogo.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import YerbasLogo from "./assets/img/yerbas.png";
import ExbitronLogo from "./assets/img/exbitron.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faMicroscope,
  faUserSecret,
  faWallet,
  faUsers,
  faShapes,
  faPaintBrush,
  faCoins,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WechatInvite from "./assets/img/wechatinvite.png";
import Projects from "./Projects";
import Maintenance from "./Maintenance";
import { faDiscord, faGithubAlt, faRedditAlien, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  ReactGA.initialize("UA-210617812-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [location, setLocation] = React.useState(null);
  React.useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  React.useEffect(() => {}, [location]);

  const [wechatModalShow, setWechatModalShow] = React.useState(false);

  //* Maint Mode Toggle -- true = on  | false = off *//
  const maintenance = false;
  return (
    <Router>
      {maintenance ? (
        <Maintenance />
      ) : (
              <div className="App">
        <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/" className="navbar-brand align-items-center">
              <img alt="" src={YerbasLogo} />
              <span>YERBAS</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav
                className="ms-auto"
                navbarScroll
                style={{ maxHeight: "300px" }}
              >
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown className="navbar-important" title="$YERB">
                  <NavDropdown.Header>Wallets</NavDropdown.Header>
                  <NavDropdown.Item href="/wallets">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faWallet}
                      />
                    </div>
                    Get Wallet
                  </NavDropdown.Item>
                  <NavDropdown.Header>Live Charts</NavDropdown.Header>
                  <div className="d-flex flex-wrap navbar-panel justify-content-center">
                    <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://poocoin.app/tokens/0x2100591c0b692c53a0E11cc328646309e6ea12eF"
                    >
                      <img alt="" src={PooCoinLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://coinpaprika.com/coin/yerb-yerbas/"
                    >  
                      <img alt="" src={CoinPaprikaLogo} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://www.livecoinwatch.com/price/Yerbas-YERB"
                    >
                      <img alt="" src={LivecoinwatchLogo} />
                  </NavDropdown.Item>  
                  <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://nomics.com/assets/YERB-YERBAS?d=1669131794"
                    >
                      <img alt="" src={NomicsLogo} />
                  </NavDropdown.Item> 
                  <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://altbuster.com/"
                    >
                      <img alt="" src={AltbustersLogo} />
                  </NavDropdown.Item>
                   </div>
                 <NavDropdown.Header>Exchanges</NavDropdown.Header>
                  
                  <div className="d-flex flex-wrap navbar-panel justify-content-center">
                    <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://pancakeswap.finance/swap?outputCurrency=0x2100591c0b692c53a0E11cc328646309e6ea12eF&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                    >
                      <img alt="" src={PancakeSwap} />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://www.bitoreum.exchange/market/yerbusdt"
                    >
                      <img alt="" src={BitoreumLogo} />
                </NavDropdown.Item>  
                    <NavDropdown.Item
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://www.exbitron.com/trading/yerbusdt"
                    >
                      <img alt="" src={ExbitronLogo} />
                    </NavDropdown.Item> 
                  </div>
                </NavDropdown>
                <NavDropdown className="navbar-important" title="Community">
                  <NavDropdown.Header>
                    Utilities, Activities, and Fun
                  </NavDropdown.Header>
                  <NavDropdown.Item href="/projects">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faShapes}
                        className="text-primary"
                      />
                    </div>{" "}
                    Community Projects
                  </NavDropdown.Item>
{/*                  <NavDropdown.Item
                    href="https://nft.yerbas.org"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faPaintBrush}
                        className="text-primary"
                      />
                    </div>{" "}
                    NFT Platform
                  </NavDropdown.Item> **/}
                  <NavDropdown.Item
                    href="https://wrap.yerbas.org"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faCoins}
                        className="text-primary"
                      />
                    </div>{" "}
                    Wrapped Yerbas
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://wiki.yerbas.org"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faCoins}
                        className="text-primary"
                      />
                    </div>{" "}
                    Yerbas Wiki
                  </NavDropdown.Item>
                  <NavDropdown.Header>Chats and Socials</NavDropdown.Header>
                  <NavDropdown.Item href="/community">
                    <div className="inline-logo-holder">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="text-primary"
                      />
                    </div>{" "}
                    Discover the Community
                  </NavDropdown.Item>
                </NavDropdown>                         
                <NavDropdown className="navbar-important" title="Resources">
                  <NavDropdown.Item
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://miningpoolstats.stream/yerbas"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faHammer} />
                    </div>{" "}
                    Mining Info
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/miningvids"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faHammer} />
                    </div>{" "}
                    Mining Videos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/smartnodesetup">
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faCoins} />
                    </div>{" "}
                    Smartnode Setup
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://explorer.yerbas.org/"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Official; API)
                  </NavDropdown.Item>
    {/**               <NavDropdown.Item
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://openchains.info/coin/yerbas/blocks"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (Open Chains)
                  </NavDropdown.Item>  */}
                  <NavDropdown.Item
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://explorer2.yerbas.org/"
                  >
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faMicroscope} />
                    </div>{" "}
                    Explorer (RPC Explorer)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://yerbas.org/YerbasWhitePaper.pdf">
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faFile} />
                    </div>{" "}
                    Yerbas White Paper
                  </NavDropdown.Item>
                <NavDropdown.Item href="/privacy">
                    <div className="inline-logo-holder text-primary">
                      <FontAwesomeIcon icon={faUserSecret} />
                    </div>{" "}
                    Privacy Policy
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/roadtripmap">RoadTripMap</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/community" element={<Community />} />
          <Route path="/miningvids" element={<MiningVids />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/smartnodesetup" element={<SmartnodeSetup />} />          
          <Route path="/roadtripmap">
            <Route path="manifesto" element={<RoadTripMapManifesto />} />
            <Route path="contribute" element={<RoadTripMapContribute />} />
            <Route path="nftplatform" element={<RoadTripMapNFTPlatform />} />
            <Route path="" element={<RoadTripMapPrologue />} />
          </Route>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>
        <section className="section-footer text-center">
          <Container>               
            <Row>
      <div>
            <a
            href="https://discord.gg/XGEp2cKSKF"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-outline-dark">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faDiscord} />                
              </div>
            </Button>
          </a>
          <a
            href="https://t.me/Yerbas420"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-outline-dark">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTelegram} />                
              </div>
            </Button>
          </a>
          <a
            href="https://twitter.com/Yerbas_Endeavor"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-outline-dark">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faTwitter} />                
              </div>
            </Button>
          </a>
          <a
            href="https://www.reddit.com/r/Yerbas/"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn-outline-dark">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faRedditAlien} />                
              </div>
            </Button>
          </a>
          <a
            href="https://github.com/The-Yerbas-Endeavor"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="btn btn-primary btn-outline-dark">
              <div className="d-flex flex-column">
                <FontAwesomeIcon className="icon" icon={faGithubAlt} />                
              </div>
            </Button>
          </a>
      </div>

              <span>
                <b>© The Yerbas Endeavor 2022<br /></b><b>
                  <a
                    rel="nofollow noopener noreferrer"
                    href="https://yerbas.org"
                    target="_blank"
                    className="simple-link"
                  >
                    Maintained By Yerbman
                  </a>
                </b>
              </span>
            </Row>
          </Container>
        </section>
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={wechatModalShow}
          onHide={() => {
            setWechatModalShow(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Yerbas WeChat Invite
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={WechatInvite}
            />
          </Modal.Body>
        </Modal>
      </div>
      )}
    </Router>
  );
}
