import styled from 'styled-components';

export const TableBlock = styled.table`
  margin-top: 30px;
  box-shadow: 0 0 10px #c6cccced;
  width: 420px;
  border-spacing: 0;
`;

export const TableHead = styled.thead`

`;

export const TableBody = styled.tbody`

`;

export const TableRow = styled.tr`
  border-bottom: solid 1px #c6cccce6;
  background-color: #ffffff;
  :nth-child(even) {
    background-color: #b5b5c0;
  }
`;

export const TableHeadCell = styled.th`
  font-weight: 800;
  font-size: 20px;
  padding: 10px;
  width: 140px;
  margin-bottom: 5px;
  color: #ffffff;
  background-color: #7e7eed;
  border: 1px solid #ffffff;
`;

export const TableBodyCell = styled.td`
  padding: 10px;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  justify-content: center;
  border: 1px solid #b5b5c0;
`;