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

    module.SiteHeader = SiteHeader;

    window.SiteHeader = module;
}());

(function () {
    var module = {};
    
    class TableOfContents extends HTMLElement {
        constructor() {
            super();

            this.revealed = false;
        }

        /// Find the reveal button.
        get reveal_button() {
            return this.children.item(0);
        }

        /// Find the table of contents content.
        get content() {
            return this.children.item(1);
        }

        get revealed() {
            return this.getAttribute("revealed") !== null;
        }

        set revealed(value) {
            if (value) {
                this.setAttribute("revealed", "");
            } else {
                this.removeAttribute("revealed");
            }
        }

        connectedCallback() {
            this.revealed = false;
            this.reveal_button.addEventListener("click", this.reveal_toggle_intent.bind(this));
            this.content.addEventListener("focusout", this.hide_intent.bind(this));
        }

        reveal_toggle_intent() {
            this.revealed = !this.revealed;
        }

        hide_intent() {
            this.revealed = false;
        }
    }

    window.customElements.define("table-of-contents", TableOfContents);

    module.TableOfContents = TableOfContents;

    window.TableOfContents = module;
}());