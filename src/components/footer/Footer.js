import ThemeContext from "../../context/ThemeContext";
import {useContext} from "react";
import './Footer.scss'

function Footer() {
    let {theme, setTheme} = useContext(ThemeContext);
    return (
        <div className="footer">
            <div className="content">
                Copyright by <a href="https://blog.bugkit">bugkit</a> © 2022-2022
                <span><a href="https://beian.miit.gov.cn/">黔ICP备2021009059号-1</a></span>
            </div>
        </div>
    );
}


export default Footer;