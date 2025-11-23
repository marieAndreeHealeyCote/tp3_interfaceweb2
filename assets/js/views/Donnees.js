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
        <div class="px-6 pt-32 max-w-4xl mx-auto">
            <div class="space-x-4 mb-6">
                <h1 class="text-4xl font-bold text-gray-900">
                    Données des installations récréatives, sportives et culturelles extérieures de Montréal
                </h1>
            </div>
            <div class="space-x-4 mb-6">
                <h2 class="text-2xl font-bold text-emerald-600">
                    L'application de suivis des installations récréatives, sportives et culturelles extérieures de la Ville de Montréal
                </h2>
            </div>
            <div class="space-y-6 text-gray-700 leading-relaxe">
                <div>
                    Les données des installations récréatives, sportives et culturelles extérieures de Montréal sont accessibles publiquement via le portail Données Montréal.
                </div>
                <p class="italic text-gray-600">Données récupérées le ${moment().format("MMM Do YY")}</p>
                <h3 class="text-lg font-semibold text-emerald-600">
                    <a class="underline hover:text-emerald-800 transition" href="https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles"target="_blank">
                        Lien vers le portail de Données ouvertes de Montréal
                    </a>
                </h3>
                <div>
                    Il est possible de consulter et télécharger les données des installations récréatives, sportives et culturelles extérieures de Montréal en visitant le portail de Données Montréal à l'adresse suivante :
                </div>
                <div class="text-sm text-gray-600">
                    Ville de Montréal, Installations récréatives, sportives et culturelles extérieures, Montréal: Données ouvertes de la Ville de Montréal, 2025.
                    [Ensemble de données]. Disponible: <a class="hover:text-emerald-600 cursor-pointer" href="https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles"target="_blank">https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles</a>.
                    [consulté le ${moment().format("MMM Do YY")}].
                </div>
            </div>
            <div class="my-10">
                <img src="assets/img/ville.webp" alt="Installations extérieures Montréal" class="w-full max-w-3xl mx-auto rounded-lg shadow"/>
                <!-- image provenant de https://montreal.ca/-->
            </div>
         </div>      `;
    }
}
export default Donnees;