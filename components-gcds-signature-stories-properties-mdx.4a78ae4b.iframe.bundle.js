/*! For license information please see components-gcds-signature-stories-properties-mdx.4a78ae4b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[9200,5985],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-signature/stories/gcds-signature.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HasLinkTrue:()=>HasLinkTrue,Playground:()=>Playground,Props:()=>Props,SignatureFrench:()=>SignatureFrench,SignatureWhite:()=>SignatureWhite,Wordmark:()=>Wordmark,WordmarkFrench:()=>WordmarkFrench,WordmarkWhite:()=>WordmarkWhite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Signature",argTypes:{type:{control:"select",options:["signature","wordmark"],table:{type:{summary:"string"},defaultValue:{summary:"signature"}}},hasLink:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},variant:{control:"select",options:["colour","white"],table:{type:{summary:"string"},defaultValue:{summary:"colour"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").langProp}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${"signature"!=args.type?`type="${args.type}"`:null} ${0!=args.hasLink?`has-link="${args.hasLink}"`:null} ${"colour"!=args.variant?`variant="${args.variant}"`:null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${"signature"!=args.type?`type="${args.type}"`:null} ${0!=args.hasLink?`hasLink="${args.hasLink}"`:null} ${"colour"!=args.variant?`variant="${args.variant}"`:null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</GcdsSignature>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={type:"signature",hasLink:!1,variant:"colour",lang:"en"};const Wordmark=Template.bind({});Wordmark.args={type:"wordmark",hasLink:!1,variant:"colour",lang:"en"};const SignatureFrench=Template.bind({});SignatureFrench.args={type:"signature",hasLink:!1,variant:"colour",lang:"fr"};const WordmarkFrench=Template.bind({});WordmarkFrench.args={type:"wordmark",hasLink:!1,variant:"colour",lang:"fr"};const HasLinkTrue=Template.bind({});HasLinkTrue.args={type:"signature",hasLink:"true",variant:"colour",lang:"en"};const SignatureWhite=Template.bind({});SignatureWhite.args={type:"signature",hasLink:!1,variant:"white",lang:"en"};const WordmarkWhite=Template.bind({});WordmarkWhite.args={type:"wordmark",hasLink:!1,variant:"white",lang:"en"};const Props=Template.bind({});Props.args={type:"signature",hasLink:!1,variant:"colour",lang:"en"};const Playground=(args=>`\n<gcds-signature\n  type="${args.type}"\n  has-link="${args.hasLink}"\n  variant="${args.variant}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-signature>\n`).bind({});Playground.args={type:"signature",hasLink:!1,variant:"colour",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},Wordmark.parameters={...Wordmark.parameters,docs:{...Wordmark.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...Wordmark.parameters?.docs?.source}}},SignatureFrench.parameters={...SignatureFrench.parameters,docs:{...SignatureFrench.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...SignatureFrench.parameters?.docs?.source}}},WordmarkFrench.parameters={...WordmarkFrench.parameters,docs:{...WordmarkFrench.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...WordmarkFrench.parameters?.docs?.source}}},HasLinkTrue.parameters={...HasLinkTrue.parameters,docs:{...HasLinkTrue.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...HasLinkTrue.parameters?.docs?.source}}},SignatureWhite.parameters={...SignatureWhite.parameters,docs:{...SignatureWhite.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...SignatureWhite.parameters?.docs?.source}}},WordmarkWhite.parameters={...WordmarkWhite.parameters,docs:{...WordmarkWhite.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...WordmarkWhite.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-signature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `has-link="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-signature>\n\n\x3c!-- React code --\x3e\n<GcdsSignature ${args.type != \'signature\' ? `type="${args.type}"` : null} ${args.hasLink != false ? `hasLink="${args.hasLink}"` : null} ${args.variant != \'colour\' ? `variant="${args.variant}"` : null} ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsSignature>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-signature\n  type="${args.type}"\n  has-link="${args.hasLink}"\n  variant="${args.variant}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-signature>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Wordmark","SignatureFrench","WordmarkFrench","HasLinkTrue","SignatureWhite","WordmarkWhite","Props","Playground"]},"./src/components/gcds-signature/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_gcds_signature_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-signature/stories/gcds-signature.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_signature_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_signature_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_signature_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/utils/storybook/component-properties.js":()=>{"use strict"},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);