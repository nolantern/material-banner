const template = document.createElement('template');
template.innerHTML = `
<style>
.mat-ban-container{
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap; 
    padding-top: 1.5rem;
    background-color: white;
    transform: translateY(0);
    transition: transform 0.3s;
  }
  .mat-ban-container.end-state{
    transform: translateY(-100%);
  }
  
  .mat-ban-top{
    display: inline-flex;
    align-items: center;
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
    margin-bottom: 1rem;
  }
  .mat-ban-btns{
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    flex-grow: 1;
  }
  .mat-ban-btns > * {
    color: var(--secondary, blue);
    margin-left: 0.5rem;
  }
  
  .mat-ban-divider {
    background-color: #000000;
    opacity: 12%;
    height: 1px;
    width: 100%;
  }
</style>
<div class="mat-ban-container">
  <div class="mat-ban-top">
    <slot name="icon"></slot>
    <slot style="margin-right: 1em;"></slot>
  </div>
  <div class="mat-ban-btns">
    <slot name="buttons"></slot>
  </div>
  <div class="mat-ban-divider"></div>
</div>
`;
class MaterialBanner extends HTMLElement {

static get observedAttributes(){
    return ['disabled'];
}

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._show = this._show.bind(this);
        this._hide = this._hide.bind(this);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
          this[attrName] = this.hasAttribute(attrName);
        }
      }

    connectedCallback() {
        const { shadowRoot } = this;
        this.disabled = this.disabled;
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(isDisabled){
        if(isDisabled){
            this.setAttribute('disabled','')
            this._hide();
        } else {
            this.removeAttribute('disabled');
            this._show();
        }
    }

    _hide(){
      this.shadowRoot.querySelector('.mat-ban-container').classList.add('end-state');
        this.hidden = true
    }

    _show(){
        this.hidden = false
        this.shadowRoot.querySelector('.mat-ban-container').classList.remove('end-state');
    }
}

customElements.define('material-banner', MaterialBanner);