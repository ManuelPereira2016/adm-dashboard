import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getIsAdminFlag, getIsAuthedFlag } from '../../redux/modules/selectors/authentication';

AdminRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired
};

function redirectToPath(routeProps, pathName) {
    return (
        <Redirect to={{
            pathname: pathName,
            state: { from: routeProps.location }
        }}/>
    );
}

function AdminRoute({ component: Component, isAuthed, isAdmin, isRoot, ...rest }) {
    return <Route {...rest} render={(routeProps) => {
        if (isAuthed) {
            if (isAdmin) {
                return <Component {...routeProps} />
            }

            return redirectToPath(routeProps, '/user/form');
        }
        else {
            return redirectToPath(routeProps, '/login');
        }
    }}/>;
}

function mapStateToProps(state) {
    return {
        isAdmin: getIsAdminFlag(state),
        isAuthed: getIsAuthedFlag(state)
    }
}

export default connect(mapStateToProps)(AdminRoute);
