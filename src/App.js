import './css/App.scss';
import logo from './img/logo.svg';
import Switch from './components/Switch'
import ThemeProvider from "./context/ThemeProvider";
import {useState} from "react";


let key = "";

function App() {
    const [key,setKey] = useState('')
    function handleSearch(){
        let url = 'https://www.google.com.hk/search?q=' + key;
        window.open(url,'_blank');
    }

    function handleEnter(e){
        console.log(e);
        if(e.key === 'Enter'){
            handleSearch();
        }
    }

    return (
        <ThemeProvider>
            <div className="container">
                <div className="search-header">
                    <Switch/>
                </div>
                <div className="search-body">
                    <div className="img-container">
                        <img src={logo} alt={"logo"}/>
                    </div>
                    <div className="search-wrapper">
                        <input value={key} className="search-input" placeholder="search something" onChange={e => setKey(e.target.value)} onKeyUp={event => handleEnter(event)}/>
                        <div className="search-button" onClick={handleSearch}>搜索</div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}




export default App;
