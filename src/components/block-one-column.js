import { useState, useEffect } from "react";
import "../styles/_block.scss";

const OneColumnBlock = ({id, isDark, title, optional, bullets = null, excerpt, text, ctaText=null, ctaLink}) => {

    const [list, setList] = useState(null);
    const [isButton, setIsButton] = useState(false);

    useEffect(() => {
        if (ctaText != null) {
            setIsButton(true);
        }

        if (bullets != null) {
            setList(getBullets());
        }
    }, [])

    const getBullets = () => {
        if (bullets.length != 0) {
            return bullets.map((point) => {
                return (<li key={Math.random()}>{point}</li>)
            })
        }
    }

    return (
        <div id={id} className={`block ${isDark ? 'dark' : 'light'}`}>
            <div className="text-container">
                <div className="title">{title}</div>
                <div className="optional">{optional}</div>
                <div className="excerpt">{excerpt}</div>
                <div className="bullets">
                    <ul>
                       {list} 
                    </ul>
                </div>
                <div className="text">{text}</div>
                {isButton && <div className="cta">
                    <a className="cta-button" href={ctaLink}>{ctaText}</a>
                </div>}
            </div>
        </div>
    );
}

export default OneColumnBlock;