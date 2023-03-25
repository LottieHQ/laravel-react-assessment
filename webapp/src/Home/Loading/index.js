import { connect } from "react-redux";

import Loading from "./Loading";
import { getList } from "data/actions/api";

const mapStateToProps = ({ loaded, list }) => ({
  loaded,
  list,
});

const mapDispatchToProps = (dispatch) => ({
  handleLoaded: () => dispatch(getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
