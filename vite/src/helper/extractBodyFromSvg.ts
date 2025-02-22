export function extractBodyFromSvg(dataUri: string): string {
  // Remove the prefix "data:image/svg+xml," and decode the URI
  const svgString = decodeURIComponent(dataUri.split(",")[1]);

  // Create a temporary DOM parser
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = svgString;

  // Find the <svg> element and extract its innerHTML (everything inside the <svg> tags)
  const svgElement = tempDiv.querySelector("svg");
  if (svgElement) {
    return svgElement.innerHTML; // Return only the inner contents of the SVG
  }

  throw new Error("Invalid SVG: No <svg> element found.");
};
