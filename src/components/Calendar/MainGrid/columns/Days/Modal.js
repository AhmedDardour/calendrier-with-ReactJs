import React , {useReducer} from "react";
import "./Modal.css";


function savedEventsReducer(state, { type, payload }) {
    switch (type) {
      case "push":
        return [...state, payload];
      case "update":
        return state.map((evt) =>
          evt.id === payload.id ? payload : evt
        );
      case "delete":
        return state.filter((evt) => evt.id !== payload.id);
      default:
        throw new Error();
    }
  }

  function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  }


function Modal({ setOpenModal }) {

    const [savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer,
        [],
        initEvents
      );

  return (
   <form> 
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Séance en direct</h2>
        </div>
        <div className="body">
          <div>
          <form>
            <select className="matiere">
                <option value="anglais">Anglais</option>
                <option value="francais">Français</option>
                <option value="math">Math</option>
                <option value="physics">Physics</option>
                <option value="arabic">Arabic</option>
            </select>
          </form>
          <br/>
          </div>

          <div>
            <input type="text" className="texts"/>

            <label id="insturcteur">insturcteur : </label>
            <input type="text" id="fname"></input> <br/>
            
            <label id="Heure">Heure :    </label>
            <input type="text" id="fnamee"></input> <br/>

            <form>
            <label id="niveau">Niveau : </label>
            <select className="niveaux">
                <option value="Beginner">Beginner</option>
                <option value="Elementary">Elementary</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Mastery">Mastery</option>
            </select>
          </form>
          </div>

           

        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Submit</button>
        </div>
      </div>
    </div>
    </form> 
  );
}

export default Modal;