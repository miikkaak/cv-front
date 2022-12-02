import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/_home.scss"
import Block from "../components/block";
import OneColumnBlock from "../components/block-one-column";
import { ReactComponent as Code } from '../img/code.svg'

function Projects() {
    return (
        <div>
            <Header/>
            <div className="page-container">
                <Block 
                    id="hero"
                    icon={<Code/>}
                    isDark={true}
                    isTopDown={true}
                    title="Projects"
                    excerpt="This page is at the state of minimum viable product. More advanced layout coming soon. You can check my public git repos at <a target=_blank href='https://github.com/miikkaak?tab=repositories'>GitHub</a>."
                />
                <OneColumnBlock
                    id="this"
                    isDark={false}
                    title="This site"
                    excerpt="This site is designed, developed and maintained by me. Frontend is written in React, and there is a NestJS application as an API. The whole process has taken very modest hours of my time so far so there is some todos that need to be adressed in the future:"
                    bullets={['Custom admin page/CMS', 'Database actions using TypeORM for the admin page', 'More advanced visual candy', 'Maybe some demonstrations/projects integrated into the site']}
                    text="At the moment, at least the frontend source code is available on GitHub"
                />
                
            </div>
            
            <Footer />
        </div>
    );
}

export default Projects;