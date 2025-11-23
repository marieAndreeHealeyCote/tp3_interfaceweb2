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
                <div class="text-sm text-gray-600 space-x-4 mb-6">
                    Ville de Montréal, Installations récréatives, sportives et culturelles extérieures, Montréal: Données ouvertes de la Ville de Montréal, 2025.
                    [Ensemble de données]. Disponible: <a class="hover:text-emerald-600 cursor-pointer" href="https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles"target="_blank">https://donnees.montreal.ca/dataset/installations-recreatives-sportives-et-culturelles</a>.
                    [consulté le ${moment().format("MMM Do YY")}].
                </div>
            </div>
            <div class="text-gray-600 space-x-4 mb-6">
                <ul class="list-disc"> <span class="text-2xl font-bold text-emerald-600">Librairies utilisées:</span>
                    <li><a class="hover:text-emerald-600 cursor-pointer" href="https://momentjs.com/"target="_blank">Moment</a> : Pour la gestion et le formatage des dates.</li>
                    <li><a class="hover:text-emerald-600 cursor-pointer" href="https://github.com/visionmedia/page.js"target="_blank">PageJS</a> : Pour la gestion du routage côté client.</li>
                    <li><a class="hover:text-emerald-600 cursor-pointer" href="https://vite.dev/"target="_blank">Vite</a> : Pour la compilation et le bundling de l'application.</li>
                    <li><a class="hover:text-emerald-600 cursor-pointer" href="https://animejs.com/"target="_blank">AnimeJS</a> : Pour les animations.</li>
                    <li><a class="hover:text-emerald-600 cursor-pointer" href="https://tailwindcss.com/"target="_blank">TailwindCSS</a> : Pour le design et le style de l'application.</li>
                    <li><a class="hover:text-emerald-600 cursor-pointer" href="https://fontawesome.com/"target="_blank">Font-Awesome</a> : Pour les icônes</li>
                </ul>
            </div>
            <div class="my-10">
                <img src="assets/img/ville.webp" alt="Installations extérieures Montréal" class="w-full max-w-3xl mx-auto rounded-lg shadow"/>
                <!-- image provenant de https://montreal.ca/-->
            </div>
         </div>      `;
    }
}
export default Donnees;