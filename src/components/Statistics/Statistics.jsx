import PropTypes from 'prop-types';
import {
  StatisticsBlock,
  Title,
  StatList,
  Stat,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBlock>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => {
          return (
            <Stat
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Stat>
          );
        })}
      </StatList>
    </StatisticsBlock>
    // <section className="statistics">
    //   <h2 className="title">{title}</h2>
    //   <ul className="stat-list">
    //     {stats.map(stat => {
    //       return (
    //         <li key={stat.id} className="item">
    //           <span className="label">{stat.label}</span>
    //           <span className="percentage">{stat.percentage}%</span>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};