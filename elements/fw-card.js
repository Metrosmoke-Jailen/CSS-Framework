
const template = document.createElement('template');

template.innerHTML = `
    <style>

        :host {
            display: block;

            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
        }

        header {
            padding: var(--space-lg);
        }

        .body {
            padding: var(--space-lg);
        }

        footer {
            padding: var(--space-lg);

            border-top: 1px solid var(--color-border);

            color: var(--color-fg-muted);
        }

        :host([variant="elevated"]) {
            border-color: transparent;
            box-shadow: var(--shadow-md);
        }

    </style>

    <header>
        <slot name="header"></slot>
    </header>

    <div class="body">
        <slot></slot>
    </div>

    <footer>
        <slot name="footer"></slot>
    </footer>
`;

class FwCard extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.append(
            template.content.cloneNode(true)
        );
    }

}

customElements.define('fw-card', FwCard);
