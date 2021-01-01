import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const RepoCard = () => {
  const { repos } = React.useContext(GithubContext);
  
  
  // { Array(repos).map(repo =>{
  //   return <Item  key={repo.id} repo={repo}/>
  // })}
  return <section className="section">
    <Wrapper className="section-center">
        { repos.map((repo)=>{
          return <Item key={repo.id} {...repo}/>
        })}
    </Wrapper>
  </section>;
};

 const Item = ({name, description}) =>{
  // const { name,description }= repo;
  const classes = useStyles();

   return  <Card className={classes.root}>
      <CardContent>
   <h4 className={classes.title}>{name}</h4>
   <Typography variant="body2" component="p">
     {description ? description : "No descritpion" }
   </Typography>
 </CardContent>
   </Card>
 }
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    object-fit: contain;

  }
  .links{
    position:absolute;
  }
`;

export default RepoCard;
