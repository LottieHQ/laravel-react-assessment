import { connect } from "react-redux";

import List from "./List";

const mapStateToProps = ({ list }) => ({
  list,
});

export default connect(mapStateToProps)(List);
