import MyComponent from './component/MyComponent.js';

export const MyComponentReact = ({ width = 500, height = 500 }: { width: number; height: number }) => {
  return <MyComponent width={width} height={height} />;
};
