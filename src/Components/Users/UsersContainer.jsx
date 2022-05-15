import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import {
  followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC,
} from '../../Redux/users-reduser';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() { // пропси сюди не приходять
    return (
      <>
        {this.props.isFetching ? <img src="" /> : null }
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber));
  },
  setTotalUsersCount: (totalCount) => {
    dispatch(setTotalUsersCountAC(totalCount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
