
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar with Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;