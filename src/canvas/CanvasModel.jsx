import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';
<<<<<<< HEAD
import Pant from './pant';
import Dreess from './Dreess';
import Girls_long_Dreses from './Girls_long_Dreses';
// import GirlsShirt from './GirlsShirt';
// import BoyShirt from './boyShirt';

// import FemaleShirt from './FemaleShirt';

=======
// import FemaleShirt from './FemaleShirt';

>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
const CanvasModel = ({ show }) => {
  if (!show) return null; 
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <CameraRig>
        <Center>
          {/* <Shirt/> */}
          {/* <Pant/> */}
          {/* <GirlsShirt/> */}
         {/* <Dreess/> */}
         <Girls_long_Dreses />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel