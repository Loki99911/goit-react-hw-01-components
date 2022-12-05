import styled from 'styled-components';

export const ProfileBlock = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 370px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: #b5b5c0 solid 2px;
`;

export const Avatar = styled.img`
  width: 100px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #524a4d;
`;
export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Location = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width:100%;
  // justify-content: space-evenly;
  margin: 0;
  padding: 0;
  background-color: #7e6f7449;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 4px) / 3);
  // min-width: 80px;
  padding: 7px 0;
  :not(:last-child) {
    border-right: 2px solid #b5b5c0;
  }
`;
export const Label = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;
