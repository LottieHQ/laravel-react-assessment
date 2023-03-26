import { connect } from "react-redux";

import Filter from "./Filter";
import { getFilteredList } from "data/actions/api";

const mapDispatchToProps = (dispatch) => ({
  handleFilteredList: (filters) => dispatch(getFilteredList(filters)),
});

export default connect(null, mapDispatchToProps)(Filter);
