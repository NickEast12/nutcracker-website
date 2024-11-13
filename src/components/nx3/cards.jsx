import React from 'react'
import styled from 'styled-components';
import Animate from './animate';



const CardData = [
    {
      title: `Nutcracker attract`,
      text: `<p><strong>Make a strong first impression.</strong></p>
                  <p>Your journey to market share begins with making sure your brand stands out. Through strategic campaigns, creative content, and targeted outreach, we  attract the right audience  to your business and make sure they remember you.</p>`,
      list: [
        "Integrated strategies across social, email, and web to drive visibility.",
        "Targeted campaigns that put your brand in front of the right people.",
        "Integrated strategies across social, email, and web to drive visibility.",
      ],
    },
    {
      title: `Nutcracker build`,
      text: `<p><strong>Strengthen engagement and keep the conversation going.</strong></p>
                  <p>Attracting attention is just the first step. To build market share, you need to turn interest into engagement. Our team employs  SEO, PPC, and social advertising  to keep your brand top of mind and engage your audience at every stage of their journey.</p>`,
      list: [
        "SEO strategies that ensure your brand appears when customers search for solutions.",
        "PPC and social advertising that target and retarget interested leads.",
        "Multi-channel engagement strategies to nurture and convert.",
      ],
    },
    {
      title: `Nutcracker strategy`,
      text: `<p><strong>Drive results that matter. </strong></p>
  <p>Ultimately, our goal is to turn leads into long-term customers. Through  data-driven marketing, sales funnel optimisation, and lead nurturing, we create a seamless path to conversion, ensuring you see  real, measurable results.</p>`,
      list: [
        "Sales funnel strategy that drives customers from awareness to action.",
        "Data-driven insights to optimise campaigns for maximum impact.",
        "Lead nurturing that builds trust and loyalty, building a sustainable pipeline and driving repeat business.",
      ],
    },
  ];

const CardStyles = styled.section`
            width: 91.888%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 4rem;
  @media only screen and (min-width: 992px) {
    margin-top: 2rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    @media only screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }
    .card {
      max-width: 350px;
      margin: 0 auto;
      opacity: 0;
      opacity: 0;
    transform: translateY(2rem) scale(0.9);
      .top {
        position: relative;
        z-index: 10;
        text-align: center;
        .svg {
          svg {
            width: auto;
            height: 40px;
          }
        }
        p {
          font-weight: 700;
          font-size: 2.25rem;
          color: var(--backgroundColour);
          line-height: 2rem;
          font-weight: 900;
          margin: 1rem 0;
        }
        h4 {
          font-weight: 700;
          font-size: 1.75rem;
        }
      }
      &--inner {
        position: relative;
        margin-top: 1.25rem;
        border-radius: 10px;
        padding: 3rem 2rem 2rem 2rem;
        color: #273d44;
        @media only screen and (min-width: 992px) {
          min-height: 550px;
        }
        span {
          background: white;
          width: 50px;
          height: 50px;
          position: absolute;
          left: calc(50% - 25px);
          top: -27px;
          transform: rotate(-45deg);
          border-radius: 4px;
        }
        & > p {
          padding-bottom: 1rem;
        }
        p {
          font-size: 16px;
          font-weight: 500;
        }
        strong {
          font-weight: 800;
          padding: 0;
          /* margin-bottom: 2px; */
          display: block;
          margin-top: 10px;
        }
        ul {
          margin-top: 1.2rem;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          li {
            font-size: 16px;
            font-weight: 500;
          }
        }
      }
      .background-1 {
        background: var(--mainColour);
      }
      .background-2 {
        background: rgb(43, 165, 162);
        background: linear-gradient(
          55deg,
          rgba(43, 165, 162, 1) 0%,
          rgba(43, 165, 162, 1) 49%,
          #fbe100 100%
        );
      }
      .background-3 {
        background: #fbe100;
      }
    }
  }
  
    
`

