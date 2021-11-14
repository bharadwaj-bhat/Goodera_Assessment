import styles from "./App.module.css";
import { useEffect, useState } from "react";

import { Link, Switch, Route } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { HeroText } from "./Components/HeroText";
import { SearchBox } from "./Components/SearchBox";
import { JobList } from "./Components/JobList";

import axios from "axios";
import { PostJob } from "./Components/PostJob";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    axios
      .get("http://localhost:1234/jobs")
      .then((res) => setData(res.data))
      .then(() => console.log(data));
  };

  return (
    <>
      <Switch>
        <Route path="/">
          <div className={styles.App}>
            <div className={styles.heroContainer}>
              <Nav />
              <HeroText />
              <SearchBox />
            </div>
            <div className={styles.jobListContainer}>
              {data &&
                data.map((el) => (
                  <JobList
                    title={el.title}
                    image={el.image}
                    description={el.description}
                  />
                ))}
            </div>
          </div>
        </Route>
        <Route path="/post" exact>
          <PostJob />
        </Route>
      </Switch>
    </>
  );
}

export default App;
