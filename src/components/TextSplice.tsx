import React, { FC } from 'react';
import { useSpliceEffect } from '../hooks/useSpliceEffect';
import { ColorType, TextEffectInterface } from '../type';

export interface TextSpliceProps extends TextEffectInterface {
	color: ColorType;
	offset: number;
	direction: number;
	stroke: number;
}

export const TextSplice: FC<TextSpliceProps> = (props) => {
	const { text = '', className, style } = props;
	const spliceStyle = useSpliceEffect(props);
	return (
		<p style={{ ...spliceStyle, ...style }} className={className}>
			{props.children ? props.children : text}
		</p>
	);
};
