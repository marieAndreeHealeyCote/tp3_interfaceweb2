/* Créateur : Maxime Lacasse :-) */
/* Font awesome ne marche pas... je suis allée chercher un emoticone sur la page https://emojidb.org/montreal-canadiens-emojis */
class Spinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.injecterHTML();
        this.cacher();
        this.msg = this.getAttribute("msg");
    }

    static get observedAttributes() {
        return ["msg"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.msg = newValue;

        this.injecterHTML();
    }

    injecterHTML() {
        this.shadowRoot.innerHTML = `
            <style>
                @keyframes animSpinner {
                    from {
                        transform: rotateZ(0deg);
                    }

                    to {
                        transform: rotateZ(360deg);
                    }
                }
                .spinner-container{
                    position:fixed;
                    z-index:666;
                    inset:0;
                    background-color: rgba(0,0,0,0.5);
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:white;
                }

                .spinner{
                    font-size:6rem;
                    animation: animSpinner 3000ms infinite linear;
                }
            </style>
            <div class="spinner-container">
                <div class="spinner" data-spinner >
               ⚽
                </div >
                <p>${this.msg}</p>
            </div>
        `;
    }

    afficher() {
        console.log("afficheravant", this);
        this.classList.remove("invisible");
        console.log("afficherapres", this);
    }

    cacher() {
        console.log("cacheravant", this);
        this.classList.add("invisible");
        console.log("cacherapres", this);
    }
}

customElements.define("mon-spinner", Spinner);

export default Spinner;
