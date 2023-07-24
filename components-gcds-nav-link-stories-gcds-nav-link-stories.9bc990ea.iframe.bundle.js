"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[961],{"./src/components/gcds-nav-link/stories/gcds-nav-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation link",argTypes:{href:{name:"href",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},current:{name:"current",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current?"current":null}\n>\n  ${args.default}\n</gcds-nav-link>\n\n\n\x3c!-- React code --\x3e\n<GcdsNavLink\n  href="${args.href}"\n  ${args.current?"current":null}\n>\n  ${args.default}\n</GcdsNavLink>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={href:"#link",current:!1,default:"Link"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</gcds-nav-link>\n\n\n\x3c!-- React code --\x3e\n<GcdsNavLink\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</GcdsNavLink>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);