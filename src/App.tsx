import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';
import { ContentSection } from './components/ContentSection';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Connect } from './pages/Connect';
import { calculateEstimates } from './utils/calculations';

function Calculator() {
  const [successes, setSuccesses] = React.useState<number>(0);
  const [trials, setTrials] = React.useState<number>(0);
  const [confidence, setConfidence] = React.useState<number>(95);
  const [results, setResults] = React.useState({
    pointEstimate: 0,
    mle: 0,
    laplace: 0,
    jeffrey: 0,
    wilson: 0,
    zScore: 0
  });

  React.useEffect(() => {
    const newResults = calculateEstimates(successes, trials, confidence);
    setResults(newResults);
  }, [successes, trials, confidence]);

  const handleReset = () => {
    setSuccesses(0);
    setTrials(0);
    setConfidence(95);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Point Estimate Calculator</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Advanced statistical analysis tool for calculating point estimates with multiple estimation methods.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <InputSection
                successes={successes}
                trials={trials}
                confidence={confidence}
                onSuccessesChange={setSuccesses}
                onTrialsChange={setTrials}
                onConfidenceChange={setConfidence}
                zScore={results.zScore}
              />
              <ResultsSection results={results} />
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleReset}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                Reset Calculator
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContentSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </Router>
  );
}