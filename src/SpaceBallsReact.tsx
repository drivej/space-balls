import SpaceBallsComponent from './component/SpaceBallsComponent.js';

export const SpaceBallsReact = ({ width = 500, height = 500 }: { width: number; height: number }) => {
  return <SpaceBallsComponent width={width} height={height} />;
};
