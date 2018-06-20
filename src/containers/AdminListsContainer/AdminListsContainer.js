import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../api/user";
import {
  runModal,
  closeModal
} from "../../redux/modules/actionsCreators/modal";
import {
  getWhiteListUsers,
  getBlackListUsers,
  putUserBlackList,
  putUserWhiteList,
  deleteUserBlackList,
  deleteUserWhiteList
} from "../../api/lists";
import AdminLists from "../../views/Pages/AdminLists/AdminLists";
import UsersModal from "../../views/Modals/UsersModal";

class AdminListsContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    isLoadingBlackList: true,
    isLoadingWhiteList: true,
    isRemoveProcessing: false,
    selectedId: 0,
    blackList: [],
    whiteList: []
  };

  async componentDidMount() {
    await Promise.all([this.loadBlackList(), this.loadWhiteList()]);
  }

  async loadBlackList() {
    this.setState({
      isLoadingBlackList: true
    });

    try {
      const blackList = await getBlackListUsers();

      await this.setState({
        blackList: blackList.data
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        isLoadingBlackList: false
      });
    }
  }

  async loadWhiteList() {
    this.setState({
      isLoadingWhiteList: true
    });

    try {
      const whiteList = await getWhiteListUsers();

      await this.setState({
        whiteList: whiteList.data
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        isLoadingWhiteList: false
      });
    }
  }

  removeFromWhiteList = async id => {
    this.setState({
      isRemoveProcessing: true,
      selectedId: id
    });

    try {
      const response = await deleteUserWhiteList(id);

      let newWhiteList = [...this.state.whiteList],
        index = newWhiteList.findIndex(l => l.ID === id);

      newWhiteList.splice(index, 1);

      this.setState({
        whiteList: newWhiteList
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        isRemoveProcessing: false,
        selectedId: 0
      });
    }
  };

  removeFromBlackList = async id => {
    this.setState({
      isRemoveProcessing: true,
      selectedId: id
    });

    try {
      const response = await deleteUserBlackList(id);

      let newBlackList = [...this.state.blackList],
        index = newBlackList.findIndex(l => l.ID === id);

      newBlackList.splice(index, 1);

      this.setState({
        blackList: newBlackList
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        isRemoveProcessing: false,
        selectedId: 0
      });
    }
  };

  addUserToWhiteList = async data => {
    try {
      const response = await putUserWhiteList(data);

      if (response.error) {
          return response.data;
      }

      this.loadWhiteList();
    } catch (err) {
      console.error(err);
    }

    return false;
  };

  addUserToBlackList = async data => {
    try {
      const response = await putUserBlackList(data);

      if (response.error) {
          return response.data;
      }

      this.loadBlackList();
    } catch (err) {
      console.error(err);
    }

    return false;
  };

  openWhiteListModal = () => {
    this.props.dispatch(
      runModal({
        component: (
          <UsersModal
            onClose={() => this.props.dispatch(closeModal())}
            onSubmit={this.addUserToWhiteList}
          />
        ),
        title: "Añadir usuarios a lista blanca"
      })
    );
  };

  openBlackListModal = () => {
    this.props.dispatch(
      runModal({
        component: (
          <UsersModal
            onClose={() => this.props.dispatch(closeModal())}
            onSubmit={this.addUserToBlackList}
          />
        ),
        title: "Añadir usuarios a lista negra"
      })
    );
  };

  render() {
    return (
      <AdminLists
        removeFromBlackList={this.removeFromBlackList}
        removeFromWhiteList={this.removeFromWhiteList}
        whiteList={this.state.whiteList}
        blackList={this.state.blackList}
        selectedId={this.state.selectedId}
        openBlackListModal={this.openBlackListModal}
        openWhiteListModal={this.openWhiteListModal}
        isRemoveProcessing={this.state.isRemoveProcessing}
        isLoadingBlackList={this.state.isLoadingBlackList}
        isLoadingWhiteList={this.state.isLoadingWhiteList}
      />
    );
  }
}

export default connect()(AdminListsContainer);
