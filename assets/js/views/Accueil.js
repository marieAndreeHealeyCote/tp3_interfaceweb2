import dompurify from "dompurify";
import { animate, engine } from "animejs";
import Spinner from "../components/Spinner.js";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

class Accueil {
    #application;
    #listesActivitesHTML;

    #spinnerHTML;

    constructor(application) {
        this.#application = application;
        this.#spinnerHTML = document.querySelector("mon-spinner");
        this.render();
    }

    render() {
        this.#application.conteneurHTML.innerHTML = ` 
        <div class="container flex flex-col px-6 pt-32 max-w-4xl mx-auto">
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
            <div class="my-10">
                <img src="assets/img/montreal.webp" alt="Map de Montréal" class="w-full max-w-3xl mx-auto rounded-lg shadow"/>
                <!-- image provenant de https://www.etsy.com/ca-fr/listing/685941544/affiche-de-voyage-montreal-quebec-canada-->
            </div>  
            <div data-liste-activites class="translate-y-[15cqh]"></div>
        </div>
        `;
        this.#listesActivitesHTML = this.#application.conteneurHTML.querySelector("[data-liste-activites]");

        this.rechercherActivites();
    }

    async rechercherActivites() {
        this.#spinnerHTML.setAttribute("msg", "    Veuillez patienter...");
        this.#spinnerHTML.afficher();
        const requete = await fetch("https://donnees.montreal.ca/dataset/60850740-dd83-47ee-9a19-13d674e90314/resource/2dac229f-6089-4cb7-ab0b-eadc6a147d5d/download/terrain_sport_ext.json"
        );
        const reponse = await requete.json();
        setTimeout(
            function () {
                this.#spinnerHTML.cacher();
            }.bind(this),
            1000
        );

        this.#listesActivitesHTML.innerHTML = "";

        let gabarit = `<div class="p-5 grid grid-cols-3 gap-3">`;
        reponse.features.forEach(function (feature) {
            gabarit += `
            <div class="p-5 bg-slate-800 text-white basis-1/3 text-center rounded-lg">
                <i class="fa-regular fa-futbol mr-4 text-emerald-600"></i>
                <h3 class="text-slate-300 font-bold">${feature.properties["NOM"]}</h3>
                <h4 class="text-slate-300 font-bold">${feature.properties["ARROND"]}</h4>
                <h4 class="text-slate-300 font-bold">${feature.properties["TYPE"]}</h4>
                <h4 class="text-slate-300 font-bold">${feature.geometry.coordinates[1]}</h4>
            </div>`;
        });
        gabarit += "</div>";

        const gabaritNouveau = dompurify.sanitize(gabarit);

        this.#listesActivitesHTML.insertAdjacentHTML("beforeend", gabaritNouveau);
        animate('.fa-futbol', {
            x: '5cqh',
            duration: 1000,
            ease: 'inSine',
            loop: true,
            alternate: true,
            delay: 1500,
        });
        animate('[data-liste-activites]', {
            y: '-15cqh',
            duration: 1000,
            ease: 'inOutExpo',
            delay: 500,
        });
    }
}

export default Accueil;