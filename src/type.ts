export type ColorType = { r: number; g: number; b: number;  } | string;

export interface TextEffectInterface {
  text?: string;
  className?: string;
	children?: React.ReactNode;
}