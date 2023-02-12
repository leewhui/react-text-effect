import React, { FC } from 'react';
import { useNeonEffect } from '../hooks/useNeonEffect';
import { ColorType, TextEffectInterface } from '../type';

export interface TextNeonProps extends TextEffectInterface {
	color: ColorType;
	strangth: number;
}

export const TextNeon: FC<TextNeonProps> = (props) => {
	const { text, className } = props;
	const style = useNeonEffect(props);
	return (
		<p style={{ ...style }} className={className}>
			{props.children ? props.children : text}
		</p>
	);
};
