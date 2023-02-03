import React from "react";

// Controls.
import { Button, Container, Row, Col, Modal, Image } from "react-bootstrap";
import CustomDivider from "./CustomDivider";
import FadeInSection from "./FadeInSection";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Assets.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import LivecoinwatchLogo from "./assets/img/LivecoinwatchLogo.png";
import NomicsLogo from "./assets/img/NomicsLogo.png";
import AltbustersLogo from "./assets/img/AltbustersLogo.png";
import CoinPaprikaLogo from "./assets/img/coinpaprika.png";
import BitoreumLogo from "./assets/img/BitoreumLogo.png";
import PancakeSwap from "./assets/img/pancakeswap.png";
import PooCoinLogo from "./assets/img/poocoin.png";
import YerbasAnimatedLogo from "./assets/img/yerbas-rotate.gif";
import YerbasCollection1Logo from "./assets/img/yerbascollection1.png";
import DYerbasLogo from "./assets/img/dyerbas.gif";
import ExbitronLogo from "./assets/img/exbitron.png";
import MerchCryptoYerbasLogo from "./assets/img/merch_cryptoyerbas.png";
import MerchYerbasArtLogo from "./assets/img/merch_yerbasart.png";
import HighlightNft from "./assets/img/highlight-nft.png";
import HighlightActivities from "./assets/img/highlight-activities.png";
import HighlightGames from "./assets/img/highlight-games.gif";
import HighlightWrap from "./assets/img/wyerbas.png";
import Lock from "./assets/img/lock.png"
import AutoF from "./assets/img/autof.png"
import Trichomes from "./assets/img/trichomes.png";
import Resistant from "./assets/img/resistant.png";
import Stats from "./assets/img/stats.png";

