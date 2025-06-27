---
layout: default
title: Home
permalink: /
---

/* modalTitle: "Announcement"
modalContent: 'New Wallet Release: Upgrade to Version 3.1.2.8 <a href="/wallet">Click Here to Upgrade</a>'
modalId: "upgrade-notification"
modalCacheRef: "3.1.4.20" */

<link href="/assets/vendors/mediabox/mediabox.css" rel="stylesheet">
<style>
  .hero-buttons {
    margin: 50px 0;
  }
  .hero-buttons .btn.btn-primary {
    border: 2px solid #4F7942;
  }
  .banner {
  /* background: url("/assets/img/media/YerbasLogo3.png");*/ 
    padding: 12em 0 13em;
    animation: animatedBackground 15s linear infinite;
    -moz-animation: animatedBackground 15s linear infinite;
    -webkit-animation: animatedBackground 15s linear infinite;
    -ms-animation: animatedBackground 15s linear infinite;
    -o-animation: animatedBackground 15s linear infinite;
  }
  .banner h1 {
    max-width: 800px;
  }
  .banner .btn {
    min-width: 150px;
  }
  .video-icon .video-icon-button {
    height: 40px;
  }
  .video-icon svg {
    width: 40px;
    height: 40px;
  }
  .section-intro {
    background-color: #4F7942;
  }
  .section-intro h3 {
    font-family: 'Lato';
  }
  .section-intro hr {
    border-color: #4c60b1;
  }
  .section-cta {
    background: #4F7942;
  }
  .section-cta .btn:hover {
    background: #fff;
    color: #000;
  }
  .section-exchange .wrapper {
    max-width: 800px;
  }
  .enlarge-on-hover {
    transition: transform .2s;
  }
  .enlarge-on-hover:hover {
    transform: scale(1.05);
  }
  .bg-grey-lighter {
  background-color: #111;
}

@keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
@-moz-keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
@-webkit-keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
@-ms-keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
</style>
<div class="banner text-center">
  <div class="wrapper">
    <h1 class="animated fadeInRight mb-3 mb-2 m-auto leading-tight">Yerbas is a peer-to-peer decentralized blockchain, handling the efficient creation and transfer of assets from one party to another.</h1>
    <div class="animated fadeInLeft hero-buttons">
      <a class="btn btn-primary mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/wallet/">Get Your Wallet</a>
      <a class="btn btn-primary mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-black hover:text-white" href="/buy-yerbas/">Buy Yerbas</a>
    </div>
    <div class="video-icon animated fadeInRight flex content-center justify-center font-semibold mt-4" uk-lightbox>
      <a class="video-icon-button mr-4 mediabox" href="https://youtu.be/9ggB5VjveYQ">
      </a>
    <h3><a href="https://youtu.be/9ggB5VjveYQ">How to mine YERB</a></h3>
    </div>
  </div>
  <br>
        <a class="block px-6 py-4" href="https://wrap.yerbas.org" target="_blank"><img style="max-height: 50px;" src="/assets/img/pages/wallet/wyerbas.png" align="middle" alt=" wYerbas"/>wYerbas</a>
    <h3><a href="https://docs.yerbas.org/">Yerbas Docs</a></h3>
    
</div>  
<div class="bg-grey-lighter section-intro text-white py-20">
  <div class="wrapper">
    <div class="text-center m-auto" style="max-width: 900px;">
      <h2 class="text-white">Welcome to Yerbas</h2>
      <p style="max-width: 900px;" class="m-auto">Yerbas is a protocol based on a fork of the Bitcoin/Dash/Raptoreum and a pinch of Raven code which adds features specifically focused on allowing tokens to be issued on the Yerbas blockchain. These tokens can have whatever properties the issue of the token decides - so they can be limited in quantity, named and be issued as securities or as collectibles.</p>
      <p class="mt-8">You can make your own security token within minutes and have it trade worldwide.</p>
      <hr class="border-b pt-6"/>
    </div>
    <hr class="my-8"/>
    <ul class="nav nav-tabs list-reset">
      <li class="active"><a href="#tab-1">Project Shares</a></li>
      <li class="tab-2"><a href="#tab-2">Virtual Goods</a></li>
      <li class="tab-3"><a href="#tab-3">Physical &amp; Digital Assets</a></li>
      <li class="tab-4"><a href="#tab-4">Credit</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-1" class="tab-pane active">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-gold" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/gold.svg"}}" alt="gold"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representing a share of a project</h3>
            <div class="flex flex-wrap">
              <ul class="list-reset w-full sm:w-1/2 md:w-1/3">
                <li>Gold bar</li>
                <li>Silver coins</li>
                <li>Brownies</li>
                <li>Buffalo Nickels</li>
              </ul>
              <ul class="list-reset w-full sm:w-1/2 md:w-1/3">
                <li>Land Deeds</li>
                <li>Cook NFT's</li>
                <li>Farm credits (Soil, Nutrients, Water, Lumens, Wind)</li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
      <div id="tab-2" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-tickets" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/tickets.svg"}}" alt="tickets"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representing virtual goods</h3>
            <ul class="list-reset">
              <li>Tickets to an event such as a Sacramento Kings game with the ability to resell without worry of duplicates being made</li>
              <li>A license to allow an activity ;)</li>
              <li>An access token to use a service</li>
              <li>In-game currency and items, transferable to other gamers outside of the game platform</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tab-3" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-token" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/yerb.svg"}}" alt="yerb"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
           <h3 class="text-white">Representing real world custodied physical or digital asset</h3>
            <ul class="list-reset">
              <li>Securities tokens: stock or shares of a company where the shares are represented by a token rather than a physical stock certificate</li>
              <li>Securities or partnership interests with the built-in ability to pay dividends in YERB</li>
              <li>Tokens which represent a coop, limited partnership, royalty sharing or profit sharing platform</li>
              <li>A token which represents a cflexd-funded item with the ability to transfer or resell the item</li>
            </ul>  
          </div>
        </div>  
      </div>
      <div id="tab-4" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-gift-card" style="max-width: 150px;" src="{{"/assets/img/svg/gift-card.svg"}}" alt="gift-card"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representing a credit</h3>
            <ul class="list-reset">
              <li>Gift cards</li>
              <li>Airline miles</li>
              <li>Fronts points</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="section-why py-24">
  <div class="wrapper">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-full md:w-3/4">
        <h2>What Makes Yerbas Different?</h2>
        <ul class="checkmark">
          <li>Block reward of 100 YERB instead of 50 BTC.</li>
          <li>Block time of 2 minute instead of 10.</li>
          <li>Total coin supply of 420 million instead of 21 million.</li>
          <li>Fair launch - No premine - No ICO<br/>Total Supply - 420 million<br/>Reward distribution: <br/>75%miner - 20%Smartnode - 5%Development fee.</li>
          <li>A new mining algorithm, GhostRider is an algorithm created to discourage specialty hardware such as ASIC & FPGA enabling anybody to competitively mine it and increase overall decentralization..</li>
          <li>Addition of Asset & Sub-asset issuance, transfer, unique assets, and rewards.</li>
          <li>Yerbas has implemented a custom reward structure that not only makes Yerbas emissions smooth, but also unique.</li>
          <li>Yerbas also uses a tiered smartnode collateral and reward system which should avoid hyperinflation. 
                    A common and potentially devastating problem with many projects that use Masternodes.</li>
        </ul>
      </div>
      <div class="w-full sm:w-full md:w-1/4 text-center hidden md:block">
        <img id="logo-why" class="animated" style="margin-top: 30px;" src="{{"/assets/img/home/yerbas.png"}}" alt="yerbas logo">
      </div>
    </div>
  </div>
