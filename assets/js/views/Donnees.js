import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

class Donnees {
    #application;

    constructor(application) {
        this.#application = application;
        this.render();
    }
    render() {
        this.#application.conteneurHTML.innerHTML = `
        <section>
            <h2>Données des installations récréatives, sportives et culturelles extérieures de Montréal</h2>
            <h3>Sources des données</h3>
            <div>
                <div>
                    La Ville de Montréal propose sur son territoire une multitude d'installations récréatives, sportives et culturelles.
                    Elle répertorie plus de 3 396 installations extérieures, dont 77 piscines, 95 pataugeoires, 150 jeux d'eau et près de 3 000 plateaux et aires de jeux.
                </div>
                <div>
                    Le Plan directeur du sport et du plein air urbains encadre la structure de l'inventaire avec 96 classes d’installations extérieures reconnues.
                    Le contenu des données permet la consultation du nombre des installations par arrondissement.
                    Les données ne sont pas représentatives des installations localisées dans le territoire des villes liées qui n'y sont représentées qu'en partie.
                </div>    
                <div>
                    Les données des installations récréatives, sportives et culturelles extérieures de Montréal sont accessibles publiquement via le portail Données Montréal.
                    Dernière modification de la métadonnée ${moment("2025-10-17").format("dddd, DD-MM-YYYY")}.
                </div>
            </div>
            <p>Données récupérées le ${moment().format("dddd, DD-MM-YYYY")}</p>
            <h3>
                <a href="https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles">Lien vers le portail Données Montréal</a>
            </h3>
            <div>
                Il est possible de consulter et télécharger les données des installations récréatives, sportives et culturelles extérieures de Montréal en visitant le portail de Données Montréal à l'adresse suivante :
            </div>
            <div>
                Ville de Montréal, Installations récréatives, sportives et culturelles extérieures, Montréal: Données ouvertes de la Ville de Montréal, 2025. 
                [Ensemble de données]. Disponible: https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles. 
                [consulté le ${moment("2025-11-18").format("dddd, DD-MM-YYYY")}]. 
            </div>
               `;
    }
}
export default Donnees;