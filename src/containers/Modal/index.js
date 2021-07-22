import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { startAddToFavourites } from '../../actions/jokesActions'
import Button from '../../components/Buttons/Button'
import StarRatings from "../../components/StarRating"



const Modal = ({isModalOpen, closeModal, joke}) => {
  const [hover, setHover] = useState(null)
  const [starRating, setStarRating] = useState(1)
  const dispatch=useDispatch()

  const addToFavouritesHandler = () => {
      const dataForFavourites = {
          starRating,
          joke
      }
      dispatch(startAddToFavourites(dataForFavourites))
      closeModal()
  }

  useEffect(() => {
    setStarRating(1)
  }, [isModalOpen])


  return (
      <dialog className={`modal ${isModalOpen ? 'flex' : 'modal-display-hidden' }`}>
        <div className="modal-content">
          <div className="flex justify-center modal-header">
            <h1>Rate the joke!</h1>
          </div>
          <StarRatings 
            setStarRating={setStarRating}
            starRating={starRating}
            setHover={setHover}
            hover={hover}
          />
          <div className="flex justify-center">
            <Button fn={closeModal} classes={'close-btn'}>
              Close
            </Button>
            <Button fn={addToFavouritesHandler} classes={'btn'}>
              Add to favourites
            </Button>
          </div>
        </div>
      </dialog>
  )
}

export default Modal
