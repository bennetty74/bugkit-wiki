import './css/App.scss';
import logo from './img/logo.svg';
import Switch from './components/Switch'


let themeText = "Light";

function App() {
  return (
    <div className="container">
      <div className="search-header">
          <Switch/>
      </div>
        <div className="search-body">
            <div className="img-container">
                <img src={logo} alt={"logo"}/>
            </div>
            <div className="search-wrapper">
                <input className="search-input" placeholder="search something"/>
                <div className="search-button">搜索</div>
            </div>
        </div>
    </div>
  );
}

function toggleTheme(){
    themeText = themeText === "Light" ? "Dark" : "Light";
}

export default App;
