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
                        featureText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
                    />

                    <Feature
                        featureText="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
                        svgSelection="icon-trophy"
                        headingText="Only the best properties"
                        featureText="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
                    />

                    <Feature
                        featureText="Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
                        svgSelection="icon-map-pin"
                        headingText="All homes in top locations"
                        featureText="Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
                    />

                    <Feature
                        featureText="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                        svgSelection="icon-key"
                        headingText="New home in one week"
                        featureText="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />

                    <Feature
                        featureText="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
                        svgSelection="icon-presentation"
                        headingText="Top 1% realtors"
                        featureText="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
                    />

                    <Feature
                        featureText="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
                        svgSelection="icon-lock"
                        headingText="Secure payments on Nexter"
                        featureText="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
                    />

                </Features>
                <StoryPictures>
                    Story pictures
                </StoryPictures>
                <StoryContent>
                    Story Content
                </StoryContent>
                <Homes>
                    Homes
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