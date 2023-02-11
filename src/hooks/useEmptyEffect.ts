import tinycolor from "tinycolor2";
import { TextEmptyProps } from "../components/TextEmpty";

export const useEmptyEffect = (effect: TextEmptyProps) => {
  const { stroke, color } = effect;
  const rete = stroke / 100;
  const { r, g, b } = tinycolor(color).toRgb();

  return {
    WebkitTextStroke: `${0.5 + rete * 5}px rgb(${r}, ${g}, ${b})`,
    WebkitTextFillColor: 'transparent',
  }
}
