import background from "../../images/homepage-background.jpg";
import "./HomePage.css";

const HomePage = () => {
	return (
		<div style={ {backgroundImage: `url(${background})`} } className="homepage-container">
			<div className="textbox-1">Boba is love, Boba is life</div>
			<div className="textbox-2">Share your boba, share your favorite places</div>
		</div>
	);
};

export default HomePage;