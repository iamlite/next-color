import { Color } from '../../color';
import { HSL } from '../../types';

/**
 * Generates a tones color harmony.
 * @param {Color} color - The base color.
 * @param {number} [count=5] - The number of tones to generate (default: 5).
 * @returns {Color[]} An array containing the base color and additional tones (mixed with gray).
 */
export function tones(color: Color, count: number = 5): Color[] {
    const hsl = color.toHsl();
    const step = hsl.s / (count - 1);

    return Array.from({ length: count }, (_, i) => {
        const newColor: HSL = { ...hsl, s: Math.max(0, hsl.s - i * step) };
        return new Color(newColor);
    });
}
