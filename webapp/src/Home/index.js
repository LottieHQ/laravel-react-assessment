import { connect } from "react-redux";

import Home from "./Home";

const mapStateToProps = ({ list }) => ({
  list,
});

export default connect(mapStateToProps)(Home);
