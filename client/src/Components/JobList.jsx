import styles from "../Styles/SearchBox.module.css";

export const JobList = ({ title, description, image }) => {
  return (
    <div className={styles.jobListCont}>
      <img
        style={{
          width: "80%",
          height: "40%",
          overflow: "hidden",
          borderRadius: "20px",
        }}
        src={image}
        alt=""
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "24px", fontWeight: "500" }}> {title}</p>
        <p style={{ fontSize: "14px", fontWeight: "500" }}> {description}</p>
        <button
          style={{
            width: "120px",
            color: "#F07987",
            marginLeft: "240px",
            border: "1px solid #F07987",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            padding: "10px 15px",
            background: "white",
          }}
        >
          {" "}
          view details
        </button>
      </div>
    </div>
  );
};
