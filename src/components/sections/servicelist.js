import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../svgs/nut.svg';

const ServiceListStyles = styled.section`
  width: 100%;
  padding: 2rem 0 4rem 0;
  .s-l {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    > p {
      margin-bottom: 2rem;
    }
    &__wrapper {
      ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        list-style: none;
        li {
          padding: 0.75rem 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.5;
          svg {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
          }
        }
        @media only screen and (min-width: 768px) {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem;
        }
      }
    }
  }
`;
const ServiceList = ({ p, data }) => {
  const i = true;
  console.log(data);
  return (
    <ServiceListStyles>
      <div className="s-l">
        <p>{p}</p>
        <div className="s-l__wrapper">
          <ul>
            {data.map((i) => (
              <SingleListItem key={i.text} data={i} />
            ))}
          </ul>
        </div>
      </div>
    </ServiceListStyles>
  );
};

ServiceList.propTypes = {
  data: PropTypes.any,
  p: PropTypes.any,
};

export default ServiceList;

const SingleListItem = ({ data }) => {
  console.log(data);
  return (
    <li>
      <Icon />
      {data.text}
    </li>
  );
};

SingleListItem.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.any,
  }),
};
