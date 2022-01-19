import './css/App.scss';
import logo from './img/logo.svg';
import Switch from './components/Switch'
import ThemeProvider from "./context/ThemeProvider";
import {useState} from "react";


function App() {

    /**
     * 搜索的key和setter
     */
    const [key, setKey] = useState('')
    /**
     * 搜索引擎
     */
    const [engine, setEngine] = useState('baidu')

    /**
     * 首页站点表
     * @type {[{name: string, url: string}, {name: string, url: string}, {name: string, url: string}]}
     */
    const siteList = [
        {name: 'Blog', url: 'https://blog.bugkit.cn/'},
        {name: 'Github', url: 'https://github.com/bennetty74'},
        {name: 'Zhihu', url: 'https://www.zhihu.com/people/lb.bupt.sse'},
    ]

    /**
     * 搜索引擎Map
     * @type {{baidu: string, google: string, bing: string}}
     */
    const engineMap = {
        bing: 'https://cn.bing.com/search?q=',
        google: 'https://www.google.com.hk/search?q=',
        baidu: 'https://www.baidu.com/s?wd='
    }

    /**
     * 处理搜索事件
     */
    function handleSearch() {
        if (key) {
            let url = engineMap[engine] + key;
            window.open(url, '_blank');
        }
    }

    function toTarget(url) {
        window.open(url, '_blank');
    }

    /**
     * 处理回车事件，按下回车后开始搜索
     * @param e
     */
    function handleEnter(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    /**
     * 判断宽度小于600px，如果小于则被认定为移动端
     * @returns {boolean}
     */
    function isMobile() {
        return window.screen.width <= 600;
    }

    /**
     * 处理搜索引擎变化事件
     * @param e 事件
     */
    function handleEngineChange(e) {
        setEngine(e.target.value)
    }

    /**
     * 条件渲染搜索button
     * @param props isMobile
     * @returns {JSX.Element|null} 如果是移动端，则返回null，反之返回search button
     * @constructor
     */
    function SearchButton(props) {
        if (props.isMobile) {
            return null;
        }
        return <div className="search-button" onClick={handleSearch}>搜索</div>;
    }

    function SiteList() {
        const siteItems = siteList.map(item =>
            <div className="site-item" onClick={() => toTarget(item.url)} key={item.name}>
                <div className="img">{item.name.substr(0, 1).toUpperCase()}</div>
                <div className="name">{item.name}</div>
            </div>
        )
        return (
            <div className="site-list">
                {siteItems}
            </div>
        );

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
                        <div className="search-input-group">
                            <select className="select" onClick={(e) => handleEngineChange(e)}>
                                <option value="baidu">Baidu</option>
                                <option value="google">Google</option>
                                <option value="bing">Bing</option>
                            </select>
                            <input value={key} className="search-input" placeholder="嗖嗖嗖..."
                                   onChange={e => setKey(e.target.value)} onKeyUp={event => handleEnter(event)}/>
                        </div>
                        <SearchButton isMobile={isMobile()}/>
                    </div>
                    <SiteList/>
                </div>
            </div>
        </ThemeProvider>
    );
}


export default App;
