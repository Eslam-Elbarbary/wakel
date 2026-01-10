import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-white w-full min-h-screen">
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
