import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListBlock } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBlock>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendListBlock>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};