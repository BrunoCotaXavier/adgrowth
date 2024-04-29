import './App.css';
import { BannerComponent } from './components/banner';
import { Header } from './components/header';
import { MainComponent } from './components/main';
import { TabBottom } from './components/tabBottom';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerComponent />
      <MainComponent />
      <TabBottom />
    </div>
  );
}

export default App;
