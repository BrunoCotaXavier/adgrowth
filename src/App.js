import './App.css';
import { BannerComponent } from './components/banner';
import { Header } from './components/header';
import { MainComponent } from './components/main';

function App() {
  return (
    <div className="App">
        <Header/>
        <BannerComponent/>
        <MainComponent/>
    </div>
  );
}

export default App;
