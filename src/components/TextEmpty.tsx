import React, { FC } from 'react';
import { useEmptyEffect } from '../hooks/useEmptyEffect';
import { ColorType, TextEffectInterface } from '../type';

export interface TextEmptyProps extends TextEffectInterface {
	stroke: number;
	color: ColorType;
}

export const TextEmpty: FC<TextEmptyProps> = (props) => {
	const { text = '', className } = props;
	const style = useEmptyEffect(props);
	return (
		<p style={{ ...style }} className={className}>
			{props.children ? props.children : text}
		</p>
	);
};
