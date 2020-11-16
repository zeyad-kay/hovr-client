import CardDeck from 'react-bootstrap/CardDeck'
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TimeIcon from "../assets/businessman-team.svg";
import PricesIcon from "../assets/dollars-money-bag.svg";
import SecurityIcon from "../assets/magnifying-glass-with-check-mark.svg";
import CaptainsIcon from "../assets/sands-of-time.svg";
function Home() {

    return (
        <>
            <Navbar></Navbar>
            <Section className="jumbotron home-section">
                <h1>Home</h1>
                <p>content</p>
            </Section>
            <Section className="jumbotron features-section">
                <h1>Features</h1>
                <CardDeck>
                    <Card title="Time Saving" body="content" img={TimeIcon} />
                    <Card title="Affordable Prices" body="content" img={PricesIcon} />
                    <Card title="Security" body="content" img={SecurityIcon} />
                    <Card title="Qualified Captains" body="content" img={CaptainsIcon} />
                </CardDeck>
            </Section>
            <Section className="jumbotron services-section">
                <h1>Services</h1>
                <p>content</p>
            </Section>
            <Section className="jumbotron packages-section">
                <h1>Packages</h1>
                <CardDeck>
                    <Card title="title" body="content" />
                    <Card title="title" body="content" />
                    <Card title="title" body="content" />
                </CardDeck>
            </Section>
            <Section className="jumbotron contact-section">
                <h1>Contact</h1>
                <p>content</p>
            </Section>
            <Section className="jumbotron footer-section">
                <h1>Footer</h1>
                <p>content</p>
            </Section>
        </>
    )
}
export default Home;