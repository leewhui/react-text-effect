import React, { FC } from 'react';
import { useNeonEffect } from '../hooks/useNeonEffect';
import { ColorType, TextEffectInterface } from '../type';

export interface TextNeonProps extends TextEffectInterface {
	color: ColorType;
	strangth: number;
}

export const TextNeon: FC<TextNeonProps> = (props) => {
	const { text = '', className, style } = props;
	const neonStyle = useNeonEffect(props);
	return (
		<p style={{ ...neonStyle, ...style }} className={className}>
			{props.children ? props.children : text}
		</p>
	);
};
