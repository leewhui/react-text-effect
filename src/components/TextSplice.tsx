import { FC } from 'react';
import { useSpliceEffect } from '../hooks/useSpliceEffect';
import { ColorType, TextEffectInterface } from '../type';

export interface TextSpliceProps extends TextEffectInterface {
	color: ColorType;
	offset: number;
	direction: number;
	stroke: number;
}

export const TextSplice: FC<TextSpliceProps> = (props) => {
	const { text, className } = props;
	const style = useSpliceEffect(props);
	return (
		<p style={{ ...style }} className={className}>
			{text}
		</p>
	);
};
