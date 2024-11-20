import React from 'react';
import { Calculator, Info, Percent, Hash, CheckCircle } from 'lucide-react';

interface InputSectionProps {
  successes: number;
  trials: number;
  confidence: number;
  onSuccessesChange: (value: number) => void;
  onTrialsChange: (value: number) => void;
  onConfidenceChange: (value: number) => void;
  zScore: number;
}

export function InputSection({
  successes,
  trials,
  confidence,
  onSuccessesChange,
  onTrialsChange,
  onConfidenceChange,
  zScore,
}: InputSectionProps) {
  const confidenceLevels = [
    70, 75, 80, 85, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99.5, 99.9, 99.99
  ];

  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: number) => void
  ) => {
    const value = e.target.value;
    
    if (value === '') {
      onChange(0);
      return;
    }
    
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      onChange(Math.floor(num));
    }
  };

  const formatNumber = (num: number) => {
    return isNaN(num) ? '0' : num.toFixed(4);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Calculator className="h-5 w-5 text-purple-600" />
        <h2 className="text-xl font-semibold text-gray-800">Statistical Inputs</h2>
      </div>
      
      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-purple-600" />
            <label className="block text-sm font-medium text-gray-700">
              Number of Successes
            </label>
          </div>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={successes || ''}
            onChange={(e) => handleNumberInput(e, onSuccessesChange)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-500"
            placeholder="Enter number of successes"
          />
        </div>

        <div className="relative">
          <div className="flex items-center space-x-2 mb-2">
            <Hash className="h-4 w-4 text-purple-600" />
            <label className="block text-sm font-medium text-gray-700">
              Number of Trials
            </label>
          </div>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={trials || ''}
            onChange={(e) => handleNumberInput(e, onTrialsChange)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900 placeholder-gray-500"
            placeholder="Enter total number of trials"
          />
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Percent className="h-4 w-4 text-purple-600" />
              <label className="block text-sm font-medium text-gray-700">
                Confidence Level
              </label>
            </div>
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
              <div className="hidden group-hover:block absolute right-0 mt-2 p-3 bg-gray-800 text-white text-xs rounded-lg shadow-lg w-64 z-10">
                <p className="font-medium mb-1">Common confidence levels:</p>
                <ul className="space-y-1">
                  <li>• 90% - Basic confidence</li>
                  <li>• 95% - Standard research level</li>
                  <li>• 99% - High precision required</li>
                </ul>
              </div>
            </div>
          </div>
          <select
            value={confidence}
            onChange={(e) => onConfidenceChange(parseFloat(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50 text-gray-900"
          >
            {confidenceLevels.map((level) => (
              <option key={level} value={level}>
                {level}%
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Z Score
            </label>
          </div>
          <div className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900">
            {formatNumber(zScore)}
          </div>
        </div>
      </div>
    </div>
  );
}