function Main() {
  const [exchangesModalShow, setExchangesModalShow] = React.useState(false);
  const [marketplaceModalShow, setMarketplaceModalShow] = React.useState(false);
  
  return (
    
    <div className="container1">
      <header id="home">
        <Container>
          {/* Desktop view */}
        
          <div className="d-none d-lg-block">
            <div className="d-flex flex-row py-5">
              <div className="FrontTitle d-flex flex-column me-auto my-5">
                <h1 className="title text-start">
                  <br/><br/>The 'Good Shit' Coin.
                </h1>
                <p className="lead mt-4 mb-4 text-start ms-0 me-auto">
                A cannabis inspired CPU mineable, ASIC and FPGA resistant <br/>
                (currently meme status) cryptocurrency organically grown on the interweb
                <br/><br/></p>
                <div className="mb-5 d-flex flex-row me-auto">
                  <a href="/wallets">
                    <Button className="btn-light me-3 px-4 py-2 rounded-pill">
                      Get wallet
                    </Button>
                  </a>
                  <Button
                    className="btn-light ms-3 px-4 py-2 rounded-pill"
                    onClick={() => setExchangesModalShow(true)}
                  >
                    Trade Yerbas
                  </Button>
                </div>
              </div>
              <Image className="logo my-auto" src={YerbasAnimatedLogo} />
            </div>
          </div>
        
          {/* Mobile */}
          <div className="container2 d-lg-none">
            <div className="d-flex flex-column py-5">
              <Image
                className="logo-mobile my-auto mx-auto"
                src={YerbasAnimatedLogo}
              />
              <div className="d-flex flex-column me-auto mt-4 mb-auto">
                <h2 className="title text-center">
                The 'Good Shit' Coin.
                </h2>
                <p className="lead mt-2 text-start mx-auto text-center">
                A cannabis inspired CPU mineable, ASIC and FPGA resistant (currently meme status) 
                cryptocurrency organically grown on the interweb
                </p>
                <div className="d-flex flex-row mx-auto mt-2">
                  <a href="/wallets">
                    <Button className="btn-light me-3 px-4 py-2 rounded-pill">
                      Get Wallet
                    </Button>
                  </a>
                  <Button
                    className="btn-light ms-3 px-4 py-2 rounded-pill"
                    onClick={() => setExchangesModalShow(true)}
                  >
                    Trade Yerbas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="features">
        <Container className="py-5 mt-5">
          <FadeInSection>
            <h2 className="mb-3 text-center">YERB Features</h2>
            <span className="subtitle mx-auto text-start text-lg-center">
            Currently active features
          </span>
            <Container className="mt-4 mb-4">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={10000}
                autoplayHoverPause
                nav
                navText={["", ""]}
                dots
                margin={10}
                responsive={{
                  0: { items: 1 },
                  992: { items: 2 },
                  1400: { items: 3 },
                }}
              >
                <div className="post-slide">
                 <div className="post-img">
                     <Image src={Stats} alt="" />
                  </div> 
                  <div className="post-content">
                    <h3 className="post-title">Coin Stats</h3>
                    <p className="post-description">
                    Fair launch - No premine - No ICO<br/>Total Supply - 420 million<br/>Reward distribution: <br/>75%miner - 20%Smartnode - 5%Development fee
                    </p>
                  </div>
                </div>
                <div className="post-slide">
                  <div className="post-img">
                    <Image src={Trichomes} alt="" />
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Tiered Smartnode Collateral</h3>
                    <p className="post-description">                     
                    Yerbas also uses a tiered smartnode collateral and reward system which should avoid hyperinflation. 
                    A common and potentially devastating problem with many projects that use Masternodes.
                    </p>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={AutoF} alt="" />
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Custom block reduction schedule</h3>
                    <p className="post-description">
                    Yerbas has implemented a custom reward structure that not only makes Yerbas emissions smooth, but also unique.                     
                    </p>
                  </div>
                </div>
                
                <div className="post-slide">
                  <div className="post-img">
                    <Image src={Resistant} alt="" />
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">ASIC/FPGA Resistant</h3>
                    <p className="post-description">
                    GhostRider is an algorithm created to discourage specialty hardware such as ASIC & FPGA 
                    enabling anybody to competitively mine it and increase overall decentralization.
                    </p>
                  </div>
                </div>

                <div className="post-slide">
                 <div className="post-img">
                     <Image src={Lock} alt="" />
                  </div> 
                  <div className="post-content">
                    <h3 className="post-title">51% Douple Spend Protection</h3>
                    <p className="post-description">
                    LLMQ & Chainlocks have been active since July 04 2022 protecting the Yerbas network from 51% double spend attacks. 
                    The activation of Chainlocks makes Yerbas one of the most secure Cryptocurrency and asset platforms available today.
                    </p>
                  </div>
                </div>

              </OwlCarousel>
            </Container>
          </FadeInSection>
        </Container>
      </section> 

      <section className="features">
        <Container className="py-5 mt-5">
          <FadeInSection>
            <h2 className="mb-3 text-center">Building a use</h2>
            <span className="subtitle mx-auto text-start text-lg-center">
              Yerbas believes in utility and fun for all aiming to become
              the digital Cannabis currency that is adopted everywhere.
          </span>

            <Container className="mt-4 mb-4">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={10000}
                autoplayHoverPause
                nav
                navText={["", ""]}
                dots
                margin={10}
                responsive={{
                  0: { items: 1 },
                  992: { items: 2 },
                  1400: { items: 3 },
                }}
              >
                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightWrap} alt="" />
                    <a href="/projects#infrastructure" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Wrapped Yerbas</h3>
                    <p className="post-description">
                      Our community-maintained custodians let you wrap
                      YERB onto BSC and SOL. Do whatever you want,
                      wherever you want.
                    </p>
                    <a href="/projects#infrastructure" className="read-more">
                      View Infrastructure ᐳ
                    </a>
                  </div>
                </div>
                <div className="post-slide">
                 <div className="post-img">
                     <Image src={HighlightNft} alt="" />
                    <a
                      href="https://nft.yerbas.org"
                      target="_blank"
                      rel="noreferrer"
                      className="over-layer"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div> 
                  <div className="post-content">
                    <h3 className="post-title">NFT Platform</h3>
                    <p className="post-description">
                      Create and trade NFTs on-chain, with our very own NFT
                      platform. Spend near-zero gas fees, and receive earnings
                      immediately. Become the top NFT connoisseur!
                    </p>
                    <a
                      href="https://nft.yerbas.org"
                      target="_blank"
                      rel="noreferrer"
                      className="read-more"
                    >
                      Visit NFT Platform ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightGames} alt="" />
                    <a href="/projects#play" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Games and Social</h3>
                    <p className="post-description">
                      Play Yerbas games made by the community. Chat with the
                      homies on Discord. Hang out and have fun.
                    </p>
                    <a href="/community" className="read-more">
                      Social ᐳ
                    </a>
                    <a href="/projects#activities" className="read-more">
                      Games ᐳ
                    </a>
                  </div>
                </div>

                <div className="post-slide">
                  <div className="post-img">
                    <Image src={HighlightActivities} alt="" />
                    <a href="/projects#activities" className="over-layer">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Never-Ending Activities</h3>
                    <p className="post-description">
                      Weekly discord airdrops, smartnodes, and more to come. Earn free Yerbas by participating in our
                      activities!
                    </p>
                    <a href="/projects#activities" className="read-more">
                      Explore Activities ᐳ
                    </a>
                  </div>
                </div>
              </OwlCarousel>
            </Container>

            <div className="d-flex">
              <a href="/projects" className="mx-auto">
                <Button
                  className="rounded-pill px-5 py-2"
                  style={{ fontSize: "1.3rem" }}
                >
                  <span>Tour All Projects</span>
                  <FontAwesomeIcon className="icon ms-2" icon={faArrowRight} />
                </Button>
              </a>
            </div> 
          </FadeInSection>
        </Container>
      </section>

      <section className="highlights"></section>

      <section className="ecosystem">
        <Container className="py-5 mt-3 mb-4">
          <FadeInSection>
            <h2 className="text-center">Join Our Growing Ecosystem</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
              <a href="/community" className="card d-flex flex-column rounded">
                <h3 className="text-start">Community</h3>
                <span>
                  Discover the Yerbas community. Hang out, have fun.
                </span>
                <Button>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </Button>
                <div className="d-flex mt-auto">
                  <FontAwesomeIcon className="logo" icon={faUsers} />
                </div>
              </a>
              <a href="/wallets" className="card d-flex flex-column rounded">
                <h3 className="text-start">Get Wallet</h3>
                <span>Start your journey with Yerbas today.</span>
                <Button>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </Button>
                <div className="d-flex mt-auto">
                  <FontAwesomeIcon className="logo" icon={faWallet} />
                </div>
              </a>
            </div>
          </FadeInSection>
        </Container>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={exchangesModalShow}
        onHide={() => {
          setExchangesModalShow(false);
        }}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Buy Yerbas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Buy Yerbas</h5>
              </Col>
            </Row>
            <Row className="justify-content-center">
            <a
                target="_blank"
                rel="nofollow noopener noreferrer"F
                href="https://pancakeswap.finance/swap?outputCurrency=0x2100591c0b692c53a0E11cc328646309e6ea12eF&inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
              >
                <Button variant="outline">
                  <img alt="" src={PancakeSwap} />
                </Button>
              </a>
            <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.exbitron.com/trading/yerbasusdt"
              >
                <Button variant="outline">
                  <img alt="" src={ExbitronLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.bitoreum.exchange/market/yerbusdt"
              >
                <Button variant="outline">
                  <img alt="" src={BitoreumLogo} />
                </Button>
              </a>
            </Row>
          </Container>
          <Container className="exchangesModalSection">
            <Row>
              <Col>
                <h5>Live Charts</h5>
              </Col>
            </Row>
            <Row>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://coinpaprika.com/coin/yerb-yerbas/"
              >
                <Button variant="outline">
                  <img alt="" src={CoinPaprikaLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.livecoinwatch.com/price/Yerbas-YERB"
              >
                <Button variant="outline">
                  <img alt="" src={LivecoinwatchLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://nomics.com/assets/YERB-YERBAS?d=1669131794"
              >
                <Button variant="outline">
                  <img alt="" src={NomicsLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://altbuster.com/"
              >
                <Button variant="outline">
                  <img alt="" src={AltbustersLogo} />
                </Button>
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://poocoin.app/tokens/0x2100591c0b692c53a0E11cc328646309e6ea12eF"
              >
                <Button variant="outline">
                  <img alt="" src={PooCoinLogo} />
                </Button>
              </a>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setExchangesModalShow(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
                  rel="nofollow noopener noreferrer"
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
                  href="https://opensea.io/collection/yerbas1"
                  rel="nofollow noopener noreferrer"
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
                  href="https://opensea.io/collection/"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    CryptoYerbas
                  </Button>
                </a>
              </div>
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={MerchYerbasArtLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    Yerbas Art
                  </Button>
                </a>
              </div>
              <div className="marketplace-card">
                <div className="logo-holder mb-2">
                  <Image src={DYerbasLogo} />
                </div>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/"
                  rel="nofollow noopener noreferrer"
                >
                  <Button className="px-4 py-2" variant="primary">
                    DYerbas
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
    </div>
  );
}

export default Main;
