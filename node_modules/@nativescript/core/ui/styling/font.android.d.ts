import { Font as FontBase, FontWeightType } from './font-common';
export * from './font-common';
export declare class Font extends FontBase {
    static default: Font;
    private _typeface;
    constructor(family: string, size: number, style: 'normal' | 'italic', weight: FontWeightType);
    withFontFamily(family: string): Font;
    withFontStyle(style: 'normal' | 'italic'): Font;
    withFontWeight(weight: FontWeightType): Font;
    withFontSize(size: number): Font;
    withFontScale(scale: number): Font;
    getAndroidTypeface(): android.graphics.Typeface;
    getUIFont(defaultFont: UIFont): UIFont;
}
