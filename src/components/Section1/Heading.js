
import React, { useState, useCallback } from "react";
import {Links} from 'Constants'
import AOS from 'aos';
import 'aos/dist/aos.css';
import headingImage from 'assets/heading/guildfighter.gif';


// Initiate Animations
AOS.init({ offset: 120, delay: 0, duration: 700, easing: 'ease'});
window.addEventListener('load', AOS.refresh);

// Heading Component
// ------------------------------------------------------------------------------------------------------- //
const Heading = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const signUp = async () => {
      if (!email) return;

      await fetch(`https://api.mailerlite.com/api/v2/subscribers/?apiKey=${process.env.REACT_APP_MAILLITE_API}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          "email": email
        }) // body data type must match "Content-Type" header
      });

      setIsSubmitted(true);
    }

    const handleChange = useCallback((e) => {
      setEmail(e.target.value);
    }, []);

    return (
      <div id='heading' className='flex flex-col items-center px-5p relative z-10' data-aos="fade" data-aos-delay="150" data-aos-once='true'>

          {/* Description & Title Image */}
          <h3 className='font-VT323 text-2xl z-20'>Join the Guild Fighters community and buy our NFTs on Opensea!</h3>
          <img className='mt-11 mb-10 z-10' src={headingImage} alt='BUY OUR MEDIEVAL COLLECTIBLES'/>
          
          {/* Launch Button */}
          <a className='relative z-10' href={Links.launchDApp}>
              <div className='launch-button-outer absolute'></div>
              <div className='launch-button-inner absolute w-70 h-10 font-pressstart text-sm filter hover:brightness-95'>
                  GO TO OPENSEA
              </div>
          </a>
          
          {/* SignUp Input */}
          {!isSubmitted && (<div className='text-sm inline-flex justify-center flex-wrap mt-40 mb-72 font-pressstart z-10'>
              <input className='text-sm h-10 text-black box-border font-pressstart w-72 p-2 outline-none border-0' type='email' value={email} onChange={handleChange} onBlur={handleChange} />
              <div className='bg-purple inline-flex items-center justify-center cursor-pointer h-10 w-72 transition duration-300 ease-in-out filter hover:brightness-95' onClick={signUp}>SIGN UP FOR NEWS</div>
          </div>)}

          {isSubmitted && (<div className='font-VT323 text-4xl mt-40 mb-72 mb-1 z-10'>
            SUBSCRIBED
          </div>)}
      </div>
    )
}
// ------------------------------------------------------------------------------------------------------- //

export default Heading;