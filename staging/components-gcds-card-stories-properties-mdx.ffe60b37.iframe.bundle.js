/*! For license information please see components-gcds-card-stories-properties-mdx.ffe60b37.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[4084,4442],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-card/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-card/stories/gcds-card.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sort:"requiredFirst"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/gcds-card/stories/gcds-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",argTypes:{cardTitle:{name:"card-title",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},href:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},tag:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},description:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},imgSrc:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},imgAlt:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},type:{control:"radio",options:["link","action"],table:{type:{summary:"string"},defaultValue:{summary:"link"}}},titleElement:{control:"radio",options:["h3","h4","h5","h6","a"],table:{type:{summary:"string"},defaultValue:{summary:"a"}}},footer:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"link"!=args.type?'type="action"':null}\n  ${"a"!=args.titleElement?`title-element="${args.titleElement}"`:null}\n  ${args.tag?`tag="${args.tag}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`img-src="${args.imgSrc}"`:null}\n  ${args.imgAlt?`img-alt="${args.imgAlt}"`:null}\n>\n  ${args.footer?`<div slot="footer">${args.footer}</div>`:null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"link"!=args.type?'type="action"':null}\n  ${"a"!=args.titleElement?`titleElement="${args.titleElement}"`:null}\n  ${args.tag?`tag="${args.tag}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`imgSrc="${args.imgSrc}"`:null}\n  ${args.imgAlt?`imgAlt="${args.imgAlt}"`:null}\n>\n  ${args.footer?`<div slot="footer">${args.footer}</div>`:null}\n</GcdsCard>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={cardTitle:"Card title link",href:"#",type:"link",titleElement:"a",tag:"Tag",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"",imgAlt:"",footer:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `titleElement="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);