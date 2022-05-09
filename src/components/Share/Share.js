import React  from 'react';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import SocialMedia from './social-media'
import SocialMediaPopup from './social-media-pop-up'

const Share = () => {
    const [isShare, setIsShare] = useState(false);
    // const { t, i18n } = useTranslation();
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

    return(
        <>
         {/* {deviceSize < 786 && <> 
        <div className='wrapper-floatting-button'>
          <div className='floating-button-top' onClick={() => setIsShare(true)}>
              <p className='floating-text'>Follow Us</p>
          </div>
        </div>
        </>
      } */}
      {isShare && <SocialMediaPopup setIsSharing={() => {setIsShare(false)}} deviceSize={deviceSize}/>}
      
         {/* <button className="button-no-background" onClick={() => setIsShare(true)}> */}
         {/* <span className="btn-inner--icon"> */}
             <i className="fa fa-share ml-2" onClick={() => setIsShare(true)}/>
        {/* </span> */}
        {/* </button> */}
        
        </>
    );
}

export default Share;