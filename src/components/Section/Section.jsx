import React from "react";
import PostContainer from "./Post/Container/PostContainer";
import style from "./Section.module.scss";

class Section extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <section>
        <div className={style.header}>Header</div>
        <PostContainer store={this.props.store} />
      </section>
    );
  }
}

export default Section;
