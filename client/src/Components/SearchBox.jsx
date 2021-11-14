import styles from "../Styles/SearchBox.module.css";

export const SearchBox = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.searchBoxCon}>
        <div>
          <img
            style={{ position: "absolute", top: "45%" }}
            src={window.location.origin + "/search.png"}
            alt=""
          />
          <input type="text" placeholder="Job title or keyword" />
        </div>
        <div>
          <img
            style={{ position: "absolute", top: "48%", left: "48%" }}
            src={window.location.origin + "/location.png"}
            alt=""
          />
          <select
            style={{
              width: "150px",
              height: "40px",
              border: "none",
              color: "grey",
            }}
            name=""
            id=""
          >
            <option defaultValue="select a location"> Select a Location</option>
            <option value=""> Mumbai </option>
            <option value=""> Bengaluru </option>
            <option value=""> Delhi </option>
          </select>
        </div>
        <div className={styles.btn}>
          <button> Search</button>
        </div>
      </div>
    </div>
  );
};
