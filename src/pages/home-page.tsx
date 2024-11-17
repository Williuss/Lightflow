import styled from "@emotion/styled"
import heroImg from "../assets/home-hero.png"
import homeImg1 from "../assets/home-img1.png"
import homeImg2 from "../assets/home-img2.jpg"
import baseTestingImg from "../assets/base-testing.png"
import customTestingImg from "../assets/custom-testing.png"
import aboutUsImg from "../assets/about-us.png"
import contactUsImg from "../assets/contact-us.png"
import { ProductCard } from "../commons/product-card"
import { PrimaryButton } from "../commons/primary-button"
import { InputText } from "../commons/input-text"
import { InputCheckbox } from "../commons/input-checkbox"

export const HomePage = () => {
    const HeroContainer = styled.div<{backgroundImage: string}>`
        background-image: url(${(props) => props.backgroundImage});
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        align-items: center;
        display: flex;
        padding: 0rem 5vw;
    `
    const HeroContent = styled.div`
        width: 50%;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    `

    const HeroText = styled.p`
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
    `

    const HeroTextDetail = styled.p`
        font-size: 0.75rem;
        line-height: 1.5;
    `

    const ContentContainer = styled.div`
        width: 100%;
        padding: 7.5vh 5vw;
        display: flex;
        flex-direction: column;
        gap: 5vh;
    `

    const ContentHeader = styled.p`
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 2rem;
    `

    const ContentDetail = styled.div`
        display: flex;
        justify-content: center;
        gap: 5%;
        align-items: center;

        img {
            width: 35%;
            border-radius: 10px;
        }
        p {
            width: 50%;
            line-height: 1.5;
            font-size: 0.9rem;
        }
    `
    
    const ProductCardContainer = styled.div`
        display: flex;
        justify-content: center;
        gap: 5vw;
    `

    const ProductDescriptionContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        height: 100%;
        line-height: 1.5;
        font-size: 0.9rem;
        justify-content: space-between;
    `

    const AboutUsContent = styled.div`
        display: flex;
        flex-direction: column;
        width: 50%;
        p {
            width: 100%;
        }
        align-items: end;
    `
    const AboutUsHeader = styled.p`
        font-size: 1.25rem !important;
        margin-bottom: 1rem;
    `

    const ContactUsInfo = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 0.9rem;
        gap: 0.75rem;
        p:first-child {
            font-weight: 600;
            font-size: 0.75rem;
        }
    `

    const ContactUsFormContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: .75rem;
        width: 40%;
    `

    return (
        <div>
            <HeroContainer backgroundImage={heroImg}>
                <HeroContent>
                    <HeroText>
                        <span style={{color:"#507fab" }}>#1</span> Shortcut to Smart Automation Testing Solutions.
                    </HeroText>
                    <HeroTextDetail>
                        Lightflow is a leading provider of innovative automation testing solutions for SMEs, empowering businesses to grow with ease since 2010.
                    </HeroTextDetail>
                    <PrimaryButton text="Check Our Products"/>
                </HeroContent>
            </HeroContainer>
            <ContentContainer id="our-services">
                <ContentHeader>Our <span style={{color:"#507fab" }}>Services</span></ContentHeader>
                <ContentDetail>
                    <img src={homeImg1}/>
                    <p>
                        At LightFlow, we provide a comprehensive range of automated testing services, designed to ensure your software operates flawlessly in every environment. Our core offering is our Base Testing Program, a powerful out-of-the-box solution that fully automates the testing of your applications. Its intuitive interface and extensive testing capabilities makes it perfect for businesses looking to streamline their quality assurance processes and reduce manual efforts.
                    </p>
                </ContentDetail>
                <ContentDetail>
                    <p style={{textAlign: "right"}}>
                        For clients who need something more tailored, we offer Custom Testing Solutions, with our team of experts always ready to help. We work closely with you to understand your project’s unique requirements and develop a testing framework that meets your exact specifications. From integration and performance testing to security assessments, our custom services are designed to ensure your software is not only functional, but optimized for performance and security.
                    </p>
                    <img src={homeImg2}/>
                </ContentDetail>
            </ContentContainer>
            <ContentContainer id="our-products">
                <ContentHeader>Our <span style={{color:"#507fab" }}>Products</span></ContentHeader>
                <ProductCardContainer>
                        <ProductCard title="Base Testing Plan" imageURL={baseTestingImg}>
                            <ProductDescriptionContainer style={{background: "#9dc2ec"}}>
                                <ul style={{listStyleType: "initial", listStylePosition: "inside"}}>
                                    <li>Pre-built testing templates</li>
                                    <li>Cross-platform compatibility</li>
                                    <li>Automated test scheduling</li>
                                    <li>Detailed reporting and analytics</li>
                                    <li>Ongoing updates and support</li>
                                </ul>
                                <PrimaryButton text="Price"/>
                            </ProductDescriptionContainer>
                        </ProductCard>
                        <ProductCard title="Custom Testing Plan" imageURL={customTestingImg}>
                            <ProductDescriptionContainer style={{background: "#5397d4"}}>
                                <ul style={{listStyleType: "initial", listStylePosition: "inside"}}>
                                    <li>Pre-built testing templates</li>
                                    <li>Automated test scheduling</li>
                                    <li>Detailed reporting and analytics</li>
                                    <li>Ongoing updates and support</li>
                                </ul>
                                <PrimaryButton text="Price"/>
                            </ProductDescriptionContainer>
                        </ProductCard>
                </ProductCardContainer>
            </ContentContainer>
            <ContentContainer id="about-us">
                <ContentHeader><span style={{color:"#507fab" }}>About</span> Us</ContentHeader>
                <ContentDetail>
                    <img src={aboutUsImg}/>
                    <AboutUsContent>
                        <AboutUsHeader>We Provide Solutions For <span style={{color:"#507fab" }}>You</span>.</AboutUsHeader>
                        <p>
                            At LightFlow, we provide a comprehensive range of automated testing services, designed to ensure your software operates flawlessly in every environment. Our core offering is our Base Testing Program, a powerful out-of-the-box solution that fully automates the testing of your applications. Its intuitive interface and extensive testing capabilities makes it perfect for businesses looking to streamline their quality assurance processes and reduce manual efforts.
                        </p>
                        <PrimaryButton text="Learn More"/>
                    </AboutUsContent>
                </ContentDetail>
            </ContentContainer>
            <div id="contact-us">
                <ContentHeader><span style={{color:"#507fab" }}>Contact</span> Us</ContentHeader>
                <ContactUsInfo>
                    <p>Before purchasing our automation products, customers can consult our trusted team of experts to find the best solutions for their testing needs.</p>
                    <p>Before Contacting Us, Please Fill Out The Form Below. Thank You.</p>
                </ContactUsInfo>
                <ContentContainer>
                    <ContentDetail>
                        <img src={contactUsImg}/>
                        <ContactUsFormContainer>
                            <InputText placeholder="Your Name"/>
                            <InputText placeholder="Email Address"/>
                            <InputText placeholder="Address"/>
                            <InputText placeholder="Password"/>
                            <InputCheckbox text="I Agree To Terms of Servive & Privacy Policy"/>
                            <PrimaryButton text="Submit"/>
                        </ContactUsFormContainer>
                    </ContentDetail>
                </ContentContainer>
            </div>
        </div>
    )
}