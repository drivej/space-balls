import { useEffect, useRef } from 'react';
import HeaderAnimGame from './HeaderAnimGame.js';

export const SpaceBallsComponent = ({ width = 500, height = 500 }: { width: number; height: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const game = useRef<HeaderAnimGame>(null!);

  useEffect(() => {
    if (containerRef.current) {
      try {
        game.current = new HeaderAnimGame({ container: containerRef.current, createScore: true });
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

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, width, height }} />;
};

export default SpaceBallsComponent;
