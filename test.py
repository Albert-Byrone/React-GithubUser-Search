class Card():
    def __init__(self, suit, rank, available ＝ True):
        self.suit ＝ suit self.rank ＝ rank self.available ＝ available 
    def __str__(self): 
        return ″[ ″ + self.suit + ″ / ″ + self.rank + ″ ]″ 
    def get_value(self): if (self.rank ＝＝ ″2″ or self.rank ＝＝ ″3″ or self.rank ＝＝ ″4″ or self.rank ＝＝ ″5″ or self.rank ＝＝ ″6″ or self.rank ＝＝ ″7″ or self.rank ＝＝ ″8″ or self.rank ＝＝ ″9″ or self.rank ＝＝ ″10″): val ＝ int(self.rank) elif (self.rank ＝＝ ″Jack″ or self.rank ＝＝ ″Queen″ or self.rank ＝＝ ″King″): val ＝ 10 elif (self.rank ＝＝ ″Ace″): val ＝ 11 return val 
class Deck(): 
    def __init__(self): 
        self.cards ＝ [] 
        suits ＝ [″HEARTS″, ″CLUBS″, ″SPADES″, ″DIAMONDS″]
        ranks ＝ [″Ace″, ″2″, ″3″, ″4″, ″5″, ″6″, ″7″, ″8″, ″9″, ″10″, ″Jack″, ″Queen″, ″King″] 

        for suit in suits: for rank in ranks: self.cards.append(Card(suit, rank)) 

    def get_random_card(self): 
        while True: index ＝ random.randint(0,51) 
            if self.cards[index].available: 
                self.cards[index].available ＝ False 
                return self.cards[index] 
                deck ＝ Deck() 
                print(deck.get_random_card()) 
                print(deck.get_random_card())



import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const RepoCard = () => {
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
  

const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem; 
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'user';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default RepoCard;

