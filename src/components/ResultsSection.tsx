import React from 'react';
import { TrendingUp, Target, Gauge, Ruler, Compass } from 'lucide-react';

interface ResultsSectionProps {
  results: {
    pointEstimate: number;
    mle: number;
    laplace: number;
    jeffrey: number;
    wilson: number;
    zScore: number;
  };
}

export function ResultsSection({ results }: ResultsSectionProps) {
  const formatNumber = (num: number) => {
    return isNaN(num) ? '0' : num.toFixed(4);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-800">Statistical Results</h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-6 bg-gradient-to-r from-purple-100 via-purple-50 to-blue-50 rounded-lg border border-purple-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
          <div className="relative flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-6 w-6 text-purple-600" />
              <label className="block text-base font-medium text-gray-700">
                Best Point Estimate
              </label>
            </div>
            <div className="text-5xl font-bold text-purple-700">
              {formatNumber(results.pointEstimate)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Gauge className="h-4 w-4 text-purple-600" />
              <label className="block text-sm font-medium text-gray-700">
                Maximum Likelihood (MLE)
              </label>
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {formatNumber(results.mle)}
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Ruler className="h-4 w-4 text-purple-600" />
              <label className="block text-sm font-medium text-gray-700">
                Laplace Estimation
              </label>
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {formatNumber(results.laplace)}
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Target className="h-4 w-4 text-purple-600" />
              <label className="block text-sm font-medium text-gray-700">
                Jeffrey Estimation
              </label>
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {formatNumber(results.jeffrey)}
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Compass className="h-4 w-4 text-purple-600" />
              <label className="block text-sm font-medium text-gray-700">
                Wilson Estimation
              </label>
            </div>
            <div className="text-xl font-semibold text-gray-800">
              {formatNumber(results.wilson)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}