/*! For license information please see components-gcds-date-modified-stories-properties-mdx.24406b28.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1045,462],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-date-modified/stories/gcds-date-modified.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,French:()=>French,Playground:()=>Playground,Props:()=>Props,Version:()=>Version,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Date modified",argTypes:{type:{control:{type:"select"},options:["date","version"],table:{type:{summary:"string"},defaultValue:{summary:"date"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp,default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-date-modified ${"date"!=args.type?`type="${args.type}"`:null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n  ${args.default}\n</gcds-date-modified>\n\n\x3c!-- React code --\x3e\n<GcdsDateModified ${"date"!=args.type?`type="${args.type}"`:null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n  ${args.default}\n</GcdsDateModified>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={lang:"en",type:"date",default:"2023-01-26"};const French=Template.bind({});French.args={lang:"fr",type:"date",default:"2023-01-26"};const Version=Template.bind({});Version.args={lang:"en",type:"version",default:"1.2.3"};const Props=Template.bind({});Props.args={lang:"en",type:"date",default:"2023-01-26"};const Playground=(args=>`\n<gcds-date-modified\n  ${"date"!=args.type?`type="${args.type}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default}\n</gcds-date-modified>\n`).bind({});Playground.args={lang:"en",type:"date",default:"2023-01-26"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-date-modified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</gcds-date-modified>\n\n\x3c!-- React code --\x3e\n<GcdsDateModified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</GcdsDateModified>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-date-modified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</gcds-date-modified>\n\n\x3c!-- React code --\x3e\n<GcdsDateModified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</GcdsDateModified>\n`.replace(/ null/g, \'\')',...French.parameters?.docs?.source}}},Version.parameters={...Version.parameters,docs:{...Version.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-date-modified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</gcds-date-modified>\n\n\x3c!-- React code --\x3e\n<GcdsDateModified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</GcdsDateModified>\n`.replace(/ null/g, \'\')',...Version.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-date-modified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</gcds-date-modified>\n\n\x3c!-- React code --\x3e\n<GcdsDateModified ${args.type != "date" ? `type="${args.type}"` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>\n  ${args.default}\n</GcdsDateModified>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-date-modified\n  ${args.type != "date" ? `type="${args.type}"` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  ${args.default}\n</gcds-date-modified>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","French","Version","Props","Playground"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}},"./src/components/gcds-date-modified/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_gcds_date_modified_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-date-modified/stories/gcds-date-modified.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_date_modified_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"events--properties",children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_date_modified_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_date_modified_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);