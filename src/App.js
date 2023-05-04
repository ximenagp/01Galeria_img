import './App.css';
import './Card.css';
import Card from './components/Cards';
import cardData from './components/cardData';
  function App() {
    return (
      <div>
        
        {cardData.map((card) => {
          return (
            <Card
              key={card.id}
              imageUrl={card.url}
              title={card.title}
              description={card.description}
            />
          );
        })
        }

        {/* Repite Card con otras imágenes */}
       
      </div>
    );
  }

export default App;
