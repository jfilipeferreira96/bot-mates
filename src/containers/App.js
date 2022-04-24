import { useState, useEffect, useCallback } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./app.css";

function App() {
  const [bots, setBots] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBots = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const bots = await response.json();
      setBots(bots);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchBots();
  }, [fetchBots]);

  const filteredBots = bots.filter((bot) => {
    return bot.name.toLowerCase().includes(search.toLowerCase());
  });

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  //if ajax takes too long
  if (bots.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Bot Mates</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <CardList bots={filteredBots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
