import React, { FC } from 'react';
import { useGlitchEffect } from '../hooks/useGlitchEffect';
import { ColorType, TextEffectInterface } from '../type';

export interface TextGlitchInterface extends TextEffectInterface {
	color1: ColorType;
	color2: ColorType;
	direction: number;
	offset: number;
}

export const TextGlitch: FC<TextGlitchInterface> = (props) => {
	const { text = '', className, style } = props;
	const glitchStyle = useGlitchEffect(props);
	return (
		<p style={{ ...glitchStyle, ...style }} className={className}>
			{props.children ? props.children : text}
		</p>
	);
};
