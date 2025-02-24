function digitToHex(d: number) {
  const hex = d.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
export function rgbToHex(r: number, g: number, b: number) {
  return "#" + digitToHex(r) + digitToHex(g) + digitToHex(b);
}

export function hexToRGB(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
  }
  if (!!result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }
  return { r: 0, g: 0, b: 0 };
}

export function getHEXNumber(hex: string) {
  const rgb = hexToRGB(hex);
  return rgb.r.toString() + rgb.g.toString() + rgb.b.toString();
}
