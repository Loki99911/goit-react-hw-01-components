import styled from 'styled-components';

export const FriendListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;
  margin-top:30px;
  margin-bottom:0;
`;

export const FriendItemBlock = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  padding: 10px 30px;
  background-color: #ffffff;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => props.isOnline?"green":"red"};
`;

export const Avatar = styled.img`
  width: 40px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #000000;
`;
