import './index.css'

const ThumbnailItem = props => {
  const {isActive, updateImage, thumbnails} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnails
  const onClickThumbnail = () => {
    updateImage(id)
  }
  const thumbnailClassName = isActive ? 'active-thumbnail' : 'btn'
  return (
    <li className="list-container">
      <button
        className={`${thumbnailClassName}`}
        onClick={onClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
