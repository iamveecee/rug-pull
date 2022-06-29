import "./App.css";
import Main from "./components/Main";
import SwitchBtn from "./components/SwitchBtn";
import SocialBtns from "./components/SocialBtns";
import bgImgOff from "./assets/bg-off.png";

function App() {

    const mobileBgCSS = `@media (min-width: 320px) and (max-width: 767.98px)  {
        .bg-light-on .main-bg-scene  {
            background-image: url("../public/images/bg-mobile-on.png");
        }
    
        .main-bg-scene {        
            background-image: url("../public/images/bg-mobile-off.png");
        }
    }`;

    const backgroundStyle = {
        backgroundImage: `url(${bgImgOff})`,
    }
    return (
        <>
        <style scoped>{mobileBgCSS}</style>

            <main className="page-wrapper">
                <div className="main-bg-scene" style={backgroundStyle}>
                    <header className="header">
                        <nav className="navbar d-flex">
                            <SocialBtns/>
                        </nav>
                    </header>
                    <SwitchBtn />
                    <Main />
                </div>
            </main>
            {/* <div className="container-fluid vh-1001 position-relative1 main-con">
            <div className="row ">                
                
            </div>
        </div> */}
        </>
    );
}

export default App;
