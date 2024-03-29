---
layout: page-w-banner
title: Whitepaper
bannerTitle: Whitepaper
bannerImage: /assets/img/pages/whitepaper/whitepaper-banner.png
permalink: /whitepaper/
---

<div class="page-content">
  <div class="wrapper">
    <h2 id="intro" class="text-center">Be Informed, Stay Involved</h2>
    <p class="text-center">Documents available in <button id="English" onClick="changeTextEnglish()"><img src="/assets/img/pages/whitepaper/English.png" /></button></p>
    <div class="flex flex-wrap text-center pt-20 pb-32 m-auto" style="max-width: 700px;">
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ White Paper ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div class="w-full sm:w-1/2 mb-8">
        <a id="whitePaper0" href="/assets/documents/YerbasWhitePaper.pdf" target="_blank">
          <div class="mb-6 py-4 px-6 inline-block rounded-full bg-grey hover:bg-grey-dark">
            <i class="zmdi zmdi-file-text text-5xl text-white"></i>
          </div>
        </a>
        <h3><a id="whitePaper1" href="/assets/documents/YerbasWhitePaper.pdf" target="_blank">White paper</a></h3>
        <p id="whitePaper2">Yerbas: A Peer to Peer Electronic System for the Creation and Transfer of Assets</p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GR ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div class="w-full sm:w-1/2 mb-8">
        <a id="x16r0" href="/assets/documents/GhostRider_Whitepaper.pdf" target="_blank">
          <div class="mb-6 py-4 px-6 inline-block rounded-full bg-grey hover:bg-grey-dark">
            <i class="zmdi zmdi-file-text text-5xl text-white"></i>
          </div>
        </a>
        <h3><a id="x16r1" href="/assets/documents/GhostRider_Whitepaper.pdf" target="_blank">GhostRider algorithm paper</a></h3>
        <p id="x16r2">GhostRider: ASIC Resistant by Design</p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ X16R ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div class="w-full sm:w-1/2 mb-8">
        <a id="x16r0" href="/assets/documents/X16R-Whitepaper.pdf" target="_blank">
          <div class="mb-6 py-4 px-6 inline-block rounded-full bg-grey hover:bg-grey-dark">
            <i class="zmdi zmdi-file-text text-5xl text-white"></i>
          </div>
        </a>
        <h3><a id="x16r1" href="/assets/documents/X16R-Whitepaper.pdf" target="_blank">X16R algorithm paper</a></h3>
        <p id="x16r2">X16R: ASIC Resistant by Design</p>
      </div>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Road Map ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<!--       <div class="w-full sm:w-1/2 mb-8">
        <a id="roadMap0" href="https://github.com/The-Yerbas-Endeavor/The-Yerbas-Endeavor.github.io/tree/master/roadmap" target="_blank">
          <div class="mb-6 py-4 px-6 inline-block rounded-full bg-grey hover:bg-grey-dark">
            <i class="zmdi zmdi-map text-5xl text-white"></i>
          </div>
        </a>
        <h3><a id="roadMap1" href="https://github.com/The-Yerbas-Endeavor/The-Yerbas-Endeavor.github.io/tree/master/roadmap" target="_blank">Development roadmap</a></h3>
        <p id="roadMap2">Development roadmap</p>
      </div>  -->
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Road Map MD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <div id="roadMapMD" class="w-full sm:w-1/2 mb-8">
        <a href="https://github.com/The-Yerbas-Endeavor/The-Yerbas-Endeavor.github.io/tree/master/whitepaper" target="_blank">
          <div class="mb-6 py-4 px-5 inline-block rounded-full bg-grey hover:bg-grey-dark">
            <i class="zmdi zmdi-github text-5xl text-white"></i>
          </div>
        </a>
        <h3><a href="https://github.com/The-Yerbas-Endeavor/The-Yerbas-Endeavor.github.io/tree/master/whitepaper" target="_blank">Markdown Version</a></h3>
        <p id="roadMapMD4">Markdown version of the Yerbas white papers.</p>
      </div>
    </div>
  </div>
</div>

