import CardDeck from 'react-bootstrap/CardDeck'
import Section from "../components/Section/Section";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Contact from '../components/Contact/Contact';
import CaptainsIcon from "../assets/businessman-team.svg";
import PricesIcon from "../assets/dollars-money-bag.svg";
import SecurityIcon from "../assets/magnifying-glass-with-check-mark.svg";
import TimeIcon from "../assets/sands-of-time.svg";

function Home() {
    const featuresCard1body = "body";
    const featuresCard2body = "body";
    const featuresCard3body = "body";
    const featuresCard4body = "body";
    const packagesCard1title = "title";
    const packagesCard2title = "title";
    const packagesCard3title = "title";
    const packagesCard1body = "body";
    const packagesCard2body = "body";
    const packagesCard3body = "body";
    
    return (
        <>
            <Navbar></Navbar>
            <Section className="jumbotron home-section">
                <h1>Home</h1>
                <p>body</p>
            </Section>
            <Section className="jumbotron features-section">
                <h1>Features</h1>
                <CardDeck>
                    <Card title="Time Saving" body={featuresCard1body} img={TimeIcon} />
                    <Card title="Affordable Prices" body={featuresCard2body} img={PricesIcon} />
                    <Card title="Security" body={featuresCard3body} img={SecurityIcon} />
                    <Card title="Qualified Captains" body={featuresCard4body} img={CaptainsIcon} />
                </CardDeck>
            </Section>
            <Section className="jumbotron services-section">
                <h1>Services</h1>
                <p>body</p>
            </Section>
            <Section className="jumbotron packages-section">
                <h1>Packages</h1>
                <CardDeck>
                    <Card title={packagesCard1title} body={packagesCard1body} />
                    <Card title={packagesCard2title} body={packagesCard2body} />
                    <Card title={packagesCard3title} body={packagesCard3body} />
                </CardDeck>
            </Section>
            <Section className="jumbotron contact-section">
                <h1>Contact</h1>
                <Contact />
            </Section>
            <Section className="jumbotron footer-section">
                <h1>Footer</h1>
                <p>body</p>
            </Section>
        </>
    )
}
export default Home;