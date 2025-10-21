function getAcceleration(data) {
  const EPS = 1e-9;

  function getNum(...keys) {
    for (const k of keys) {
      if (k in data) {
        const v = data[k];
        if (typeof v === 'number' && Number.isFinite(v)) return v;
      }
    }
    return undefined;
  }

  const F = getNum('f', 'F', 'force');
  const m = getNum('m', 'M', 'mass');
  const deltaV = getNum('Δv', 'ΔV', 'deltaV', 'delta_v', 'dv', 'dV');
  const deltaT = getNum('Δt', 'ΔT', 'deltaT', 'delta_t', 'dt', 'dT');
  const d = getNum('d', 'D', 'distance');
  const t = getNum('t', 'T', 'time');

  const results = [];

  if (typeof F === 'number' && typeof m === 'number' && m !== 0) {
    results.push(F / m);
  }

  if (typeof deltaV === 'number' && typeof deltaT === 'number' && deltaT !== 0) {
    results.push(deltaV / deltaT);
  }

  if (typeof d === 'number' && typeof t === 'number' && t !== 0) {
    results.push((2 * d) / (t * t));
  }

  if (results.length === 0) return "impossible";

  const first = results[0];
  for (let i = 1; i < results.length; i++) {
    if (Math.abs(results[i] - first) > EPS) return "impossible";
  }

  return first;
}
