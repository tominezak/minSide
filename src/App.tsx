import "./App.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-6 py-8 flex flex-col md:flex-row gap-6">
        <section className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
          <p>This is the content for section 1.</p>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
          <p>This is the content for section 2.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
