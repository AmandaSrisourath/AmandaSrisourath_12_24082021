import './App.css';
import Header from "./Profile/Header";
import Sidebar from "./Profile/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="main">
          <p>Bonjour Thomas</p>
      </div>

    </div>
  );
}

export default App;