<script>
  function changeTextEnglish()
  {
    document.getElementById('intro').innerHTML = 'Be Informed, Stay Involved';
    document.getElementById('pub').innerHTML = 'Documents published by <a href="https://www.linkedin.com/in/brucefenton/" target="_blank">Bruce Fenton</a>, <a href="https://www.linkedin.com/in/tron-black-90287/" target="_blank">Tron Black</a>, and <a href="https://www.linkedin.com/in/joelweight/" target="_blank">Joel Weight</a>.';
    <!-- White Paper -->
    document.getElementById('whitePaper0').href = "/assets/documents/YerbasWhitePaper.pdf";
    document.getElementById('whitePaper1').innerHTML = 'White paper';
    document.getElementById('whitePaper1').href = "/assets/documents/YerbasWhitePaper.pdf";
    document.getElementById('whitePaper2').innerHTML = 'Yerbas: A Peer to Peer Electronic System for the Creation and Transfer of Assets';
      <!-- X16R -->
    document.getElementById('GhostRider0').href = "/assets/documents/GhostRider_Whitepaper.pdf";
    document.getElementById('GhostRider1').innerHTML = 'GhostRider algorithm paper';
    document.getElementById('GhostRider1').href = "/assets/documents/X16R-Whitepaper.pdf";
    document.getElementById('GhostRider2').innerHTML = 'GhostRider: ASIC Resistant by Design';
   <!-- X16R -->
    document.getElementById('x16r0').href = "/assets/documents/X16R-Whitepaper.pdf";
    document.getElementById('x16r1').innerHTML = 'X16R algorithm paper';
    document.getElementById('x16r1').href = "/assets/documents/X16R-Whitepaper.pdf";
    document.getElementById('x16r2').innerHTML = 'X16R: ASIC Resistant by Design'; 
    <!-- Road Map -->
    document.getElementById('roadMap0').href = "https://github.com/The-Yerbas-Endeavor/The-Yerbas-Endeavor.github.io/tree/master/roadmap";
    document.getElementById('roadMap1').innerHTML = 'Development roadmap';
    document.getElementById('roadMap1').href = "https://github.com/The-Yerbas-Endeavor/The-Yerbas-Endeavor.github.io/tree/master/roadmap";
    document.getElementById('roadMap2').innerHTML = 'Development roadmap';
    <!-- Road Map MD -->
    document.getElementById('roadMapMD').style.visibility = "visible";
  }
  function changeTextGerman()
  {
    document.getElementById('intro').innerHTML = 'Informierti';
    document.getElementById('pub').innerHTML = 'Von ';
    <!-- White Paper -->
    document.getElementById('whitePaper0').href = "/assets/documents/Yerbas.German.pdf";
    document.getElementById('whitePaper1').innerHTML = 'Weißbuch';
    document.getElementById('whitePaper1').href = "/assets/documents/Yerbas.German.pdf";
    document.getElementById('whitePaper2').innerHTML = 'Yerbas: Ein elektronisches Peer-to-Peer-System für die Erstellung und Übertragung von Assets';
   <!-- GhostRider -->
    document.getElementById('GhostRider0').href = "/assets/documents/GhostRider_Whitepaper.German.pdf";
    document.getElementById('GhostRider').innerHTML = 'GhostRider Algorithmusentwurf';
    document.getElementById('GhostRider').href = "/assets/documents/GhostRider_Whitepaper.German.pdf";
    document.getElementById('GhostRider').innerHTML = 'GhostRider: AASIC-beständig durch Design'; 
   <!-- X16R -->
    document.getElementById('x16r0').href = "/assets/documents/X16R-Whitepaper.German.pdf";
    document.getElementById('x16r1').innerHTML = 'X16R Algorithmusentwurf';
    document.getElementById('x16r1').href = "/assets/documents/X16R-Whitepaper.German.pdf";
    document.getElementById('x16r2').innerHTML = 'X16R: AASIC-beständig durch Design';
    <!-- Road Map -->
    document.getElementById('roadMap0').href = "/assets/documents/Roadmap.German.pdf";
    document.getElementById('roadMap1').innerHTML = 'Yerbas Fahrplan';
    document.getElementById('roadMap1').href = "/assets/documents/Roadmap.German.pdf";
    document.getElementById('roadMap2').innerHTML = 'Yerbas Fahrplan';
   <!-- Road Map MD -->
   document.getElementById('roadMapMD').style.visibility = "hidden";
  }
</script>