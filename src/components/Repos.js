import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
// import RepoCard from './RepoCard'

// import { GithubContext } from '../context/context';
// import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = React.useContext(GithubContext);


  return <section className="section">
  <Wrapper className="section-center">
  {/* use spread operator to pass the object props ... */}
  { repos.map((repo)=>{
      const{ name} = repo;
      return <Item  key={repo.id} repo={repo}/>
      })}
  </Wrapper>
</section>;
};

const Item = ({repo}) =>{
  return <article className="item">
  <div>
    <h3>{ repo.name}</h3>
    <p>{repo.description}</p>
  </div>
</article>
} 


const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
