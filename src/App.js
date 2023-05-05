import "./App.css";
import "./Card.css";
import Card from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";

import cardData from "./components/cardData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />
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
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
