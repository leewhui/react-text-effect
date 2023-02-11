import tinycolor from 'tinycolor2';
import { TextNeonProps } from '../components/TextNeon';

export const useNeonEffect = (effect: TextNeonProps) => {
	const color = effect.color;
	const { r, g, b } = tinycolor(color).toRgb();
	const hsv = tinycolor(color).toHsv();
	const rete = effect.strangth / 100;
	const rgb = [ r, g, b ];

	const calculateFontColor = () => {
		const diffS = -hsv.s;
		const diffV = 1 - hsv.v;
		const s = diffS * rete;
		const v = diffV * rete;
		return tinycolor(`hsv(${hsv.h}, ${hsv.s + s}, ${hsv.v + v})`).toRgb();
	};

	const fontColor = calculateFontColor();

	return {
		filter: `drop-shadow(rgba(${rgb}, 0.95) 0px 0px ${1 + 1 * rete}px)
    drop-shadow(rgba(${rgb}, 0.75) 0px 0px ${7 + 4 * rete}px)
    drop-shadow(rgba(${rgb}, 0.44) 0px 0px ${10 + 7 * rete}px)`,

		color: `rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b})`
	};
};
