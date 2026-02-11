import { useEffect, useRef } from 'react';
import HeaderAnimGame from './HeaderAnimGame.js';

export const SpaceBallsComponent = ({ width = 500, height = 500 }: { width: number; height: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const game = useRef<HeaderAnimGame>(null!);

  useEffect(() => {
    if (canvasRef.current) {
      try {
        game.current = new HeaderAnimGame({ canvas: canvasRef.current, createScore: false });
        game.current.initGame();
        game.current.resize(width, height);
        return () => {
          game.current.destroy();
        };
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (game.current) {
      game.current.resize(width, height);
    }
  }, [width, height]);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
};

export default SpaceBallsComponent;