</div>
<div class="section-cta py-10">
  <div class="flex flex-wrap wrapper">
    <div class="w-full sm:w-1/2 md:w-3/4">
      <h2 class="text-white font-medium mb-3">Get Involved Today!</h2>
      <p class="text-white">Become a part of the community and contribute to Yerbas’s global decentralized network of miners, contributors, traders, and developers.</p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 text-left sm:text-center">
      <a class="btn btn-primary mx-2 mt-5 mb-3 px-4 py-3 font-normal text-base rounded text-white border-white border-solid border-2 hover:text-black" href="/community">Join the Community</a>
    </div>
  </div>
</div>
<div class="section-exchange pt-20 pb-24 text-center">
  <h2 class="font-medium">Exchanges</h2>
  <div class="wrapper mt-8 m-auto">
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
      <div class="mb-6 px-2 sm:w-1/2 md:w-1/3">
        <div class="bg-white max-w-sm rounded overflow-hidden shadow-md hover:by-grey enlarge-on-hover">
          <a class="block px-6 py-4" href="{{ exchange.url }}" target="_blank" rel="nofollow"><img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/></a>
        </div>
      </div>
      {% endfor %}
    </div>
      <div class="text-center">
        <a class="btn btn-primary d-block mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/buy-yerbas/">See All Exchanges</a>
      </div>
  </div>
</div>
<div class="section-aggregators pt-20 pb-24 text-center">
  <h2 class="font-medium">Aggregators</h2>
  <div class="wrapper mt-8 m-auto">
    <div class="flex flex-wrap">
      {% for aggregators in site.data.aggregators %}
      <div class="mb-6 px-2 sm:w-1/2 md:w-1/4">
        <div class="bg-white max-w-sm rounded overflow-hidden shadow-md hover:by-grey enlarge-on-hover">
          <a class="block px-6 py-4" href="{{ aggregators.url }}" target="_blank" rel="nofollow"><img src="{{ aggregators.logo }}" alt="{{ aggregators.name }} aggregators"/></a>
        </div>
      </div>
      {% endfor %}
    </div>
      <div class="text-center">
        <a class="btn btn-primary d-block mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/watch-yerbas/">See All Aggregators</a>
      </div>
  </div>
</div>
<div class="text-center" style="padding-bottom:50px">
  <h2 class="font-medium">X Updates</h2>
  <div class="center">
  <a class="x-timeline" data-width="600" data-height="600" data-dnt="true" data-theme="dark" href="https://x.com/Yerbas_Endeavor">Tweets by Yerbas</a> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>
</div>
</div>
<script src="/assets/vendors/mediabox/mediabox.js"></script>
<script>
  MediaBox('.mediabox');
</script>
<script type="text/javascript">
  window.addEventListener("load", function() {

    /* Tabs */

    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    function myTabClicks(tabClickEvent) {
      for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].classList.remove("active");
      }
      var clickedTab = tabClickEvent.currentTarget;
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var myContentPanes = document.querySelectorAll(".tab-pane");
      for (i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = document.querySelector(activePaneId);
      activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
      myTabs[i].addEventListener("click", myTabClicks)
    }

    /* Waypoints */

    const targets = ['tab-token', 'tab-tickets', 'tab-gold', 'tab-gift-card', 'logo-why'];
    targets.forEach(function(target) {
      var el = document.getElementById(target);
      var waypoint = new Waypoint({
        element: el,
        handler: function(direction) {
          if(target === 'logo-why') {
            el.classList.add('fadeInRight')
          } else {
            el.classList.add('fadeInLeft')
          }
        },
        offset: '100%'
      })
    })
  });
</script>
