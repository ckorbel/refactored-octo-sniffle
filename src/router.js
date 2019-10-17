import Home from "./routes/Home/Home";
import HistoricalTrends from "./routes/HistoricalTrends/HistoricalTrends";
import NBA from "./routes/NBA/NBA";
import NFL from "./routes/NFL/NFL";
import Stats from "./routes/Stats/Stats";
import Admin from "./routes/Admin/Admin";

export default [
  { path: "/", component: Home },
  { path: "/historical", component: HistoricalTrends },
  { path: "/nba", component: NBA },
  { path: "/nfl", component: NFL },
  { path: "/stats", component: Stats },
  { path: "/admin", component: Admin }
];
