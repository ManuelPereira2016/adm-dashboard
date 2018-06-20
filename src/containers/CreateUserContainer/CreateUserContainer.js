import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateUser from "../../views/Pages/CreateUser/CreateUser";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { register, updateUser } from "../../api/user";
import { getServices } from "../../api/service";

class CreateUserContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    isLoading: true,
    isProcessing: false,
    processingMessage: ''
  };

  constructor(props) {
    super(props);

    this.formRef = React.createRef();

    this.user = null;
    this.services = [];

    if (this.props.location.state) {
      this.user = this.props.location.state.userData;
    }
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    this.setState({
      isLoading: true
    });

    try {
      const data = await getServices();

      if (!data.error) {
        this.services = data.data;
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }

  onSubmit = async () => {
    this.setState({
      isProcessing: true
    });

    let formData = new FormData(this.formRef.current);

    let data = {};

    formData.forEach(function(value, key) {
      if (key !== "password2") {
        data[key] = value;
      }
      else if (key === "id_servicio") {
          data[key] = parseInt(value, 10);
      }
    });

    try {
      if (this.user) {
        let updatedData = {
          ...this.user,
          ...data
        };

        const response = await updateUser(updatedData);

        if (response.data) {
            await this.setState({
                processingMessage: response.data
            });
        }

        setTimeout(() => {
            this.props.dispatch(push("/admin/users"));
        }, 1000);

      } else {
        const response = await register(data);

        if (response.data) {
            await this.setState({
                processingMessage: response.data
            });
        }

        setTimeout(() => {
            this.props.dispatch(push("/admin/users"));
        }, 1000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({
        isProcessing: false
      });
    }
  };

  onCancel = () => {
    this.props.dispatch(push("/admin/users"));
  };

  render() {
    return (
      <CreateUser
        onCancel={this.onCancel}
        user={this.user}
        dispatch={this.props.dispatch}
        formRef={this.formRef}
        services={this.services}
        processingMessage={this.state.processingMessage}
        isLoading={this.state.isLoading}
        isProcessing={this.state.isProcessing}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect()(CreateUserContainer);
