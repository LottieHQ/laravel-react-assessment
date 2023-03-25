import { connect } from "react-redux";

import List from "./Home";

const mapStateToProps = ({ list }) => ({
  list,
});

export default connect(mapStateToProps)(List);
