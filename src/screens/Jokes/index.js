import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../../actions/jokesActions";
import OpenModalButton from "../../components/Buttons/OpenModalButton";
import GetJokeButton from "../../components/Buttons/GetJokeButton";
import Joke from "../../components/Joke";
import Modal from "../../containers/Modal";
import { FaRegLaughBeam } from "react-icons/fa";

const Jokes = () => {
  const dispatch = useDispatch();

  //loading data
  const getLoadingStatus = useSelector(state => state.jokes.loading)

  //get joke and joke type
  const joke = useSelector(state=>state.jokes.joke.jokeData.data)

  //btn to fetch joke
  const fetchJoke = () => {
    dispatch(getRandomJoke())
  }

  //modal handling
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }


  return (
      <section className="section">
        {!joke && 
          <div className="no-joke">
            <p className="no-joke-p">Click the button bellow and have fun!</p>
            <FaRegLaughBeam />
          </div>
        }
        {joke && (
          <Joke joke={joke}/>
        )}
        <div className="btns-container">
          <GetJokeButton fetchJoke={fetchJoke} getLoadingStatus={getLoadingStatus}/>
          {joke && (
            <OpenModalButton openModal={openModal} />
          )}
        </div>
        <Modal 
          isModalOpen={isModalOpen} 
          closeModal={closeModal} 
          joke={joke}
          />
      </section>
  );
}

export default Jokes;
