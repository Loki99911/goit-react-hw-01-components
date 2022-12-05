import styled from 'styled-components';

export const StatisticsBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #000;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 10px #c6cccced;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: center;
`;
export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #fff;
`;
