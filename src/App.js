import './App.css';
import Pokemon from './components/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Pokemon />
      </div>
    </div>
  );
}
