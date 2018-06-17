import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminLists from "../../views/Pages/AdminLists/AdminLists";
import { getWhiteListUsers, getBlackListUsers, putUserBlackList, putUserWhiteList, deleteUserBlackList, deleteUserWhiteList } from "../../api/lists";

class AdminListsContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
      isLoading: false,
      blackList: [],
      whiteList: []
  }

  componentDidMount() {
      this.loadData();
  }

  async loadData() {
      this.setState({
          isLoading: true
      });

      try {
          const [ whiteList, blackList ] = await Promise.all([
              getWhiteListUsers(),
              getBlackListUsers()
          ]);

          await this.setState({
              whiteList,
              blackList
          });

          debugger
      }
      catch (err) {
          console.error(err);
      }
      finally {
          this.setState({
              isLoading: false
          });
      }
  }

  removeFromWhiteList = async (id) => {
      try {
          const response = await deleteUserWhiteList({ id });
      }
      catch (err) {
          console.error(err);
      }
  }

  removeFromBlackList = async (id) => {
      try {
          const response = await deleteUserBlackList({ id });
      }
      catch (err) {
          console.error(err);
      }
  }

  putToWhiteList = () => {

  }

  putToBlackList = () => {

  }

  render() {
    return (
        <AdminLists
            whiteList={this.state.whiteList}
            blackList={this.state.blackList}
            isLoading={this.state.isLoading} />
    );
  }
}

export default AdminListsContainer;
