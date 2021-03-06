import React from 'react'

export default function FactGame({
    ComponentToRender,
    renderProps,
    handleAnswer,
    gameState,
}) {
    const combinedProps = { ...renderProps, ...gameState, handleAnswer }
    return <ComponentToRender {...combinedProps} />
}
