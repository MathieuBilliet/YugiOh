import './App.css'
import Header from './components/Header/Header'
import Saisi from './components/Saisi/Saisi'
import CardList from './components/CardList/CardList'
import { cardList } from './data/cardList'

function App() {
return (
 <div className='app'>
  <Header /> 
  <Saisi />
    <CardList cardList={cardList} />
</div>
);
}

export default App;
