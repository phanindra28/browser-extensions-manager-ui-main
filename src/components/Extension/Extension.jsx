import { iconsMap } from "../../utils/loadIcons.js";
import "./Extension.css";
const Extension = (props) => {
  const { logo, name, description, isActive, toggleExtension, theme, removeExtension } = props;
  const imageSrc = logo?.split("/").at(-1);
  return (
    <div className={"extension"}>
      <img className={"extension-logo"} src={iconsMap[imageSrc]} alt={name} />
      <div className={"extension-name"}>{name}</div>
      <div className={"description"}>{description}</div>
      <button className={"remove-button"} onClick={removeExtension}>Remove</button>
      <div className={"status-toggle"}>
        <label className="switch">
          <input type="checkbox" onClick={toggleExtension} checked={isActive} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Extension;
