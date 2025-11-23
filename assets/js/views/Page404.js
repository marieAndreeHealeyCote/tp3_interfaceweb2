class Page404 {
    #application;
    constructor(application) {
        this.#application = application;
        this.render();
    }
    render() {
        this.#application.conteneurHTML.innerHTML = `
            <div class=" px-6 pt-32 max-w-4xl mx-auto text-center">
              <h1 class="text-4xl font-bold text-gray-900">Page non trouvée... </h1>
              <a href="/" class="underline hover:text-emerald-800 transition">Retour à la page d'accueil</a>
                <div class="my-10 flex justify-center align-center">
                    <img src="assets/img/404.webp" alt="erreur 404" class="w-full max-w-3xl mx-auto"/>
                    <!-- image provenant de https://support.heberjahiz.com/hc/fr/articles/17596011205266-Erreur-404-->
                </div>
            </div>
        `;
    }

}
export default Page404;