import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import newsTextImage from 'assets/news/news.svg';
import newsCat from 'assets/news/cat.svg';
import newsNFTHack from 'assets/news/nft-hack.svg';
import newsImage from 'assets/news/news-image.svg';
import newsAstrocat from 'assets/news/astrocatclaim.svg';
import newsRarible from 'assets/news/rarinews.svg';
import newsChainlink1 from 'assets/news/chainlinkwin.svg';
import newsChainlink2 from 'assets/news/chainlinkelephant.svg';
import newsCommcall1 from 'assets/news/commcall1.svg';
import newsCommcall2 from 'assets/news/commcall2.svg';
import newsMoneydance from 'assets/news/moneydance.svg';

// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);

// News Component
// ------------------------------------------------------------------------------------------------------- //
const News = () => 
    <div className='flex flex-col items-center px-5p relative z-20'>

        {/* Title Image & Description */}
        <img id='news' className='mt-52 mb-7 self-start' src={newsTextImage} alt='News' data-aos="fade"/>
        <h3 className='font-VT323 mb-28 lg:mb-8 text-2xl z-20 self-start' data-aos="fade">OMG, have a look at all the great things happening at reNFT!!</h3>

        {/* News Boxes */}
        <div className="grid grid-cols-18rem-1fr w-full grid-gap-10 justify-items-center z-20">
            <NewsBox title='COMMUNITY CALL #2' titleColor='purple' description='Community call #2 packed full of exciting updates towards mainnet launch' image={newsCommcall2} link='https://medium.com/renftlabs/renft-community-call-2-151989ff4dfe'/>
            <NewsBox title='RARIBLE INTEGRATION' titleColor='orange' description='Rarible to become the first NFT marketplace with rentals enabled by reNFT' image={newsRarible} link='https://twitter.com/renftlabs/status/1380244426908299268?s=20'/>
            <NewsBox title='ASTROCAT CLAIM' titleColor='purple' description='Astrocat NFT revealed, claim page live. The Astrocat holds special abilities' image={newsAstrocat} link='https://twitter.com/renftlabs/status/1375881626836631552?s=20'/>
            <NewsBox title='COMMUNITY CALL #1' titleColor='orange' description='The first ever reNFT community call! View the recap' image={newsCommcall1} link='https://www.youtube.com/watch?v=mldeTX2HVNo&t=3s'/>
            
            <NewsBox title='MOONCAT.SHOP' titleColor='purple' description='Mooncat Rescue marketplace and viewier tools created by reNFT' image={newsCat} link='https://mooncat.shop/'/>
            <NewsBox title='CHAINLINK VRF WHITE ELEPHANT' titleColor='orange' description='reNFT partners with Chainlink to use VRF for randomness in white elephant event' image={newsChainlink2} link='https://medium.com/renftlabs/find-hidden-nft-prizes-in-renfts-white-elephant-holiday-game-now-using-chainlink-vrf-to-36e8a1e1766a'/>
            <NewsBox title='MONEYDANCE 1ST PLACE WIN' titleColor='purple' description='1st place overall winners of Avalanche 2021 MoneyDance Hackathon!' image={newsMoneydance} link='https://medium.com/avalancheavax/wrapping-up-moneydance-2020-9480de1e8643'/>
            <NewsBox title='CHAINLINK HACK WINS' titleColor='orange' description='The Graph bounty and 2nd overall NFT project at Chainlink spring 2020 hack!' image={newsChainlink1} link='https://devpost.com/software/renft'/>
        </div>

    </div>
// ------------------------------------------------------------------------------------------------------- //


// News Box Component
// ------------------------------------------------------------------------------------------------------- //
const NewsBox = (props) => 
    <a href={props.link} className="flex flex-col hover-remove-shadow box-transition-150 box-content bg-white border-black border-4 shadow-7px-black flex justify-center items-center h-full px-5 py-1 max-w-72 max-h-68" data-aos='fade-right' data-aos-anchor-placement='center-bottom'>
        <img className='max-h-36 mb-3' src={props.image} alt={props.title}/>
        <div className='text-black font-VT323 text-2xl leading-7 mb-3'>{props.description}</div>
        <div className={`font-pressstart text-sm self-start ${props.titleColor == 'purple' ? 'text-purple' : 'text-orange'}`}>{props.title}</div>
    </a>
// ------------------------------------------------------------------------------------------------------- //

export default News;