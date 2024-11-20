export function calculateEstimates(successes: number, trials: number, confidence: number) {
  if (trials === 0) {
    return {
      pointEstimate: 0,
      mle: 0,
      laplace: 0,
      jeffrey: 0,
      wilson: 0,
      zScore: 0
    };
  }

  const p = successes / trials;
  const n = trials;
  
  // Calculate z-score based on confidence level percentage
  const getZScore = (conf: number) => {
    // Convert percentage to decimal
    const alpha = (100 - conf) / 100;
    // Common z-scores mapping
    const zScores: { [key: number]: number } = {
      90: 1.645,
      95: 1.96,
      99: 2.576
    };
    
    if (conf <= 0) return 0;
    
    // For exact matches
    if (zScores[conf]) return zScores[conf];
    
    // For other values, use linear interpolation between closest values
    const confidenceLevels = Object.keys(zScores).map(Number);
    const lower = Math.max(...confidenceLevels.filter(c => c <= conf));
    const upper = Math.min(...confidenceLevels.filter(c => c >= conf));
    
    if (lower === upper) return zScores[lower];
    
    const ratio = (conf - lower) / (upper - lower);
    return zScores[lower] + ratio * (zScores[upper] - zScores[lower]);
  };

  const z = getZScore(confidence);
  
  // Wilson score interval (center point)
  const numerator = p + (z * z) / (2 * n);
  const denominator = 1 + (z * z) / n;
  const wilson = numerator / denominator;

  return {
    pointEstimate: p,
    mle: p,
    laplace: (successes + 1) / (trials + 2),
    jeffrey: (successes + 0.5) / (trials + 1),
    wilson: wilson,
    zScore: z
  };
}