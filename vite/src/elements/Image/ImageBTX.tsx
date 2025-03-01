import "./image.scss";

interface ImageBTXProps {
  src: string;
  alt: string;
}

function ImageBTX({src, alt}: ImageBTXProps) {

  return (
    <>
      <div className="img-container">
        <img className="blur-image" src={src} alt={alt + " Blur"}/>
        <img className="sharp-image" src={src} alt={alt}/>
      </div>
    </>
  )
}

export default ImageBTX
