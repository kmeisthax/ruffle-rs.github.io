//TODO: Get webpack or Babel or something else involved, figure out how to
//place styling and JS files in the same component directories

(function () {
    var module = {};
    
    class SiteHeader extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.document_scroll_intent();
            window.addEventListener("scroll", this.document_scroll_intent.bind(this));
        }

        document_scroll_intent(e) {
            if (window.scrollY > 0) {
                this.classList.add("is-SiteHeader--scrolled");
                this.classList.remove("is-SiteHeader--at_top");
            } else {
                this.classList.remove("is-SiteHeader--scrolled");
                this.classList.add("is-SiteHeader--at_top");
            }
        }
    }

    window.customElements.define("site-header", SiteHeader);

    window.SiteHeader = module;
}());