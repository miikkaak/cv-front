import Header from "../components/header";
import Footer from "../components/footer";
import profilePic from "../img/profile.webp";
import heroPicture from "../img/hero-bg.webp";
import { ReactComponent as Computer} from "../img/computer.svg";
import { ReactComponent as About} from "../img/about.svg";
import { ReactComponent as Arrow} from "../img/arrow-down.svg";
import { ReactComponent as Career } from "../img/career.svg";
import "../styles/_home.scss"
import Block from "../components/block";
import OneColumnBlock from "../components/block-one-column";

function Home() {
    return (
        <div>
            <Header/>
            <div className="page-container">
                <div className="hero">
                    <div className="hero-overlay">
                        <img 
                            src={heroPicture}
                            alt="hero picture"
                        />
                    </div>
                    <div className="content">
                        <div className="hero-content">
                            <div className="hello">Hello</div>
                            <div className="nameplate">my name is Miikka</div>
                            <div className="hero-picture">
                                <img 
                                    src={profilePic}
                                    alt="profile picture"
                                />
                            </div>
                            <div className="hero-excerpt">
                                <p>Am I your next specialist to enhance your organization's vital development processes? Get to know me below and let's get in touch!</p>
                            </div>
                            <div className="arrow">
                                <a className="arrow-link" href="#key-points" aria-label="To content">
                                    {<Arrow />}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                        <Block 
                            id="key-points"
                            icon={<Computer/>}
                            isDark={true}
                            isLeft={true}
                            title="whoami"
                            bullets={["Fullstack Developer (Javascript stack mainly)", "Cyber Security MsC student @JYU", "B.S. in Information Systems Science", "Full-time Nerd"]}
                            excerpt="Here is some key information about me and my expertise"
                            text="More information about my abilities and experience can be found in  Excperience and Education pages"
                            ctaText={'XP'}
                            ctaLink={"/experience"}
                        />
                        <Block 
                            id="about"
                            icon={<About/>}
                            isDark={false}
                            isLeft={false}
                            title="Other things in life"
                            excerpt="Besides the obvious career things, I also have lot going on in my life. Here's some examples of them"
                            bullets={['I enjoy everything outdoors (might have quessed)', 'Sometimes I make music - genres vary', 'Gym is my safe space', 'FPS games when feeling competitive']}
                            text="And so many other things that I would like to do if there was more hours in a day"
                        />
                        <Block 
                            id="career"
                            icon={<Career/>}
                            isDark={true}
                            isLeft={true}
                            title="Career Ambitions"
                            excerpt="As I have started progressing in my career path, I have recognized some ambitions regarding my future direction"
                            text="I enjoy software development in all its forms and would not mind continuing to produce some robust solutions. That being said, I'd like to shift my focus more into cyber security field as my studies progress and I get more experience pwning THM and HTB machines. Fortunately, these ambitions don't counter each other!"
                        />
                        <OneColumnBlock 
                            id="cta"
                            isDark={false}
                            title="Get familiar with me"
                            excerpt="There is more information about my experience, education and projects on other pages of this website. Check them out and contact me if I managed to spark your interest!"
                            text="You can start by checking out my relevant experience"
                            ctaText={'Experience'}
                            ctaLink={"/experience"}
                        />
                        
                </div>
                
            </div>
            
            <Footer />
        </div>
    );
}

export default Home;