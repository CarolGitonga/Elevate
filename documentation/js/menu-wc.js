'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">elevate documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' : 'data-target="#xs-components-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' :
                                            'id="xs-components-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' : 'data-target="#xs-injectables-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' :
                                        'id="xs-injectables-links-module-AdminModule-6fe14fffa4ea82933b0154f59fa746716fb17aad3d293f61e6468abf1013b3b3a2d666744f9d837d4d4f99d2e39fc672316a08c684fda5384b8e4a3881fb0d83"' }>
                                        <li class="link">
                                            <a href="injectables/AuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9824ce9a909ca71cd10be59b5eb4f3b5696dc83ff29c0cbf91071a64eafcc20297b0d0ea6f8d190ee7fc09f692bab02a6cd8d41046a7851d0a7f57e4e83ceaed"' : 'data-target="#xs-components-links-module-AppModule-9824ce9a909ca71cd10be59b5eb4f3b5696dc83ff29c0cbf91071a64eafcc20297b0d0ea6f8d190ee7fc09f692bab02a6cd8d41046a7851d0a7f57e4e83ceaed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9824ce9a909ca71cd10be59b5eb4f3b5696dc83ff29c0cbf91071a64eafcc20297b0d0ea6f8d190ee7fc09f692bab02a6cd8d41046a7851d0a7f57e4e83ceaed"' :
                                            'id="xs-components-links-module-AppModule-9824ce9a909ca71cd10be59b5eb4f3b5696dc83ff29c0cbf91071a64eafcc20297b0d0ea6f8d190ee7fc09f692bab02a6cd8d41046a7851d0a7f57e4e83ceaed"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppRoutingModule-2fc3595af56c153e000de49a369961dbca4b2f5f2f07b735866307e936ea811c897caf391d1ff364c56fa84257f010026f198075f9adc26ed5424e3f8e695a48"' : 'data-target="#xs-injectables-links-module-AppRoutingModule-2fc3595af56c153e000de49a369961dbca4b2f5f2f07b735866307e936ea811c897caf391d1ff364c56fa84257f010026f198075f9adc26ed5424e3f8e695a48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppRoutingModule-2fc3595af56c153e000de49a369961dbca4b2f5f2f07b735866307e936ea811c897caf391d1ff364c56fa84257f010026f198075f9adc26ed5424e3f8e695a48"' :
                                        'id="xs-injectables-links-module-AppRoutingModule-2fc3595af56c153e000de49a369961dbca4b2f5f2f07b735866307e936ea811c897caf391d1ff364c56fa84257f010026f198075f9adc26ed5424e3f8e695a48"' }>
                                        <li class="link">
                                            <a href="injectables/StoreFirstGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoreFirstGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-28e97d00f326e5d899eb620039eb75c9fb8ea3daf45d6568b452524feb2ddf7d5b685a1f926f6c0e51e5c58202b97f473840e34418306b90adf49d1a4b58974c"' : 'data-target="#xs-injectables-links-module-ProductModule-28e97d00f326e5d899eb620039eb75c9fb8ea3daf45d6568b452524feb2ddf7d5b685a1f926f6c0e51e5c58202b97f473840e34418306b90adf49d1a4b58974c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-28e97d00f326e5d899eb620039eb75c9fb8ea3daf45d6568b452524feb2ddf7d5b685a1f926f6c0e51e5c58202b97f473840e34418306b90adf49d1a4b58974c"' :
                                        'id="xs-injectables-links-module-ProductModule-28e97d00f326e5d899eb620039eb75c9fb8ea3daf45d6568b452524feb2ddf7d5b685a1f926f6c0e51e5c58202b97f473840e34418306b90adf49d1a4b58974c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Cart.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Cart</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Order.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Order</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestDataSource.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestDataSource</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoreModule.html" data-type="entity-link" >StoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' : 'data-target="#xs-components-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' :
                                            'id="xs-components-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' }>
                                            <li class="link">
                                                <a href="components/CartDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' : 'data-target="#xs-directives-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' :
                                        'id="xs-directives-links-module-StoreModule-386c179843ce074c6ca4e6340731e5c8be5cebde31060b105d840b824ddf77f7d3c78f69fef70dde5790399777c572a8ec139e5fe8a475afb6fe6f6f5b4a5364"' }>
                                        <li class="link">
                                            <a href="directives/CounterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CounterDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CartLine.html" data-type="entity-link" >CartLine</a>
                            </li>
                            <li class="link">
                                <a href="classes/CounterDirectiveContext.html" data-type="entity-link" >CounterDirectiveContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/StaticDataSource.html" data-type="entity-link" >StaticDataSource</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});