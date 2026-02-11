// import { useEffect, useRef, useState } from 'react';
import { SpaceBallsComponent } from 'my-component';
import { useWindowSize } from 'usehooks-ts';
// import audioSrc from '../assets/48K_1713045663.m4a';

function ComponentPage() {
  const {width, height} = useWindowSize();
  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     console.log('WavePage unmounting, calling destroy');
  //     destroy?.();
  //   };
  // }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '2rem', color: '#fff' }}>Component Page</h1>
      <SpaceBallsComponent width={width} height={height} />
      <pre>{JSON.stringify({width, height}, null, 2)}</pre>
    </div>
  );
}

export default ComponentPage;
