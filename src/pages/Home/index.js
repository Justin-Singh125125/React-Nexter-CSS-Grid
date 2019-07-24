import React from "react";

//layouts
import Container from "../../layouts/Container";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import Realtors from "../../layouts/Realtors";
import Features from "../../layouts/Features";
import Homes from "../../layouts/Homes";
import Gallery from "../../layouts/Gallery";
import Footer from "../../layouts/Footer";

//components
import StoryPictures from "../../components/Story-Pictures";
import StoryContent from "../../components/Story-Content";
import Feature from "../../components/Feature";
import HomeCard from "../../components/HomeCard";

//photos

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Sidebar>
                    Sidebar
                </Sidebar>
                <Header>
                    Header
                </Header>
                <Realtors>
                    Top 3 realtors
                </Realtors>
                <Features>
                    <Feature
                        featureText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
                        svgSelection="icon-global"
                        headingText="World's best luxury homes"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    />

                    <Feature
                        featureText="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
                        svgSelection="icon-trophy"
                        headingText="Only the best properties"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    />

                    <Feature
                        featureText="Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
                        svgSelection="icon-map-pin"
                        headingText="All homes in top locations"
                    />

                    <Feature
                        featureText="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        svgSelection="icon-key"
                        headingText="New home in one week"
                    />

                    <Feature
                        featureText="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
                        svgSelection="icon-presentation"
                        headingText="Top 1% realtors"
                    />

                    <Feature
                        featureText="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
                        svgSelection="icon-lock"
                        headingText="Secure payments on Nexter"
                    />

                </Features>
                <StoryPictures />
                <StoryContent
                    storyText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!"
                />
                <Homes>
                    <HomeCard text="home card 1" />
                    <HomeCard text="home card 2" />
                    <HomeCard text="home card 3" />
                    <HomeCard text="home card 4" />
                    <HomeCard text="home card 5" />
                    <HomeCard text="home card 6" />
                </Homes>
                <Gallery>
                    Gallery
                </Gallery>
                <Footer>
                    Footer
                </Footer>

            </Container>
        );
    }
}

export default Home;