import React from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';

import twitterIcon from 'assets/social/twitter.svg';
import discordIcon from 'assets/social/discord.svg';
import telegramIcon from 'assets/social/telegram.svg';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);


// Footer Component
// ------------------------------------------------------------------------------------------------------- //
const Footer = () => 
    <footer className='mt-80 px-5p z-20 relative'>

        <div className='grid grid-cols-11rem-1fr grid-gap-x-6 grid-gap-y-12 justify-items-center md:justify-items-stretch z-20'>
            
            {/* Section 1 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="100">
                <h3 className='font-pressstart text-sm mb-1.5'>LEARN MORE</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://medium.com/renftlabs">Medium</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://community.renft.io/">DAO Forum</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href='#'>Join our Socials!</a></div>
            </div>

            {/* Section 2 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="150">
                <h3 className='font-pressstart text-sm mb-1.5'>THINGS BY reNFT</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="http://cryptopunk.rent/">Cryptopunk Rights Leasing</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://mooncat.shop/">Mooncat Rescue Tool</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://medium.com/renftlabs/find-hidden-nft-prizes-in-renfts-white-elephant-holiday-game-now-using-chainlink-vrf-to-36e8a1e1766a">White Elephant Game</a></div>
            </div>

            {/* Section 3 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="200">
                <h3 className='font-pressstart text-sm mb-1.5'>AWARDS</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://devpost.com/software/renft">Chainlink Hack</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://medium.com/avalancheavax/wrapping-up-moneydance-2020-9480de1e8643">MoneyDance Hack</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://medium.com/nfthack/untitled-nft-hackathon-submissions-71bb7d686dcc">Untitled NFT Hack</a></div>
            </div>

            {/* Section 4 */}
            <div className='flex flex-col z-20' data-aos='fade-right' data-aos-delay="250">
                <h3 className='font-pressstart text-sm mb-1.5'>OFFICIAL LINKS</h3>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://claim.renft.io/">Astrocat Claim</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="https://etherscan.io/address/0x0db8c099b426677f575d512874d45a767e9acc3c">Astrocat Contract</a></div>
                <div className='font-VT323 text-2xl mb-1'><a className='hover:underline' href="#">RENT Pair (soon)</a></div>
            </div>
        </div>

        {/* Bottom Footer */}
        <div className='font-VT323 text-2xl flex justify-between items-center mt-12 pb-2 flex-wrap' data-aos='fade-right' data-aos-delay="200" data-aos-anchor-placement='top-bottom'>
            <a className='hover:underline mb-1 mr-4' href={Links.copyright}>Copyright© 2021 &#123;reNFT&#125;</a>

            <span className='inline-flex'>
                <a className='mr-4 social-link' href={Links.twitter}><img className='max-w-none' src={twitterIcon} alt='Twitter'/></a>
                <a className='mr-4 social-link' href={Links.discord}><img className='max-w-none' src={discordIcon} alt='Discord'/></a>
                <a className='social-link' href={Links.telegram}><img className='max-w-none' src={telegramIcon} alt='Telegram'/></a>
            </span>
        </div>

    </footer>
// ------------------------------------------------------------------------------------------------------- //

export default Footer;