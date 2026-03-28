'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function GradientFooter() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.9&cAzimuthAngle=180&cDistance=3&cPolarAngle=115&cameraZoom=1&color1=%230f0f12&color2=%23c43010&color3=%23ff4212&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=-0.5&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.15&rotationX=10&rotationY=0&rotationZ=180&shader=defaults&type=waterPlane&uDensity=1&uFrequency=3&uSpeed=0.18&uStrength=2&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      {/* Heavy dark overlay — text must be readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,15,18,0.55) 0%, rgba(15,15,18,0.75) 50%, rgba(15,15,18,0.92) 100%)',
      }} />
    </div>
  )
}
