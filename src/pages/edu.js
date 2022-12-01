import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/_home.scss"
import OneColumnBlock from "../components/block-one-column";
import Block from "../components/block";
import { ReactComponent as Education } from "../img/education.svg"

function Edu() {
    return (
        <div>
            <Header/>
            <div className="page-container">
                <Block 
                    id="education"
                    icon={<Education/>}
                    isDark={true}
                    isTopDown={true}
                    title="Education"
                    excerpt="Welp, this is quite self-explanatory. I conducted the academic studies to my profession in University of Jyväskylä and here's some key information about that"
                    text=""
                />
                <OneColumnBlock 
                    id="msc"
                    isDark={false}
                    title="M.S. Cyber Security"
                    optional="University of Jyväskylä, 2021-present"
                    excerpt="I started my master's degree studies in fall 2021. There is a wide range of topics consisting of both technical and administrative information security, and while doing courses from both aspects, I have emphasized the technical side more. The studies have involved for example:"
                    bullets={["Penetration testing", "Information Security Management", "Anomaly Detection"]}
                    text="The average of studies (Dec. 2022): 4.35"
                />
                <OneColumnBlock 
                    id="ba"
                    isDark={true}
                    title="B.S. Information Systems Science"
                    optional="University of Jyväskylä, 2016-2020"
                    excerpt="In 2016 I started my academic studies in University of Jyväskylä. Bachelor's degree studies consisted of wider range of topics in IT field, and while doing both administrative and technical studies, the technical side was again more for me. Studies involved topics such as:"
                    bullets={['Programming (web, OOP, etc.)', 'Databases', 'Project management', 'Architectures']}
                    text="The average of studies: 4"
                />
            </div>
            
            <Footer />
        </div>
    );
}

export default Edu;