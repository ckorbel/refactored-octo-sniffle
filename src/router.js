import Home from "./routes/Home/Home";
import HistoricalTrends from "./routes/HistoricalTrends/HistoricalTrends";
import Teams from "./routes/Teams/Teams";
import Players from "./routes/Players/Players";
import Stats from "./routes/Stats/Stats";
import Admin from "./routes/Admin/Admin";

export default [
  { path: "/", component: Home },
  { path: "/historical", component: HistoricalTrends },
  { path: "/teams", component: Teams },
  { path: "/players", component: Players },
  { path: "/stats", component: Stats },
  { path: "/admin", component: Admin }
];
