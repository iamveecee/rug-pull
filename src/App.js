import "./App.css";
import Main from "./components/Main";
import SwitchBtn from "./components/SwitchBtn";
import SocialBtns from "./components/SocialBtns";
import WorkStation from "./components/WorkStation";
import BackgroundLight from "./components/BackgroundLight";

function App() {
    return (
        <>
            <main className="page-wrapper">
                <div className=" main-bg-scene1 main-bg-scene-wrapper">
                    <BackgroundLight/>
                    
                    <header className="header">
                        <nav className="navbar d-flex">
                            <SocialBtns />
                        </nav>
                    </header>
                    {/* <SwitchBtn /> */}
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
