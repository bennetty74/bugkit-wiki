import './Switch.scss'

function Switch() {
    return (
        <div className="switch">
            <input type="checkbox" id="switch" className="checkbox"/>
            <label htmlFor="switch" className="toggle">
            </label>
        </div>
    );
}

export default Switch;

