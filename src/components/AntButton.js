import { Button } from 'antd'
import React from 'react'

const AntButton = ({
  text,
  type,
  size = 'default',
  className = '',
  htmlType = '',
  color,
  txtColor,
  brColor,
  brWidth,
}) => {
  const shapeStyle = {
    width: size,
    height: size,
    backgroundColor: color,
    color: txtColor,
    borderColor: brColor,
    borderWidth: brWidth,
    borderStyle: 'solid',
  }

  return (
    <>
      <Button
        type={type}
        style={{ ...shapeStyle }}
        className={className}
        htmlType={htmlType}
      >
        {text}
      </Button>
    </>
  )
}

export default AntButton