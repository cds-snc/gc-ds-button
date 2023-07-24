(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[5421],{"./src/components/gcds-nav-group/stories/gcds-nav-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation group",argTypes:{openLabel:{name:"open-label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},openTrigger:{name:"open-trigger",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},closeTrigger:{name:"close-trigger",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},open:{name:"open",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-group\n  menu-label="${args.menuLabel}"\n  open-trigger="${args.openTrigger}"\n  ${args.closeTrigger?`close-trigger="${args.closeTrigger}"`:null}\n  ${args.open?"open":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-nav-link href="#">Form</gcds-nav-link>\n  <gcds-nav-link href="#">GitHub</gcds-nav-link>\n  <gcds-nav-link href="#">Slack</gcds-nav-link>\n</gcds-nav-group>\n\n\x3c!-- React code --\x3e\n<GcdsNavGroup\n  menuLabel="${args.menuLabel}"\n  openTrigger="${args.openTrigger}"\n  ${args.closeTrigger?`closeTrigger="${args.closeTrigger}"`:null}\n  ${args.open?"open":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <GcdsNavLink href="#">Form</GcdsNavLink>\n  <GcdsNavLink href="#">GitHub</GcdsNavLink>\n  <GcdsNavLink href="#">Slack</GcdsNavLink>\n</GcdsNavGroup>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={menuLabel:"",openTrigger:"Navigation group",closeTrigger:"",open:!1,lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-group\n  menu-label="${args.menuLabel}"\n  open-trigger="${args.openTrigger}"\n  ${args.closeTrigger ? `close-trigger="${args.closeTrigger}"` : null}\n  ${args.open ? `open` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  <gcds-nav-link href="#">Form</gcds-nav-link>\n  <gcds-nav-link href="#">GitHub</gcds-nav-link>\n  <gcds-nav-link href="#">Slack</gcds-nav-link>\n</gcds-nav-group>\n\n\x3c!-- React code --\x3e\n<GcdsNavGroup\n  menuLabel="${args.menuLabel}"\n  openTrigger="${args.openTrigger}"\n  ${args.closeTrigger ? `closeTrigger="${args.closeTrigger}"` : null}\n  ${args.open ? `open` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  <GcdsNavLink href="#">Form</GcdsNavLink>\n  <GcdsNavLink href="#">GitHub</GcdsNavLink>\n  <GcdsNavLink href="#">Slack</GcdsNavLink>\n</GcdsNavGroup>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}}}]);