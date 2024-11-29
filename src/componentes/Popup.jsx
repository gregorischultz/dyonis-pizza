import React from "react";
import imagem from '../assets/IMGpopup.png';


function Popup() {
    return (
        <div>
            <h1>Vous souhaitez commander ou réserver une table ?</h1>
            <div>
                <img src={imagem} alt="Imagem" />
                <div>
                    <h3>Appelez-nous au : <br />02 46 91 07 42</h3>
                    <div>
                        <h4>Pendant nos horaires d’ouverture :</h4>
                        <div>
                            <p>
                                <span>Du mardi au jeudi :</span><br />
                                <span>11:30 - 14:00 18:00 - 22:00</span><br /><br />
                                <span>Du vendredi au samedi :</span><br />
                                <span>11:30 - 14:00 18:00 - 23:00</span><br /><br />
                                <span>Le dimanche :</span><br />
                                <span>18:00 - 22:00</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button>Fermer</button>
                </div>
            </div>
        </div>
    )
};

export default Popup;