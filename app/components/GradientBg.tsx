'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function GradientBg() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.5&cPolarAngle=90&cameraZoom=1&color1=%23202027&color2=%23c43010&color3=%23ff4212&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.15&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uDensity=1.2&uFrequency=5&uSpeed=0.15&uStrength=2.5&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      {/* Dark overlay for text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(32,32,39,0.75) 0%, rgba(32,32,39,0.4) 50%, rgba(32,32,39,0.65) 100%)',
      }} />
    </div>
  )
}
