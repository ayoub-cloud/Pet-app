import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewPet from './components/NewPet'
import ListPets from './components/ListPets';
import EditPet from './components/EditPet';
import ShowPet from './components/ShowPet';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ListPets />} />
        <Route path="/pets/new" element={<NewPet />} />
        <Route path="/pets/:id" element={<ShowPet />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
      </Routes>



    </>
  );
}

export default App;
