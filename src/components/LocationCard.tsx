import './LocationCard.css'

interface LocationCardProps {
  coordinates: string
}

export const LocationCard = ({ coordinates }: LocationCardProps) => {
  return <p className="location-text">{coordinates}</p>
}


