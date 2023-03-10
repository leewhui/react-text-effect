import tinycolor from "tinycolor2";
import { TextSpliceProps } from "../components/TextSplice";
import { limitNumberInRange } from "../utils";

export const useSpliceEffect = (effect: TextSpliceProps) => {
  const { direction, stroke, color } = effect;
  const rete = limitNumberInRange(0, 100, stroke) / 100;
  const hex = tinycolor(color).toHex();
  const str = tinycolor(hex).lighten(15).toString();
  const { r, g, b } = tinycolor(str).toRgb();

  const offset = effect.offset / 10;

  const calculateOffset = () => {
    const radius = direction * (Math.PI / 180);
    const sin = Math.sin(radius);
    const cos = Math.cos(radius);

    const offsetX = cos * offset;
    const offsetY = sin * offset;
    return { offsetX, offsetY }
  }

  const { offsetX: x, offsetY: y } = calculateOffset();

  return {
    textShadow: `rgb(${r}, ${g}, ${b}) ${x}px ${y}px 0px`,
    WebkitTextStroke: `${0.5 + rete * 5}px`,
    WebkitTextFillColor: 'transparent',
  };
}
