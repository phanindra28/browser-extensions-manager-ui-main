import Data from "./data.json";
import Extension from "./components/Extension/Extension.jsx";
import "./App.css";
import ExtensionHeader from "./components/ExtensionHeader/ExtensionHeader.jsx";
import { useState } from "react";
import ExtensionActions from "./components/ExtensionActions/ExtensionActions";

function App() {
  const [extensionData, setExtensionData] = useState(Data);
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  const toggleExtension = (index) => {
    setExtensionData((prevData) => {
      return prevData.map((extension, idx) => {
        if (idx === index) {
          return { ...extension, isActive: !extension.isActive };
        }
        return extension;
      });
    });
  };
  return (
    <div className={`app ${theme === "light" ? "light-mode" : "dark-mode"}`}>
      <ExtensionHeader setTheme={setTheme} theme={theme} />
      <ExtensionActions filter={filter} setFilter={setFilter} theme={theme} />
      {extensionData
        .filter((extension) => {
          if (filter === "all") {
            return true;
          } else if (filter === "active") {
            return extension.isActive;
          } else if (filter === "inactive") {
            return !extension.isActive;
          } else {
            return false;
          }
        })
        .map((extension, idx) => {
          return (
            <Extension
              key={idx}
              theme={theme}
              {...extension}
              toggleExtension={() => {
                toggleExtension(idx);
              }}
              removeExtension={() => {
                setExtensionData((prevData) =>
                  prevData.filter((_, index) => index !== idx),
                );
              }}
            />
          );
        })}
    </div>
  );
}

export default App;
