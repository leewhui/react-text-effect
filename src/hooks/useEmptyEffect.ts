import tinycolor from 'tinycolor2';
import { TextEmptyProps } from '../components/TextEmpty';
import { limitNumberInRange } from '../utils';

export const useEmptyEffect = (effect: TextEmptyProps) => {
	const { stroke, color } = effect;
	const rete = limitNumberInRange(0, 100, stroke) / 100;
	const { r, g, b } = tinycolor(color).toRgb();

	return {
		WebkitTextStroke: `${0.5 + rete * 5}px rgb(${r}, ${g}, ${b})`,
		WebkitTextFillColor: 'transparent'
	};
};
