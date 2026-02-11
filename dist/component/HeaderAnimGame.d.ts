export default class HeaderAnimGame {
    /**
     * @param {Object} opts
     * @param {HTMLCanvasElement|string|null} opts.canvas - canvas element or selector (optional; the original code appends CanvasSprite canvases)
     * @param {boolean} opts.createScore - whether to create the SCORE div
     */
    constructor({ canvas, createScore }?: {
        canvas: HTMLCanvasElement | string | null;
        createScore: boolean;
    });
    RAD: number;
    rand: (n1: any, n2: number | undefined, rnd: any) => any;
    interpolate: (n1: any, n2: any, p: any) => any;
    layers: any[];
    lines: any[];
    dots: any[];
    explosions: any[];
    animating: boolean;
    viewport: {
        width: number;
        height: number;
        scaleDelta: number;
        mouseFactor: number;
        acceleration: number;
        centerX: number;
        centerY: number;
    };
    mouseX: number;
    mouseY: number;
    mouseIsDown: boolean;
    centerOffsetX: number;
    centerOffsetY: number;
    pilot: {
        offsetX: number;
        offsetY: number;
        x: number;
        y: number;
    };
    score: {
        level: number;
        kills: number;
        points: number;
    };
    scoreEl: HTMLDivElement | null;
    createScore: boolean;
    canvas: Element | null;
    flavors: {
        purple_blue: {
            lines: {
                r: number;
                g: number;
                b: number;
                a: number;
            }[];
            comets: {
                r: number;
                g: number;
                b: number;
            };
        };
        red: {
            lines: {
                r: number;
                g: number;
                b: number;
            }[];
            comets: {
                r: number;
                g: number;
                b: number;
            };
        };
    };
    _handleMouse: (evt: any) => void;
    lineColor: RGBA;
    dotColor: RGBA;
    dotSprite: CanvasSprite;
    targetColor: RGBA;
    targetSprite: CanvasSprite;
    initGame(): void;
    destroy(): void;
    mountLayers(): void;
    setupLayers(): void;
    updateScore(): void;
    addDot(): void;
    renderPosition(sprite: any): void;
    Point(): {
        _x: number;
        _y: number;
        x: number;
        y: number;
        offset: {
            x: number;
            y: number;
        };
        rotations: never[];
    };
    Line(): {
        color: RGBA;
        alpha: number;
        points: never[];
    };
    randomLineRotation(): {
        radius: {
            x: any;
            y: any;
        };
        angle: {
            x: any;
            y: any;
        };
        speed: {
            x: number;
            y: number;
        };
    };
    makeLine(): void;
    drawLine(line: any, ctx: any): void;
    render(): void;
    explosion(x: any, y: any, size: any): void;
    prerender(): void;
    resize(width: any, height: any): void;
    handleResize(instant: any, width?: number, height?: number): void;
    _resizeTimeout: NodeJS.Timeout | undefined;
    startAnim(): void;
    stopAnim(): void;
    setFlavor(name: any): void;
    fadeLines(a: any): void;
    fireWeapon(): void;
    handleMouse(evt: any): void;
}
import { RGBA } from './RGBA.js';
import { CanvasSprite } from './CanvasSprite.js';
//# sourceMappingURL=HeaderAnimGame.d.ts.map