import './App.css'
import Hero from './Hero';
import Nav from './Nav'
import Card from './Card';
import data from './data';
function App() {
   const cardElements = data.map(card=>{
    return (
      <Card 
      key={card.id}
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}/>
    )
   });
  return (
    <>
    <Nav />
    <Hero />
<section>    {cardElements}
</section>
    </>
  )
}

export default App
