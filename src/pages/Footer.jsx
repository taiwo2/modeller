import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white h-96 pt-2">
      <div className="bg-pink-100 max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center text-center h-full">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img
            src="https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png"
            alt="Instagram"
            className="w-12 h-12 mb-2"
          />
          <p className="font-semibold">@TOLABANKS</p>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <svg
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="51 2.96 141 193.94"
            className="w-12 h-12 mb-2"
          >
            <g>
              <path d="M136.1 58.9c.8 0 1.4.7 1.4 1.4V184c0 .8-.7 1.4-1.4 1.4H63.9c-.8 0-1.4-.7-1.4-1.4V60.4c0-.8.7-1.4 1.4-1.4h72.2m0-11.6H63.9c-7.1 0-12.9 5.8-12.9 12.9V184c0 7.1 5.8 12.9 12.9 12.9h72.2c7.1 0 12.9-5.8 12.9-12.9V60.4c0-7.2-5.8-13-12.9-13z"></path>
              <path d="M164.8 54.3c-2.9 0-5.4-2.2-5.7-5.2-.6-6.7-5.7-12.6-12.3-14.3-3.1-.8-4.9-4-4.1-7s4-4.9 7-4.1c11.2 2.9 19.7 13 20.8 24.3.3 3.2-2 6-5.2 6.3h-.5z"></path>
              <path d="M186.2 53.1c-3.2 0-5.7-2.6-5.8-5.7 0-15.4-11.5-29.6-26.7-33-3.1-.7-5.1-3.8-4.4-6.9s3.8-5.1 6.9-4.4C176.6 7.6 192 26.6 192 47.3c0 3.2-2.6 5.8-5.8 5.8.1 0 0 0 0 0z"></path>
              <path d="M109.7 165c0 5.357-4.343 9.7-9.7 9.7-5.357 0-9.7-4.343-9.7-9.7 0-5.357 4.343-9.7 9.7-9.7 5.357 0 9.7 4.343 9.7 9.7z"></path>
            </g>
          </svg>
          <p className="font-semibold">+1 (587) 574-3180</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1.438 1 81.176 51.036"
            className="w-12 h-12 mb-2"
          >
            <g>
              <path d="M82.4 1.9c-.2-.6-.8-.9-1.4-.9L2.9 3.6c-.7 0-1.2.4-1.4 1.1-.2.6.1 1.2.7 1.6l18.6 11.2-8 13.2c-.3.5-.3 1.1 0 1.6s.7.7 1.4.7l13.8-.9 4.4 18.8c.1.5.5 1 1.1 1.1.5.1 1.1 0 1.5-.4l47.3-48c.4-.6.4-1.1.1-1.7zM8.1 6.4l63.6-2.1-47.6 11.9c-.1-.2-.3-.3-.5-.5L8.1 6.4zm8.8 23.4l7.3-12c.1-.2.2-.4.2-.6L77 4.2 30.1 29.4c-.3-.2-.6-.4-1-.4H29l-12.1.8zm17.7 17.7l-4-17.3L75.4 6.1 34.6 47.5z"></path>
            </g>
          </svg>
          <p className="font-semibold">TOLABANKSBEAUTY@GMAIL.COM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
