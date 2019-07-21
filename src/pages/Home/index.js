import React from "react";

//layouts
import Container from "../../layouts/Container";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import Realtors from "../../layouts/Realtors";
import Features from "../../layouts/Features";
import StoryPictures from "../../layouts/Story-Pictures";
import StoryContent from "../../layouts/Story-Content";
import Homes from "../../layouts/Homes";
import Gallery from "../../layouts/Gallery";
import Footer from "../../layouts/Footer";

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
                    Features
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