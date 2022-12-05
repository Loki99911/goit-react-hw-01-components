import PropTypes from 'prop-types';
import { FriendItemBlock, Status, Avatar, Name } from './FriendList.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemBlock>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendItemBlock>
    // <FriendItemBlock>
    //   <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
    //   <Avatar src={avatar} alt="User avatar" />
    //   <Name>{name}</Name>
    // </FriendItemBlock>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};