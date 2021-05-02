import logo from './logo.svg';
import './App.css';
import './custom.css';
import PageTitle from './components/classComponents/PageTitle.js';
import PageHeader from './components/classComponents/PageHeader';
import Home from './components/Home.js';
import PageContent from './components/classComponents/PageContent';


function App() {
  return (
    <div className="App">
      <PageTitle title="会社マスタ"></PageTitle>
      <PageHeader></PageHeader>
      <PageContent></PageContent>
    </div>
  );
}

export default App;
