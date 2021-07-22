import { useEffect, useState } from 'react'
import AddToFavouritesButton from "../../components/Buttons/AddToFavouritesButton"
import CloseModalButton from "../../components/Buttons/CloseModalButton"
import StarRatings from "../../components/StarRating"


const Modal = ({isModalOpen, closeModal, joke}) => {
  const [hover, setHover] = useState(null)
  const [starRating, setStarRating] = useState(1)

  useEffect(() => {
    setStarRating(1)
  }, [isModalOpen])


  return (
      <dialog className={`modal ${isModalOpen ? 'modal-display-flex' : 'modal-display-hidden' }`}>
        <div className="modal-content">
          <div className="modal-header">
            <h1>Rate the joke!</h1>
          </div>
          <StarRatings 
            setStarRating={setStarRating}
            starRating={starRating}
            setHover={setHover}
            hover={hover}
          />
          <div className="btns-modal">
            <CloseModalButton closeModal={closeModal}/>
            <AddToFavouritesButton 
              starRating={starRating} 
              joke={joke} 
              closeModal={closeModal}
            />
          </div>
        </div>
      </dialog>
  )
}

export default Modal
