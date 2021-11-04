import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';


function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <h1 className="text-primary">Ola mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
