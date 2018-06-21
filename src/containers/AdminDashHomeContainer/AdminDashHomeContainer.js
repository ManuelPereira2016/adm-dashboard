import React, { Component } from 'react';
import DashboardHome from '../../views/Pages/DashboardHome';
import { getDashboard } from '../../api/user';

class AdminDashHomeContainer extends Component {
    state = {
        total: 0,
        aprobado: 0,
        desaprobado: 0,
        costo: 0,
        ultimos: []
    }

    async componentDidMount() {
        const data = await getDashboard();

        this.setState({
            ...data
        });
    }

  render() {
    return (
        <DashboardHome
            total={this.state.total}
            aprobado={this.state.aprobado}
            ultimos={this.state.ultimos}
            costo={this.state.costo}
            desaprobado={this.state.desaprobado}/>
    );
  }
}

export default AdminDashHomeContainer;
