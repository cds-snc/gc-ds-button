/*! For license information please see components-gcds-side-nav-stories-overview-mdx.770986fa.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[6253,3619],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-side-nav/stories/gcds-side-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Label:()=>Label,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Side navigation",argTypes:{label:{name:"label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-side-nav\n  label="${args.label}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    </gcds-nav-group>\n  </gcds-nav-group>\n</gcds-side-nav>\n\n\x3c!-- React code --\x3e\n<GcdsSideNav\n  label="${args.label}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n  <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n    <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label sublevel">\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    </GcdsNavGroup>\n  </GcdsNavGroup>\n</GcdsSideNav>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={label:"Label",lang:"en"};const Props=Template.bind({});Props.args={label:"Label",lang:"en"};const Label=Template.bind({});Label.args={label:"Side navigation label",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-side-nav\n  label="${args.label}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    </gcds-nav-group>\n  </gcds-nav-group>\n</gcds-side-nav>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={label:"Label",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-side-nav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    </gcds-nav-group>\n  </gcds-nav-group>\n</gcds-side-nav>\n\n\x3c!-- React code --\x3e\n<GcdsSideNav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n  <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n    <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label sublevel">\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    </GcdsNavGroup>\n  </GcdsNavGroup>\n</GcdsSideNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-side-nav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    </gcds-nav-group>\n  </gcds-nav-group>\n</gcds-side-nav>\n\n\x3c!-- React code --\x3e\n<GcdsSideNav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n  <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n    <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label sublevel">\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    </GcdsNavGroup>\n  </GcdsNavGroup>\n</GcdsSideNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-side-nav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    </gcds-nav-group>\n  </gcds-nav-group>\n</gcds-side-nav>\n\n\x3c!-- React code --\x3e\n<GcdsSideNav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n  <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n\n    <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label sublevel">\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n      <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    </GcdsNavGroup>\n  </GcdsNavGroup>\n</GcdsSideNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Label.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-side-nav\n  label="${args.label}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n\n    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n      <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    </gcds-nav-group>\n  </gcds-nav-group>\n</gcds-side-nav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Props","Label","Playground"]},"./src/components/gcds-side-nav/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_side_nav_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-side-nav/stories/gcds-side-nav.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",code:"code",p:"p",em:"em",h2:"h2",h3:"h3"},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_side_nav_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"side-navigationgcds-side-nav",children:["Side navigation",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-side-nav>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Also called: sidebar menu, lefhand nav, vertical navigation."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A side navigation is a vertical list of page links on the left side of the screen."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_side_nav_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_side_nav_stories__WEBPACK_IMPORTED_MODULE_2__.Label,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"resources-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://design-system.alpha.canada.ca/en/components/side-navigation/",target:"_blank",children:"Guidance"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-side-nav",target:"_blank",children:"Github"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=5633-11428&mode=design&t=oJq0gIzGGCLVfPM6-0",target:"_blank",children:"Figma"})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);