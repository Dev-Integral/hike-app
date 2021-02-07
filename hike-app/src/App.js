import logo from './images/logo.png';
import './App.css';

const App = ()=>{
const open =()=>{
    let navList = document.querySelector('.nav-list');
        navList.classList.add('active');
}
const close =()=>{
    let navList = document.querySelector('.nav-list');
        navList.classList.remove('active');
}

  return (
    <div className="overall">
            <header>
                <div className="container">
                    <nav>
                        <div className="nav-brand">
                            <a href="!#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="menu-icons open" onClick={()=>{open()}} >
                            <i className="icon ion-md-menu"></i>
                        </div>
                        <ul className="nav-list">
                            <div className="menu-icons close" onClick={()=>{close()}}>
                                <i className="icon ion-md-close"></i>
                            </div>
                            <li className="nav-item">
                                <a href className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href className="nav-link">Destinations</a>
                            </li>
                            <li className="nav-item">
                                <a href className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href className="nav-link">Booking</a>
                            </li>
                            <li className="nav-item">
                                <a href className="nav-link">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="hero">
                <div className="container">
                    <div className="main-message">
                        <h3>The grat outdoor</h3 >
                        <h1>Adventure</h1>
                        <p>
                            lorem ipsum dolor sit aret, consectour elit. conssecteur
                             ex, ipsum minus nolestias odit praseunium tenatoee vitae voluptates Ab autem debitis error hic 
                             id illum nolestiae ratione. Minus?
                        </p>
                        <div className="cta">
                            <a href="!#" className="btn">Book now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  );
}

export default App;
