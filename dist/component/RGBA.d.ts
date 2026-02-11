export class RGBA {
    constructor(config: any);
    on: (eventType: any, callback: any) => void;
    off: (eventType: any, callback: any) => void;
    change: (callback: any) => void;
    getValue: (format: any) => {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    setValue: (delta: any, options: any) => this;
    toRGBA: () => string;
    toRGB: () => string;
    toArray: () => number[];
    interpolate: (delta: any, p: any) => this;
    randomize: () => void;
}
//# sourceMappingURL=RGBA.d.ts.map