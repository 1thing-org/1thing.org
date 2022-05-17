import React  from 'react';
import { FacebookShareButton, FacebookIcon,  LinkedinShareButton,LinkedinIcon ,TwitterShareButton, TwitterIcon } from "react-share";
const SocialMediaShareSummary = "We all can make small contributions to improve racial equality. Share what you did and inspire more to join the force. Together we can create bigger changes.";
const SocialMediaShareSummaryShort = "We all can make small contributions to improve racial equality. Share what you did and inspire more to join the force. Together we can create bigger changes.";
const SocialMediaSharing = ({size, bgStyle, iconFillColor}) => {
    return <>
            <TwitterShareButton
                title={SocialMediaShareSummaryShort}
                url={"https://www.1thing.org/"}
                hashtags={["1thing"]}>
            <TwitterIcon round size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>
            </TwitterShareButton>
            &nbsp;
            <LinkedinShareButton
                title={"1 Thing Against Racism"} //(string): Title of the shared page
                summary={SocialMediaShareSummary}
                description={SocialMediaShareSummary}
                //source={"Page source"} //(string): Source of the content (e.g. your website or application name)
                url={"https://www.1thing.org/"}
                hashtags={["1thing"]}
            >
            <LinkedinIcon round size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>
            </LinkedinShareButton>
            &nbsp;
            <FacebookShareButton
                url={"https://www.1thing.org/"}
                quote={SocialMediaShareSummary}
                hashtag={"1thing"}
                >
                <FacebookIcon round size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>
            </FacebookShareButton>
        </>
}


const SocialMediaLink = ({size, bgStyle, iconFillColor}) => {
    return <>
            <button className={"button-no-background"} onClick={() => window.open("https://twitter.com/1Thing_Org")}>
                <TwitterIcon round size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>
            </button>
            &nbsp;
            <button className={"button-no-background"} onClick={() => window.open("https://www.linkedin.com/company/1-thing-org")}>
                <LinkedinIcon round size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>
            </button>
            &nbsp;
            <button className={"button-no-background"} onClick={() => window.open("https://www.facebook.com/One-Thing-Org-103418918935944")}>
                <FacebookIcon round size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>
            </button>
        </>
}


const SocialMedia = ({size, bgStyle, iconFillColor, isShare}) => {

    
    return  (isShare ? 
        <SocialMediaSharing size={size} bgStyle={bgStyle} iconFillColor={iconFillColor} /> : 
        <SocialMediaLink size={size} bgStyle={bgStyle} iconFillColor={iconFillColor}/>)
    
}


export default SocialMedia