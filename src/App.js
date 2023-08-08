import {React, useState } from 'react';
import Header from './component/Header';
import Filter from './component/Filter';
import Main from './component/Main';
import Card from './component/Card';
import food from './data';
import './App.scss';

function App() {
  const [itemsData, setItemsData] = useState(food);
  // filter by category
  const category = ['الكل', ...new Set(food.map(i => i.cat))];
  function filterByCategory(cat) {
    (cat === 'الكل')
      ? setItemsData(food)
      :setItemsData(food.filter((ele) => ele.cat === cat));
  }
  return (
    <div>
        <Header/>
        <Filter cat={category} filter={filterByCategory}/>
        <Main>
          {itemsData.map((item, ind)=> <Card key={ind} info={item}/>)}
        </Main>
    </div>
  );
}

export default App;
