/*! For license information please see components-gcds-breadcrumbs-stories-properties-mdx.460a729f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1171,1254],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-breadcrumbs/stories/gcds-breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Playground:()=>Playground,Props:()=>Props,WithoutCanadaLink:()=>WithoutCanadaLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumbs",argTypes:{hideCanadaLink:{name:"hide-canada-link",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},href:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_,default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink?"hide-canada-link":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink?"hideCanadaLink":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n  <GcdsBreadcrumbsItem href="${args.href}">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="${args.href}">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={hideCanadaLink:!1,href:"#",lang:"en"};const WithoutCanadaLink=Template.bind({});WithoutCanadaLink.args={hideCanadaLink:!0,href:"#",lang:"en"};const Props=Template.bind({});Props.args={hideCanadaLink:!1,href:"#",lang:"en",default:""};const Playground=(args=>`\n<gcds-breadcrumbs\n  ${args.hideCanadaLink?"hide-canada-link":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n`).bind({});Playground.args={hideCanadaLink:!1,href:"#",lang:"en",default:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <GcdsBreadcrumbsItem href="${args.href}">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="${args.href}">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},WithoutCanadaLink.parameters={...WithoutCanadaLink.parameters,docs:{...WithoutCanadaLink.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <GcdsBreadcrumbsItem href="${args.href}">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="${args.href}">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g, \'\')',...WithoutCanadaLink.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n\n\x3c!-- React code --\x3e\n<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n  <GcdsBreadcrumbsItem href="${args.href}">Home page</GcdsBreadcrumbsItem>\n  <GcdsBreadcrumbsItem href="${args.href}">Parent page link</GcdsBreadcrumbsItem>\n</GcdsBreadcrumbs>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-breadcrumbs\n  ${args.hideCanadaLink ? `hide-canada-link` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>\n  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>\n</gcds-breadcrumbs>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutCanadaLink","Props","Playground"]},"./src/components/gcds-breadcrumbs/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-breadcrumbs/stories/gcds-breadcrumbs.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);