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
import GalleryImage from "../../components/GalleryImage";
import FooterNavbar from "../../components/FooterNavbar";
import NavbarButton from "../../components/NavbarButton";
import Heading from "../../components/Heading";

//photos
import HousePhoto_1 from "../../assets/img/house-1.jpeg";
import HousePhoto_2 from "../../assets/img/house-2.jpeg";
import HousePhoto_3 from "../../assets/img/house-3.jpeg";
import HousePhoto_4 from "../../assets/img/house-4.jpeg";
import HousePhoto_5 from "../../assets/img/house-5.jpeg";
import HousePhoto_6 from "../../assets/img/house-6.jpeg";

import GalleryPhoto_1 from "../../assets/img/gal-1.jpeg";
import GalleryPhoto_2 from "../../assets/img/gal-2.jpeg";
import GalleryPhoto_3 from "../../assets/img/gal-3.jpeg";
import GalleryPhoto_4 from "../../assets/img/gal-4.jpeg";
import GalleryPhoto_5 from "../../assets/img/gal-5.jpeg";
import GalleryPhoto_6 from "../../assets/img/gal-6.jpeg";
import GalleryPhoto_7 from "../../assets/img/gal-7.jpeg";
import GalleryPhoto_8 from "../../assets/img/gal-8.jpeg";
import GalleryPhoto_9 from "../../assets/img/gal-9.jpeg";
import GalleryPhoto_10 from "../../assets/img/gal-10.jpeg";
import GalleryPhoto_11 from "../../assets/img/gal-11.jpeg";
import GalleryPhoto_12 from "../../assets/img/gal-12.jpeg";
import GalleryPhoto_13 from "../../assets/img/gal-13.jpeg";
import GalleryPhoto_14 from "../../assets/img/gal-14.jpeg";

import HeaderLogo from "../../assets/img/logo.png";
import BBC_logo from "../../assets/img/logo-bbc.png";
import Forbes_logo from "../../assets/img/logo-forbes.png";
import Techcrunch_logo from "../../assets/img/logo-techcrunch.png";
import Bi_logo from "../../assets/img/logo-bi.png";


class Home extends React.Component {
    render() {
        return (
            <Container>
                <Sidebar>
                    <NavbarButton />
                </Sidebar>
                <Header>
                    <img src={HeaderLogo} alt="Nexter logo" className="header__logo" />
                    <Heading
                        text="Your own home:"
                        type="3"
                    />
                    <Heading
                        text="The ultimate personal freedom"
                        type="1"
                    />
                    <button className="btn header__btn">View our properties</button>
                    <div className="header__seenon-text">Seen on</div>
                    <div className="header__seenon-logos">
                        <img src={BBC_logo} alt="seen on logo 1" />
                        <img src={Forbes_logo} alt="seen on logo 2" />
                        <img src={Techcrunch_logo} alt="seen on logo 3" />
                        <img src={Bi_logo} alt="Seen on logo 4" />
                    </div>
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
                    <HomeCard
                        image={HousePhoto_1}
                        headingText="Beautiful Familiy House"
                        locationText="USA"
                        roomsText="5 rooms"
                        areaText_1="323 m"
                        areaText_2="2"
                        priceText="$1,200,000"
                        text="USA"
                    />
                    <HomeCard
                        image={HousePhoto_2}
                        headingText="Modern Glass Villa"
                        locationText="Canada"
                        roomsText="6 rooms"
                        areaText_1="450 m"
                        areaText_2="2"
                        priceText="$2,750,000"

                    />
                    <HomeCard
                        image={HousePhoto_3}
                        headingText="Cozy Country House"
                        locationText="UK"
                        roomsText="4 rooms"
                        areaText_1="250 m"
                        areaText_2="2"
                        priceText="$850,000"

                    />
                    <HomeCard
                        image={HousePhoto_4}
                        headingText="Large Rustical Villa"
                        locationText="Portugal"
                        roomsText="6 rooms"
                        areaText_1="480 m"
                        areaText_2="2"
                        priceText="$1,950,000"

                    />
                    <HomeCard
                        image={HousePhoto_5}
                        headingText="Majestic Palace House"
                        locationText="Germany"
                        roomsText="18 rooms"
                        areaText_1="4230 m"
                        areaText_2="2"
                        priceText="$9,500,000"

                    />
                    <HomeCard
                        image={HousePhoto_6}
                        headingText="Modern Familiy Apartment"
                        locationText="Italy"
                        roomsText="3 rooms"
                        areaText_1="80 m"
                        areaText_2="2"
                        priceText="$600,000"

                    />
                </Homes>
                <Gallery>

                    <figure className="gallery__item gallery__item--1">
                        <GalleryImage src={GalleryPhoto_1} />
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                        <GalleryImage src={GalleryPhoto_2} />
                    </figure>
                    <figure className="gallery__item gallery__item--3">
                        <GalleryImage src={GalleryPhoto_3} />
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <GalleryImage src={GalleryPhoto_4} />
                    </figure>
                    <figure className="gallery__item gallery__item--5">
                        <GalleryImage src={GalleryPhoto_5} />
                    </figure>
                    <figure className="gallery__item gallery__item--6">
                        <GalleryImage src={GalleryPhoto_6} />
                    </figure>
                    <figure className="gallery__item gallery__item--7">
                        <GalleryImage src={GalleryPhoto_7} />
                    </figure>
                    <figure className="gallery__item gallery__item--8">
                        <GalleryImage src={GalleryPhoto_8} />
                    </figure>
                    <figure className="gallery__item gallery__item--9">
                        <GalleryImage src={GalleryPhoto_9} />
                    </figure>
                    <figure className="gallery__item gallery__item--10">
                        <GalleryImage src={GalleryPhoto_10} />
                    </figure>
                    <figure className="gallery__item gallery__item--11">
                        <GalleryImage src={GalleryPhoto_11} />
                    </figure>
                    <figure className="gallery__item gallery__item--12">
                        <GalleryImage src={GalleryPhoto_12} />
                    </figure>
                    <figure className="gallery__item gallery__item--13">
                        <GalleryImage src={GalleryPhoto_13} />
                    </figure>
                    <figure className="gallery__item gallery__item--14">
                        <GalleryImage src={GalleryPhoto_14} />
                    </figure>
                </Gallery>
                <Footer>
                    <FooterNavbar />
                </Footer>

            </Container>
        );
    }
}

export default Home;