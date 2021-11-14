import styles from "./App.module.css";
import { useEffect, useState } from "react";

import { Link, Switch, Route } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { HeroText } from "./Components/HeroText";
import { SearchBox } from "./Components/SearchBox";

function App() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Nav />
        <HeroText />
        <SearchBox />
      </div>
    </>
  );
}

export default App;
