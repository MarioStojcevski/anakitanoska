import './CountdownButton.css'

interface CountdownButtonProps {
  onClick: () => void
  label: string
}

export const CountdownButton = ({ onClick, label }: CountdownButtonProps) => {
  return (
    <button className="countdown-button" onClick={onClick}>
      <span className="button-text">{label}</span>
      <span className="button-shine"></span>
    </button>
  )
}


