import './Header.css'

interface HeaderProps {
  title: string
  imageSrc: string
}

export const Header = ({ title, imageSrc }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-image-container">
        <img src={imageSrc} alt="Header" className="header-image" />
      </div>
      <h1 className="header-title">{title}</h1>
    </header>
  )
}


