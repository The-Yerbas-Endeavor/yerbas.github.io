---
layout: page-w-banner
title: About
description: "Yerbas is a digital peer to peer network that aims to implement a use case specific blockchain, designed to efficiently handle one specific function: the transfer of assets from one party to another."
bannerTitle: About the Yerbas Project
bannerImage: /assets/img/pages/about/about-banner.jpg
permalink: /about/
---

<div class="wrapper mt-16 pb-20">
  <h2>To build your Smartnode, follow these simple steps</h2>
     <h3>Ubuntu 20.04</h3>
      <h4>1. Update Server</h4>
        <p>sudo apt update && apt upgrade -y <br/>
          sudo apt install unzip fail2ban -y
        </p>
    <div>
        <p>sudo apt update && apt upgrade -y <br/>
          sudo apt install unzip fail2ban -y
        </p>
    </div>  
        <h4>2. Add 4GB of SWAP</h4>
            <p><i>First check to make sure there is not already swap active:</i></p>
            <div><p class="container3">free -h</p></div>
            <p>note<br/>
            <i>If no swap it will return:<br/>
               Swap:     0B     0B     0B</i>
               Create SWAP and Activate:
            </p>
            <div><p>
            sudo bash \<br/>
            sudo dd if=/dev/zero of=/swapfile bs=1M count=4000 \<br/>
            sudo mkswap /swapfile && sudo chmod 600 /swapfile && sudo swapon /swapfile<br/>
            exit<br/>
            </p></div>
          <h4>3. Enable UFW & Open Ports</h4>
            <div><p>
            apt install ufw -y<br/>
            ufw default deny incoming<br/>
            ufw default allow outgoing<br/>
            ufw allow ssh<br/>
            ufw allow 15420/tcp<br/>
            ufw enable <br/></p></div>
          <h4>4. Configure Fail2Ban</h4>
        <div>
            <p><i>Setup jail for bad guys hitting SSH, and set it to ban after three failed logins to SSH</i></p>
            <p class="container3">
            nano /etc/fail2ban/jail.local</p></div>
            <p><i>Copy and paste the following into the file</i></p>
            <div><p class="container3">
            [sshd]<br/>
            enabled = true<br/>
            port = 22<br/>
            filter = sshd<br/>
            logpath = /var/log/auth.log<br/>
            maxretry = 3  <br/>
            </p></div>
            <p>Reboot the server</p>
            <div><p class="container3">sudo reboot</p></div>
            <p>Add a system user to run yerbasd</p>
            <div><p class="container3">
            adduser username<br/>
            adduser username sudo<br/>
            su username</p></div>
            <p>Get Yerbas wallet and daemon:</p>
            <div><p class="container3">
            wget https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/yerbas-ubuntu20-2.1.1.4.tar.gz<br/>
            tar -xf yerbas-ubuntu20-2.1.1.4.tar.gz<br/>
            mkdir ~/.yerbascore && touch ~/.yerbascore/yerbas.conf<br/>
            echo daemon=1 >> ~/.yerbascore/yerbas.conf<br/>
            cd .yerbascore<br/>
            wget https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/powcache.dat<br/>
            cd ~/yerbas-build<br/>
            ./yerbasd<br/> </p></div>
            <p>Note<br/>
            <i>You should see Yerbasd server starting. You can confirm it is running top -c it will be using 100% CPU (1 core). This shows you it is working, we will return to it later
              </i></p>
            <h4>5. Sync local wallet and send collateral</h4>
            <ul>
              <li>Start wallet and let it finish syncing.</li>
              <li>Encrypt wallet (Settings > Encrypt Wallet)</li>
              <li>Create new receiving address Backup wallet.dat (File > Backup Wallet).</li>
              <li>Store in multiple locations. Dump private key for receiving address (this should be printed and stored offline in multiple locations):</li>
              <li>Send 22,000 YERB to self</li>
              <li>Wait for 2 confirmations</li>
              <li>walletpassphrase yourpasswordhere 600   <i> from the debug console to unlock the wallet before running the protx setup script.</i> </li>
            </ul>

          <h4>6. Build protx command for control wallet</h4>
              <p>An example protx quick_setup command</p>
              <div><p class="container3"> protx quick_setup d7898f44c6bdc39a49b0917d5c6bcb61455270ddb9e7eb1168a6b745434daf26 1 194.113.73.87:15420 yaDfcdCupB1T5YoVRjYr8fXCvB8U5AuNX8
               </p></div>  
            <h5>The structure from left to right is:</h5>
            <ul>
              <li>Transaction ID: In your wallet go to “Transactions” right click the one you sent yourself earlier and “Copy Transaction ID”. Replace the Transaction ID in example.</li>
              <li>Encrypt wallet (Settings > Encrypt Wallet)</li>
              <li>Collateral index: Tools > Debug console. Type smartnode outputs to check if 1 or 0. Adjust example command if needed.</li>
              <li>Your smartnode server IP and port. Replace example IP with your Smartnode server IP, leave port as is.</li>
              <li>Fee address: This is any address in your wallet which contains enough YERB to pay the fee (cannot be the address which you sent the 10 thousand YERB to). When you enter the protx quick_setup command it is a transaction and needs to be paid for. It is a very small amount 1/2 a YERB is more than enough. In Debug console do “listaddressbalances” to show all addresses with a balance, choose one and replace address in example command.!</li>
            </ul>
              <p>Note<br/>
              <i>Enter the protx quick_setup command in Debug console. This will create a .conf file for that node in the same directory you ran the wallet from. Open it and copy the contents</i></p>
              <p>Back to the smartnode server</p>
              <div><p class="container3">
                ~./yerbas-cli stop<br/>
                nano ~/.yerbascore/yerbas.conf
                </p></div>
                <p>Paste in what you copied from the .conf file made during the protx command, save and exit.</p>
                <p>Start yerbasd</p> 
                <div><p class="container3">~./yerbasd</p></div>
                <p>Wait two minutes and do:Wait two minutes and do:</p>
                <div><p class="container3">~./yerbas-cli smartnode status</p></div>>
                <p>This should return:</p>
                <h5 class="heading4"><i>Ready Ready</i></h5>
                <h2>Congratulations: Your smartnode is now running. Time for a break</h2>
                <br/>
                <h5>Extras:</h5>
                <p>Check the node’s current height with:</p>
                <p><i>/yerbas-cli getblockcount</i></p>
                <p><i>./yerbas-cli -getinfo</i></p>
                <p>To update a node that has been PoSe Banded:</p>
                <p><i>protx update_service “protxhash” “ip”:15420 “BLSKEY”</i></p>
                <p>You can get the proTxHash by right clicking your Smartnode in the QT wallet Smartnode list<br/>
                BLS private key. This is stored on your Smartnode in ~/.yerbascore/yerbas.conf</p>
                <p><i>ie: protx update_service 7d62ce3bcf71825te84y5ca4b93a53583a8f1c9c70989e351c0f470088729a83 yoursmartnodeip:15420 3808471d6e52fe3b683474075cdf50192babe3b38203187ec0cg18fg54e439a4</i></p>



          </div>





  <h3>How Yerbas works</h3>

  <p>A Yerbas post on&nbsp;<em>Medium</em>&nbsp;from November 2017 references Game of Thrones when introducing this experimental currency:</p>
  <blockquote>
    “Yerb Is The Word”
  </blockquote>

  <p>Launched on May 9th, 2022. Yerbas is an open-source project designed to enable instant payments to anyone around the world. The aim of the project is to create a blockchain optimized specifically for the transfer of assets such as tokens from one holder to another.</p>

  <p>A fork of the bitcoin code, Yerbas features four key changes:</p>

  <ul>
    <li>The issuance schedule (original <a href="/halving/">block reward</a> of 100 YERB)</li>
    <li>Block time (2.5 minute)</li>
    <li>Coin supply (421 Million)</li>
    <li>Mining algorithm (GhostRider)</li>
  </ul>

  <p>The algorithm is intended to address the centralization of mining caused by ASIC hardware. In the original X16R&nbsp;<a href="/assets/documents/X16R-Whitepaper.pdf">algorithm paper</a>, the team behind the currency explains that the fixed order of ordinary hashing algorithms lends itself to the construction of ASIC miners.</p>

  <p>The initial X16R algorithm aimed to overcome this problem by constantly disrupting the ordering of the hashing algorithms – it uses the same algorithms used in X15 and SHA512, but the ordering of those algorithms was changed based on the hash of the previous block. Eventually it became economically viable for X16R ASIC's and the community decided to implement new algorithms to mitigate the unfair distribution of Yerbas. The community has carried out 2 algorithm forks to date to mitigate the potential efficiency improvements of the ASIC miners equipment compared to over the counter consumer grade equipment.</p>

  <p>The current &nbsp;<a href="https://medium.com/@tronblack/yerbas-v4-kawpow-16fb1f8ec372">GhosRider algorithm</a> aims to overcome the problem of centralisation of mining by utilising over the counter graphic processing unit (GPU) memory and compute capabilities. This is intended to allow most consumer grade GPU hardware to mine Yerbas. The KAWPOW algorithm was derived from ProgPOW and ethhash, with modifications, to improve the distribution of Yerbas to everyone.</p>

  <p>No additional future algorithm forks are envisaged. Note that this may allow future ASIC development to proceed, albeit as there is a limited potential for ASIC efficiency gains compared to consumer grade hardware, we are resistant to this form of centralisation.</p>

  <h3>Unique characteristics of Yerbas</h3>

  <ul>
    <li>ASIC resistant – Uses the KAWPOW hashing algorithm to discourage the development of ASIC hardware</li>
    <li>Fair launch - Everyone has equal opportunity to mine or purchase YERB since day one.</li>
    <li>No pre-mine, no ICO, and no coins held for developer or founders rewards.</li>
    <li>Community Driven, and True Open Source</li>
  </ul>

  <p><a href="https://medium.com/@yerbas/yerbas-4683cd00f83c">https://medium.com/@yerbas/yerbas-4683cd00f83c</a></p>

</div>
