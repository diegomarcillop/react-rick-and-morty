import React from 'react'

export const DividerTitle = ({ title }) => {
  return (
    <div className="divider-title">
      <h1 className="divider-title__title">{title}</h1>
      <div className="divider-title__divider" />
    </div>
  )
};