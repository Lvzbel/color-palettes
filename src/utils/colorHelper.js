import chroma from "chroma-js";

const getRange = hexColor => {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
};

const generateScale = (hexColor, numberOfColors) => {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
};

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = startedPalette => {
  const { paletteName, id, emoji, colors } = startedPalette;
  let newPalette = {
    paletteName,
    id,
    emoji,
    colors: {}
  };

  // Create a new array for each color level inside the colors object
  levels.forEach(level => (newPalette.colors[level] = []));

  colors.forEach(color => {
    let scale = generateScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  });

  return newPalette;
};

export { generatePalette };
