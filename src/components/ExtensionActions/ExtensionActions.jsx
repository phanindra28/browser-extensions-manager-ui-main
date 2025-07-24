import "./ExtensionActions.css";
const ExtensionActions = (props) => {
  const { filter, setFilter, theme } = props;
  return (
    <div className={"extension-actions-container"}>
      <div style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
        Extension List
      </div>
      <div className={"extension-action-buttons"}>
        <button
          className={
            filter === "all" && (theme === "light" ? "active-light" : "active")
          }
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        <button
          className={
            filter === "active" &&
            (theme === "light" ? "active-light" : "active")
          }
          onClick={() => {
            setFilter("active");
          }}
        >
          Active
        </button>
        <button
          className={
            filter === "inactive" &&
            (theme === "light" ? "active-light" : "active")
          }
          onClick={() => {
            setFilter("inactive");
          }}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default ExtensionActions;
