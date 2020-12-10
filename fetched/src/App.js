import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { Route, Link} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import Home from "./components/Home";
import DogAdoption from './components/DogAdoption';
import NewDogForm from "./components/NewDogForm";
import DogInfo from "./components/DogInfo";


function App() {

  const [dogData, setDogData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getDogData = async () => {
      const response = await axios.get(baseURL, config);
      setDogData(response.data.records)

    }
    getDogData();
  }, [toggle]);

  // console.log(dogData)

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/dogListing">
        {dogData.map((dog) => (
         <DogAdoption dog={dog} key={dog.id} setToggle={setToggle}/>
        ))}
      </Route>

      <Route path="/fetched/:id">
        <DogInfo dogData={dogData}/>
      </Route>

      <Route path="/newDogForm">
        <NewDogForm dogData={dogData} setToggle={setToggle}/>
      </Route>

      <Route path="/edit/:id">
        <NewDogForm dogData={dogData} setToggle={setToggle}/>
      </Route>

      <Footer />
      <Route path="/:404">
          <h1>404 Page</h1>
          <Link to="/">Menu</Link>
      </Route>
    </div>
  );
}

export default App;
