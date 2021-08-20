import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Earth() {
  const fbx = useLoader(FBXLoader, '/earth.fbx')

  return <primitive object={fbx} />
}