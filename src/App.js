import './App.css';
import Search from "./components/Search";
import CurrentForecastCard from "./components/CurrentForecastCard";
import CurrentDetailsCard from "./components/CurrentDetailsCard";
import WeeklyForecastCard from "./components/WeeklyForecastCard";
import Footer from "./components/Footer";

const forecast = [
  { day: "Wed", temp: "75", icon: "bi-cloud-lightning" },
  { day: "Thurs", temp: "67", icon: "bi-brightness-alt-high" },
  { day: "Fri", temp: "78", icon: "bi-cloud-drizzle" },
  { day: "Sat", temp: "74", icon: "bi-lightning" },
  { day: "Sun", temp: "80", icon: "bi-cloud-sun" },
];

function App() {
  return (
      <div className="container">
        <div className="animate-up delay-1">
          <Search />
        </div>

        <div className="animate-up delay-2">
          <CurrentForecastCard
              date="Dec 24, 2024, 1:34PM"
              temperature="45"
              city="San Diego, CA"
              icon="bi-brightness-high"
          />
        </div>

        <div className="animate-up delay-3">
          <CurrentDetailsCard
              humidity={65}
              wind={12}
              description="Partly Cloudy"
              visibility={10}
              high={72}
              low={58}
          />
        </div>

        <div className="animate-up delay-4">
          <WeeklyForecastCard forecast={forecast} />
        </div>

        <div className="animate-up delay-5">
          <Footer />
        </div>
      </div>
  );
}

export default App;