/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UcSideDrawer {
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
    }
    interface UcSpinner {
    }
    interface UcStockFinder {
    }
    interface UcStockPrice {
        "stockSymbol": string;
    }
    interface UcTooltip {
        "content": string;
        "show": () => Promise<void>;
        "showed": boolean;
    }
}
export interface UcStockFinderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUcStockFinderElement;
}
declare global {
    interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {
    }
    var HTMLUcSideDrawerElement: {
        prototype: HTMLUcSideDrawerElement;
        new (): HTMLUcSideDrawerElement;
    };
    interface HTMLUcSpinnerElement extends Components.UcSpinner, HTMLStencilElement {
    }
    var HTMLUcSpinnerElement: {
        prototype: HTMLUcSpinnerElement;
        new (): HTMLUcSpinnerElement;
    };
    interface HTMLUcStockFinderElement extends Components.UcStockFinder, HTMLStencilElement {
    }
    var HTMLUcStockFinderElement: {
        prototype: HTMLUcStockFinderElement;
        new (): HTMLUcStockFinderElement;
    };
    interface HTMLUcStockPriceElement extends Components.UcStockPrice, HTMLStencilElement {
    }
    var HTMLUcStockPriceElement: {
        prototype: HTMLUcStockPriceElement;
        new (): HTMLUcStockPriceElement;
    };
    interface HTMLUcTooltipElement extends Components.UcTooltip, HTMLStencilElement {
    }
    var HTMLUcTooltipElement: {
        prototype: HTMLUcTooltipElement;
        new (): HTMLUcTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "uc-side-drawer": HTMLUcSideDrawerElement;
        "uc-spinner": HTMLUcSpinnerElement;
        "uc-stock-finder": HTMLUcStockFinderElement;
        "uc-stock-price": HTMLUcStockPriceElement;
        "uc-tooltip": HTMLUcTooltipElement;
    }
}
declare namespace LocalJSX {
    interface UcSideDrawer {
        "opened"?: boolean;
        "title"?: string;
    }
    interface UcSpinner {
    }
    interface UcStockFinder {
        "onUcSymbolSelected"?: (event: UcStockFinderCustomEvent<string>) => void;
    }
    interface UcStockPrice {
        "stockSymbol"?: string;
    }
    interface UcTooltip {
        "content"?: string;
        "showed"?: boolean;
    }
    interface IntrinsicElements {
        "uc-side-drawer": UcSideDrawer;
        "uc-spinner": UcSpinner;
        "uc-stock-finder": UcStockFinder;
        "uc-stock-price": UcStockPrice;
        "uc-tooltip": UcTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uc-side-drawer": LocalJSX.UcSideDrawer & JSXBase.HTMLAttributes<HTMLUcSideDrawerElement>;
            "uc-spinner": LocalJSX.UcSpinner & JSXBase.HTMLAttributes<HTMLUcSpinnerElement>;
            "uc-stock-finder": LocalJSX.UcStockFinder & JSXBase.HTMLAttributes<HTMLUcStockFinderElement>;
            "uc-stock-price": LocalJSX.UcStockPrice & JSXBase.HTMLAttributes<HTMLUcStockPriceElement>;
            "uc-tooltip": LocalJSX.UcTooltip & JSXBase.HTMLAttributes<HTMLUcTooltipElement>;
        }
    }
}
