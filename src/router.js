import Home from './routes/Home/Home';
import HistoricalTrends from './routes/HistoricalTrends/HistoricalTrends';

export default [
  { path: '/', component: Home },
  { path: '/historical', component: HistoricalTrends }
]