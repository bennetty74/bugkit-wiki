import './Switch.scss'
import ThemeContext from "../../context/ThemeContext";
import {useContext} from "react";

function Switch() {
    let {theme, setTheme} = useContext(ThemeContext);
    return (
        <div className="switch">
            <input type="checkbox" id="switch" className="checkbox" onChange={(e) => {
                console.log(e.currentTarget.value)
                theme = theme === 'light' ? 'dark' : 'light';
                setTheme(theme)
            }}/>
            <label htmlFor="switch" className="toggle">
            </label>
        </div>
    );
}


export default Switch;

