function get(src, path) {
  return path.split('.').reduce((o, k) => o && o[k], src);
}
