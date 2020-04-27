const template=document.createElement("template");template.innerHTML='\n<style>\n.mat-ban-container{\n    width: 100%;\n    display: inline-flex;\n    flex-direction: row;\n    flex-wrap: wrap; \n    padding-top: 1.5rem;\n    background-color: white;\n  }\n  \n  .mat-ban-top{\n    display: inline-flex;\n    align-items: center;\n    margin-inline-start: 1rem;\n    margin-inline-end: 1rem;\n    margin-bottom: 1rem;\n  }\n  .mat-ban-icon{\n    padding: 0.5rem;\n    margin-right: 1rem;\n  }\n  .mat-ban-btns{\n    display: inline-flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    margin-bottom: 0.5rem;\n    margin-right: 0.5rem;\n    flex-grow: 1;\n  }\n  .mat-ban-btns > * {\n    color: var(--secondary, blue);\n    margin-left: 0.5rem;\n  }\n  \n  .mat-ban-divider {\n    background-color: #000000;\n    opacity: 12%;\n    height: 1px;\n    width: 100%;\n  }\n\n.slideup, .slidedown {\n  max-height: 0;            \n  overflow-y: hidden;\n  transition: max-height 0.5s ease-in-out;\n}\n\n.slidedown {            \n  max-height: 100% ;                    \n}   \n\n</style>\n<div id="mat-slider" class="slideup">\n<div class="mat-ban-container">\n  <div class="mat-ban-top">\n    <div class="mat-ban-icon">\n      <slot name="icon"></slot>\n    </div>\n    <slot style="margin-right: 1em;"></slot>\n  </div>\n  <div class="mat-ban-btns">\n    <slot name="buttons"></slot>\n  </div>\n  <div class="mat-ban-divider"></div>\n</div>\n</div>\n';class MaterialBanner extends HTMLElement{static get observedAttributes(){return["disabled"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(template.content.cloneNode(!0)),this._show=this._show.bind(this),this._hide=this._hide.bind(this)}attributeChangedCallback(n,t,e){t!==e&&(this[n]=this.hasAttribute(n))}connectedCallback(){const{shadowRoot:n}=this;this.disabled=this.disabled}get disabled(){return this.hasAttribute("disabled")}set disabled(n){n?(this.setAttribute("disabled",""),this._hide()):(this.removeAttribute("disabled"),this._show())}_hide(){this.shadowRoot.getElementById("mat-slider").classList.remove("slidedown"),this.shadowRoot.getElementById("mat-slider").classList.add("slideup")}_show(){this.shadowRoot.getElementById("mat-slider").classList.remove("slideup"),this.shadowRoot.getElementById("mat-slider").classList.add("slidedown")}}customElements.define("material-banner",MaterialBanner);