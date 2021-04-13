class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      /* html */
      `&copy; 2021
      Flores Salas Francisco Joath  IC-52.`;
  }
}
customElements.define("mi-footer", MiFooter);
