export function orderByProps(obj, order) {
    const ordered = [];
    const unordered = [];
  
    for (const key in obj) {
      if (order.includes(key)) {
        ordered.push({ key, value: obj[key] });
      } else {
        unordered.push({ key, value: obj[key] });
      }
    }
  
    unordered.sort((a, b) => (a.key > b.key ? 1 : -1));
  
    return [...ordered.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key)), ...unordered];
  }
  