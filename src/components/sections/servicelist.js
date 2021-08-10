import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/images/nut.svg';

const ServiceListStyles = styled.section`
  width: 100%;
  padding: 2rem 0 4rem 0;
  .s-l {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h3 {
      margin-bottom: 1.5rem;
      color: var(--backgroundColour);
      font-weight: 700;
    }
    strong {
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 1rem;
      display: block;
      color: var(--backgroundColour);
    }
    > p {
      margin-bottom: 2rem;
    }
    &__wrapper {
      ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        list-style: none;
        li {
          padding: 0.75rem 0 0.75rem 2rem;
          line-height: 1.5;
          position: relative;
          &::before {
            position: absolute;
            top: 15px;
            left: 0;
            background-image: url(${Icon});
            background-repeat: no-repeat;
            content: '';
            width: 25px;
            height: 25px;
            @media only screen and (min-width: 1280px) {
              top: 18px;
            }
          }
        }
      }
    }
  }
`;
function ServiceList({ title, strong, p, data }) {
  const i = true;
  return (
    <ServiceListStyles>
      <div className="s-l">
        <h3>{title}</h3>
        <strong>{strong}</strong>
        <p>{p}</p>
        <div className="s-l__wrapper">
          <ul>
            {data.map((i) => (
              <li key={i.text}>{i.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </ServiceListStyles>
  );
}

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
