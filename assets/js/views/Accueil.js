import dompurify from "dompurify";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

class Accueil {
    #application;
    #listesActivitesHTML;

    constructor(application) {
        this.#application = application;
        this.render();
    }

    render() {
        this.#application.conteneurHTML.innerHTML = ` 
          <div class="px-6 pt-32 max-w-4xl mx-auto">
            <div class="space-x-4 mb-6">
                <h1 class="text-4xl font-bold text-gray-900">
                    Données des installations récréatives, sportives et culturelles extérieures de Montréal
                </h1>
            </div>
            <div class="space-x-4 mb-6">
                <h2 class="text-2xl font-bold text-blue-600">
                    L'application de suivis des installations récréatives, sportives et culturelles extérieures de la Ville de Montréal
                </h2>
            </div>
            <div class="space-y-6">
                <div class="italic">
                    La Ville de Montréal propose sur son territoire une multitude d'installations récréatives, sportives et culturelles.
                    Elle répertorie plus de 3 396 installations extérieures, dont 77 piscines, 95 pataugeoires, 150 jeux d'eau et près de 3 000 plateaux et aires de jeux.
                </div>
                <div class="italic">
                    Le Plan directeur du sport et du plein air urbains encadre la structure de l'inventaire avec 96 classes d’installations extérieures reconnues.
                    Le contenu des données permet la consultation du nombre des installations par arrondissement.
                    Les données ne sont pas représentatives des installations localisées dans le territoire des villes liées qui n'y sont représentées qu'en partie.
                </div>
                 <!-- mettre un leaflet (carte du territoire)-->
                <div class="italic">
                    En 2013, le Service de la diversité sociale et des sports a amorcé le Plan directeur du sport et du plein air urbains.
                    À cet effet, un inventaire des actifs en sports et en plein air urbain a été réalisé avec la collaboration des 19 arrondissements et du Service des grands parcs, du Mont-Royal et des sports (SGPMRS).
                </div>
                <div class="italic">
                    La couche des installations extérieures a été créée à partir de la géolocalisation de l'inventaire des actifs en interprétant les orthophotos des années 2016 et 2018.
                    La position des différentes installations est alors approximative.
                </div>
                <div class="italic">
                    En 2019, un chantier de collaboration avec les 19 arrondissements a été mis en place pour la validation de la base de données géolocalisée.
                </div>
                <div class="text-sm text-gray-600"> 
                    Ville de Montréal, Installations récréatives, sportives et culturelles extérieures, Montréal: Données ouvertes de la Ville de Montréal, 2025. [Ensemble de données].
                    Disponible: <a class="hover:text-blue-600 cursor-pointer" href="https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles"target="_blank">https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles</a>. [consulté le ${moment().format("MMM Do YY")}].
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