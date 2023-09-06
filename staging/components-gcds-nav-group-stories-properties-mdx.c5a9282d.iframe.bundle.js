/*! For license information please see components-gcds-nav-group-stories-properties-mdx.c5a9282d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[5216,5421],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-nav-group/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_gcds_nav_group_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-nav-group/stories/gcds-nav-group.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_nav_group_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_nav_group_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_nav_group_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sort:"requiredFirst"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/gcds-nav-group/stories/gcds-nav-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation group",argTypes:{openLabel:{name:"open-label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},openTrigger:{name:"open-trigger",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},closeTrigger:{name:"close-trigger",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},open:{name:"open",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-group\n  menu-label="${args.menuLabel}"\n  open-trigger="${args.openTrigger}"\n  ${args.closeTrigger?`close-trigger="${args.closeTrigger}"`:null}\n  ${args.open?"open":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-nav-group>\n\n\x3c!-- React code --\x3e\n<GcdsNavGroup\n  menuLabel="${args.menuLabel}"\n  openTrigger="${args.openTrigger}"\n  ${args.closeTrigger?`closeTrigger="${args.closeTrigger}"`:null}\n  ${args.open?"open":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsNavGroup>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={menuLabel:"",openTrigger:"Navigation group",closeTrigger:"",open:!1,lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-group\n  menu-label="${args.menuLabel}"\n  open-trigger="${args.openTrigger}"\n  ${args.closeTrigger ? `close-trigger="${args.closeTrigger}"` : null}\n  ${args.open ? `open` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-nav-group>\n\n\x3c!-- React code --\x3e\n<GcdsNavGroup\n  menuLabel="${args.menuLabel}"\n  openTrigger="${args.openTrigger}"\n  ${args.closeTrigger ? `closeTrigger="${args.closeTrigger}"` : null}\n  ${args.open ? `open` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsNavGroup>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);