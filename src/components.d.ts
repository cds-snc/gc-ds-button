/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GcdsButton {
        /**
          * StyleAPI: custom background color.
         */
        "customBackgroundColor": string | undefined;
        /**
          * StyleAPI: custom border color.
         */
        "customBorderColor": string | undefined;
        /**
          * StyleAPI: custom border style.
         */
        "customBorderStyle": string | undefined;
        /**
          * StyleAPI: custom border weight.
         */
        "customBorderWeight": string | undefined;
        /**
          * StyleAPI: custom box shadow.
         */
        "customBoxShadow": string | undefined;
        /**
          * StyleAPI: custom btext transform.
         */
        "customCapitalization": string | undefined;
        /**
          * StyleAPI: custom display.
         */
        "customDisplay": string | undefined;
        /**
          * StyleAPI: custom margin.
         */
        "customMargin": string | undefined;
        /**
          * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
         */
        "download": string | undefined;
        /**
          * The href attribute specifies the URL of the page the link goes to
         */
        "href": string | undefined;
        /**
          * The button label
         */
        "label": string;
        /**
          * The name attribute specifies the name for a <button> element.
         */
        "name": string | undefined;
        /**
          * The rel attribute specifies the relationship between the current document and the linked document
         */
        "rel": string | undefined;
        /**
          * Set component states
         */
        "state": 'default' | 'hover' | 'active' | 'focus' | 'disabled';
        /**
          * The target attribute specifies where to open the linked document
         */
        "target": string | undefined;
        /**
          * Set the main style
         */
        "task": 'primary' | 'secondary' | 'danger' | 'skip-to-content';
        /**
          * Set button types
         */
        "type": 'submit' | 'reset' | 'button' | 'link';
        /**
          * Set the style variant
         */
        "variant": 'solid' | 'outline' | 'text-only';
    }
    interface GcdsSiteMenu {
        /**
          * Desktop layout
         */
        "desktopTask": 'topbar' | 'sidebar';
        /**
          * Mobile layout
         */
        "mobileTask": 'drawer' | 'toolbar';
        /**
          * Sticky navigation flag
         */
        "sticky": boolean;
        /**
          * Variant
         */
        "variant": 'left' | 'center' | 'right' | 'split';
    }
}
declare global {
    interface HTMLGcdsButtonElement extends Components.GcdsButton, HTMLStencilElement {
    }
    var HTMLGcdsButtonElement: {
        prototype: HTMLGcdsButtonElement;
        new (): HTMLGcdsButtonElement;
    };
    interface HTMLGcdsSiteMenuElement extends Components.GcdsSiteMenu, HTMLStencilElement {
    }
    var HTMLGcdsSiteMenuElement: {
        prototype: HTMLGcdsSiteMenuElement;
        new (): HTMLGcdsSiteMenuElement;
    };
    interface HTMLElementTagNameMap {
        "gcds-button": HTMLGcdsButtonElement;
        "gcds-site-menu": HTMLGcdsSiteMenuElement;
    }
}
declare namespace LocalJSX {
    interface GcdsButton {
        /**
          * StyleAPI: custom background color.
         */
        "customBackgroundColor"?: string | undefined;
        /**
          * StyleAPI: custom border color.
         */
        "customBorderColor"?: string | undefined;
        /**
          * StyleAPI: custom border style.
         */
        "customBorderStyle"?: string | undefined;
        /**
          * StyleAPI: custom border weight.
         */
        "customBorderWeight"?: string | undefined;
        /**
          * StyleAPI: custom box shadow.
         */
        "customBoxShadow"?: string | undefined;
        /**
          * StyleAPI: custom btext transform.
         */
        "customCapitalization"?: string | undefined;
        /**
          * StyleAPI: custom display.
         */
        "customDisplay"?: string | undefined;
        /**
          * StyleAPI: custom margin.
         */
        "customMargin"?: string | undefined;
        /**
          * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
         */
        "download"?: string | undefined;
        /**
          * The href attribute specifies the URL of the page the link goes to
         */
        "href"?: string | undefined;
        /**
          * The button label
         */
        "label"?: string;
        /**
          * The name attribute specifies the name for a <button> element.
         */
        "name"?: string | undefined;
        /**
          * Emitted when the button loses focus.
         */
        "onGcdsBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onGcdsFocus"?: (event: CustomEvent<void>) => void;
        /**
          * The rel attribute specifies the relationship between the current document and the linked document
         */
        "rel"?: string | undefined;
        /**
          * Set component states
         */
        "state"?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
        /**
          * The target attribute specifies where to open the linked document
         */
        "target"?: string | undefined;
        /**
          * Set the main style
         */
        "task"?: 'primary' | 'secondary' | 'danger' | 'skip-to-content';
        /**
          * Set button types
         */
        "type"?: 'submit' | 'reset' | 'button' | 'link';
        /**
          * Set the style variant
         */
        "variant"?: 'solid' | 'outline' | 'text-only';
    }
    interface GcdsSiteMenu {
        /**
          * Desktop layout
         */
        "desktopTask"?: 'topbar' | 'sidebar';
        /**
          * Mobile layout
         */
        "mobileTask"?: 'drawer' | 'toolbar';
        /**
          * Sticky navigation flag
         */
        "sticky"?: boolean;
        /**
          * Variant
         */
        "variant"?: 'left' | 'center' | 'right' | 'split';
    }
    interface IntrinsicElements {
        "gcds-button": GcdsButton;
        "gcds-site-menu": GcdsSiteMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gcds-button": LocalJSX.GcdsButton & JSXBase.HTMLAttributes<HTMLGcdsButtonElement>;
            "gcds-site-menu": LocalJSX.GcdsSiteMenu & JSXBase.HTMLAttributes<HTMLGcdsSiteMenuElement>;
        }
    }
}
