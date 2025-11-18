class Page404 {
    #application;
    constructor(application) {
        this.#application = application;
        this.render();
    }
    render() {
        this.#application.conteneurHTML.innerHTML = `
            <section>
              <h1></i>Page non trouvée</h1>
              <a href="/">Retour à la page d'accueil</a>
            </section>
        `;
    }

}
export default Page404;