"use client"
import React from 'react'
import  Tilt  from 'react-parallax-tilt';
import cx from 'classnames';

const CustomTilt = ({children ,className}) => {
  return (
    <Tilt
    className={cx("background-stripes parallax-effect overflow-hidden  rounded-2xl ",className)}
    perspective={500}
    glareEnable={true}
    tiltEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >

    {children}

    </Tilt>
  )
}

export default CustomTilt
