export function limitNumberInRange(min: number, max: number, val: number): number {
	if (val > max) return max;
	else if (val < min) return min;
	return val;
}
