import "./ExtensionHeader.css";
import { ReactComponent as IconMoon } from "../../assets/images/icon-moon.svg";
import { ReactComponent as IconSun } from "../../assets/images/icon-sun.svg";
import Logo from "../logo/Logo";

const ExtensionHeader = (props) => {
  const { theme, setTheme } = props;
  return (
    <div className={"extension-header"}>
      <div>
        <Logo color={theme === "dark" ? "#FDFFFF" : "#091540"} />
      </div>
      <button
        className={"toggle-theme"}
        onClick={() =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark"))
        }
      >
        {theme === "light" ? <IconMoon /> : <IconSun />}
      </button>
    </div>
  );
};

export default ExtensionHeader;
