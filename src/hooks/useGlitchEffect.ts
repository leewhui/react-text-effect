import { TextGlitchInterface } from '../components/TextGlitch';
import { limitNumberInRange } from '../utils';

export const useGlitchEffect = (effect: TextGlitchInterface) => {
	const { direction, color1, color2 } = effect;
	const offset = effect.offset / 18;

	const calculateOffset = () => {
		const radius = limitNumberInRange(-180, 180, direction) * (Math.PI / 180);
		const sin = Math.sin(radius);
		const cos = Math.cos(radius);

		const offsetX = cos * offset;
		const offsetY = sin * offset;
		return { offsetX, offsetY };
	};

	const { offsetX: x, offsetY: y } = calculateOffset();

	return {
		textShadow: `${color1} ${-x}px ${-y}px 0px, ${color2} ${x}px ${y}px 0px`
	};
};
