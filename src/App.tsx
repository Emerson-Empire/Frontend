
import { useState } from "react";
import IntakeForm from "./components/IntakeForm";
import Dashboard from "./components/Dashboard";
import { ClientProvider } from "./context/ClientContext";

type Page = "dashboard" | "form";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  return (
    <ClientProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard MVP</h1>
              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentPage("dashboard")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === "dashboard"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setCurrentPage("form")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === "form"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Intake Form
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main>
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "form" && <IntakeForm />}
        </main>
      </div>
    </ClientProvider>
  );
}

export default App;