export default function Cards() {
  return (
    <CardStyles >
        <Animate>
    <div className="wrapper cards">
      {CardData.map((card, i) => {
        return (
          <div key={i} className="card">
            <div className="top">
              <span className="svg">
                {i === 0 && <NIcon />}
                {i === 1 && <XIcon />}
                {i === 2 && <ThreeIcon />}
              </span>
              <p>=</p>
              <h4>{card.title}</h4>
            </div>
            <div className={`card--inner background-${i + 1} `}>
              <span></span>
              <div>
                <div dangerouslySetInnerHTML={{ __html: card.text }} />
                <ul>
                  {card.list.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </Animate>
  </CardStyles>
  )
}



const NIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 105.77 111.63"
      {...props}
    >
      <path
        d="M0 46.02a45.363 45.363 0 0 1 4.01-19.27 42.069 42.069 0 0 1 11.02-14.51A49.241 49.241 0 0 1 31.7 3.13 68.23 68.23 0 0 1 52.83 0c7.2-.07 14.36.98 21.23 3.13 6.14 1.91 11.84 5 16.78 9.11 4.71 3.95 8.48 8.91 11.02 14.51 2.68 6.1 4.02 12.71 3.9 19.38v65.5H81.07V52.3c0-9.83-2.38-17.29-7.14-22.42-4.76-5.14-11.77-7.69-21.01-7.69s-16.43 2.58-21.12 7.69C27.1 35 24.77 42.47 24.77 52.3v59.33H.07L0 46.02Z"
        style={{
          fill: "#29a5a2",
        }}
      />
    </svg>
  );
  const XIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="uuid-b9b668ba-c896-4aa5-a283-c6e6d04579ff"
      data-name="Layer 1"
      viewBox="0 0 125.99 104.51"
      {...props}
    >
      <defs>
        <linearGradient
          id="uuid-22538a47-0769-45f6-a6af-040ba309c84d"
          x1={-7.65}
          x2={130.14}
          y1={77.28}
          y2={27.13}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#29a5a2" />
          <stop offset={0.4} stopColor="#2ba5a1" />
          <stop offset={0.56} stopColor="#31a6a0" />
          <stop offset={0.6} stopColor="#3ba997" />
          <stop offset={0.68} stopColor="#56b181" />
          <stop offset={0.78} stopColor="#83be5e" />
          <stop offset={0.9} stopColor="#c1d02d" />
          <stop offset={1} stopColor="#fae100" />
        </linearGradient>
        <style>
          {".uuid-741e40d5-64a4-4c36-b19a-4340af75e696{fill:#29a5a2}"}
        </style>
      </defs>
      <path
        d="M122.97 83.51c-3.32-3.22-9.42-4.35-13.81-2.2-4.47 2.19-6.89 7.21-12.01 7.92-4.68.66-8.68-2.73-11.4-5.98-6.62-7.92-10.62-16.76-14.97-25.65-2.02-4.13-3.91-8.36-5.83-12.58v17.41c1.89 4.68 3.72 9.31 5.68 13.72.82 1.66 2.02 4.15 2.68 5.33 1.2 2.16 2.5 4.28 3.95 6.33 2.79 3.92 6.15 7.6 10.36 10.54 7.14 5 17.17 7.67 26.03 5.24 4.83-1.33 9.14-4.23 11.16-8.12 2.02-3.89 1.48-8.75-1.84-11.97ZM29.02 2.49C23.12-.1 15.84-.93 9.71 1.27 3.58 3.46-.9 9.06.15 14.55c1.05 5.49 8.47 9.79 14.75 7.92 2.69-.8 4.84-2.5 7.17-3.88s5.21-2.5 7.98-1.91c1.82.39 3.3 1.46 4.65 2.54 13.49 10.8 20.21 26.53 26.34 41.71V43.52c-4.73-10.4-9.7-20.8-17.51-29.77-3.92-4.5-8.61-8.68-14.52-11.27Z"
        className="uuid-741e40d5-64a4-4c36-b19a-4340af75e696"
      />
      <path
        d="M1.6 102.67 85.71 6.59c2.69-3.07 6.58-4.84 10.66-4.84h24.53L36.82 97.81a14.203 14.203 0 0 1-10.65 4.84l-24.57.03Z"
        style={{
          fill: "url(#uuid-22538a47-0769-45f6-a6af-040ba309c84d)",
        }}
      />
    </svg>
  );
  
  const ThreeIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 37.94 52.76"
      {...props}
    >
      <path
        d="M35.54 45.49c-1.58 2.26-3.79 4.04-6.61 5.33-2.82 1.29-6.14 1.94-9.93 1.94-2.19 0-4.48-.22-6.87-.66-2.39-.44-4.64-1.03-6.76-1.79-2.12-.75-3.91-1.59-5.37-2.52l3.65-6.43c1.85 1.12 4.07 2.04 6.65 2.78 2.58.73 5.14 1.09 7.67 1.09 3.46 0 6.17-.7 8.14-2.12 1.97-1.41 2.96-3.38 2.96-5.92s-.97-4.28-2.92-5.55-4.77-1.9-8.47-1.9h-4.6c-.29-.44-.55-1.05-.77-1.83-.22-.78-.33-1.51-.33-2.19 0-2.53 1.53-3.8 4.6-3.8h1.46c3.21 0 5.73-.67 7.56-2.01s2.74-3.13 2.74-5.37-.94-4.14-2.81-5.41-4.25-1.9-7.12-1.9-5.59.61-7.85 1.83-3.76 2.68-4.49 4.38c-1.27-.19-2.34-.7-3.21-1.53-.88-.83-1.31-1.85-1.31-3.07 0-.58.12-1.21.37-1.86.24-.66.66-1.3 1.24-1.94C4.57 3.48 6.7 2.25 9.55 1.35 12.4.45 15.45 0 18.72 0c3.75 0 7 .58 9.75 1.75s4.87 2.76 6.36 4.78c1.48 2.02 2.23 4.37 2.23 7.05s-.73 4.98-2.19 7.05-3.48 3.71-6.06 4.93c2.87.93 5.11 2.42 6.72 4.49 1.61 2.07 2.41 4.59 2.41 7.56s-.79 5.59-2.37 7.85l-.03.03Z"
        style={{
          fill: "#fbe100",
        }}
      />
    </svg>
  );
  