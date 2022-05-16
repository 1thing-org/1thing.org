import React from "react";
import { useState } from "react";
import SocialMediaPopup from "./social-media-pop-up";

const Share = () => {
	const [isShare, setIsShare] = useState(false);
	const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

	return (
		<>
			{isShare && (
				<SocialMediaPopup
					setIsSharing={() => {
						setIsShare(false);
					}}
					deviceSize={deviceSize}
				/>
			)}
			<i className="fa fa-share ml-2" onClick={() => setIsShare(true)} />
		</>
	);
};

export default Share;
