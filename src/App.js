import './App.css';
import Header from "./Profile/Header";
import Sidebar from "./Profile/Sidebar";
import calories from "./Assets/Icons/calories.png";
import protein from "./Assets/Icons/protein.png";
import carbs from "./Assets/Icons/carbs.png";
import fat from "./Assets/Icons/fat.png";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="main">
          <h1>Bonjour <span className="name">Thomas</span></h1>
          <p className="congratulations">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

          <div className="container">
              <div>
                  <div className="activity background">
                  </div>

                  <div className="container-performances">
                      <div className="performances background">
                      </div>

                      <div className="performances background">
                      </div>

                      <div className="performances background">
                      </div>
                  </div>
              </div>

              <div className="container-performances-detail">
                  <div className="performances-details background">
                      <img className="performances-details-icon" src={calories} alt="calories-icon" />
                      <div className="lost">
                          <h2>Cal</h2>
                          <p>Calories</p>
                      </div>
                  </div>

                  <div className="performances-details background">
                      <img className="performances-details-icon" src={protein} alt="protein-icon"/>
                      <div className="lost">
                          <h2>g</h2>
                          <p>Protéines</p>
                      </div>
                  </div>

                  <div className="performances-details background">
                      <img className="performances-details-icon" src={carbs} alt="carbs-icon"/>
                      <div className="lost">
                          <h2>g</h2>
                          <p>Glucides</p>
                      </div>
                  </div>

                  <div className="performances-details background">
                      <img className="performances-details-icon" src={fat} alt="fat-icon"/>
                      <div className="lost">
                          <h2>g</h2>
                          <p>Lipides</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}

export default App;
