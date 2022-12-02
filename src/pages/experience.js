import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/_home.scss"
import OneColumnBlock from "../components/block-one-column";
import Block from "../components/block";
import { ReactComponent as Work } from "../img/career.svg"

function Experience() {
    return (
        <div>
            <Header/>
            <div className="page-container">
                <Block 
                    id="career"
                    icon={<Work/>}
                    isDark={false}
                    isTopDown={true}
                    title="Work experience"
                    excerpt="This page displays my relevant work experience. Which mainly includes my work in software development and technical support"
                    text=""
                />
                <OneColumnBlock 
                    id="bluf"
                    isDark={true}
                    title="BlufVPN OÜ"
                    optional="2022-present"
                    excerpt="In this multi-national work environment, I work as a fullstack developer producing web solutions for both business and consumer clients. Developing and maintaining company web applications is my key responsibilty. Some highlights of my path with BlufVPN are:"
                    bullets={["Built a highly customized SEO-optimized website driving traffic to customer's product page", "Built numerous new components to customer's admin portal providing customizability, customer engagement and key information about product usage", "Provided new solutions to company's website which improved page analytics, product launches, and customer satisfaction"]}
                    text="Main technologies used: React, Node.js, TypeScript, NestJS, TypeORM, GraphQL, PHP"
                />
                <OneColumnBlock 
                    id="power"
                    isDark={false}
                    title="Power Finland Oy"
                    optional="2018-2022"
                    excerpt="In this technical support role, I provided a variety of technical services including, but not limited to, customer hardware/software troubleshooting, custom installations and TV calibrations. Some key moments with Power are:"
                    bullets={["Provided efficient calibration services which in part helped the store to top every other store in the country in S&V service sales percentage", "Trained the store staff to use a newly implemented task management tool similar to Jira", "Trained multiple people (including my successor) to provide technical support services efficiently", "Improved customer satisfaction by providing efficient on-site services"]}
                    text="Main technologies used: CalMAN, custom Windows installation scripts and other tools"
                />
            </div>
            
            <Footer />
        </div>
    );
}

export default Experience;