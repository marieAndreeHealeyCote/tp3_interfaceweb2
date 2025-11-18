import dompurify from "dompurify";

class Accueil {
    #application;
    #listesActivitesHTML;

    constructor(application) {
        this.#application = application;
        this.render();
    }

    render() {
        this.#application.conteneurHTML.innerHTML = ` 
          <div>
            <h1>Données des installations récréatives, sportives et culturelles extérieures de Montréal</h1>
            <h2>L'application de suivis des installations récréatives, sportives et culturelles extérieures de la Ville de Montréal</h2>
            <div>
                <div>
                    En 2013, le Service de la diversité sociale et des sports a amorcé le Plan directeur du sport et du plein air urbains.
                    À cet effet, un inventaire des actifs en sports et en plein air urbain a été réalisé avec la collaboration des 19 arrondissements et du Service des grands parcs, du Mont-Royal et des sports (SGPMRS).
                </div>
                <div>
                    La couche des installations extérieures a été créée à partir de la géolocalisation de l'inventaire des actifs en interprétant les orthophotos des années 2016 et 2018.
                    La position des différentes installations est alors approximative.
                </div>
                <div>
                    En 2019, un chantier de collaboration avec les 19 arrondissements a été mis en place pour la validation de la base de données géolocalisée.
                </div>
                <div>
                    Ville de Montréal, Installations récréatives, sportives et culturelles extérieures, Montréal: Données ouvertes de la Ville de Montréal, 2025. [Ensemble de données]. Disponible: https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles. [consulté le 18 novembre 2025].
                </div>
            </div>
            <div data-liste-activites></div>
        </div>
        `;
        this.#listesActivitesHTML = this.#application.conteneurHTML.querySelector("[data-liste-activites]");

        this.rechercherActivites();
    }

    async rechercherActivites() {
        const requete = await fetch("https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles/resource/2dac229f-6089-4cb7-ab0b-eadc6a147d5d"
        );
        const reponse = await requete.json();

        this.#listesActivitesHTML.innerHTML = "";

        let gabarit = "<div>";
        reponse.entries.forEach(function (entry) {
            gabarit += `
            <div>
            <h3>${entry.dc_title}</div>
            </div>`;
        });
        gabarit += "</div>";

        const gabaritNouveau = dompurify.sanitize(gabarit);

        this.#listesActivitesHTML.insertAdjacentHTML("beforeend", gabaritNouveau);
    }
}

export default Accueil;