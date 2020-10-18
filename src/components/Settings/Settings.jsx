import React from "react";
import style from "./Settings.module.scss";

class Settings extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <section className={style.settings}>Settings</section>;
  }
}

export default Settings;
