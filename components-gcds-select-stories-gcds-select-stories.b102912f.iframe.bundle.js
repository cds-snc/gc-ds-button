"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1535],{"./src/components/gcds-select/stories/gcds-select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,WithoutDefaultValue:()=>WithoutDefaultValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",parameters:{actions:{argTypesRegex:"^on.*",handles:["change","focus","blur"]}},argTypes:{selectId:{name:"select-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},defaultValue:{name:"default-value",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.h4,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.q_,gcdsChange:{action:"change",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.defaultValue?`default-value="${args.defaultValue}"`:null}\n  ${args.required?"required":null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.defaultValue?`defaultValue="${args.defaultValue}"`:null}\n  ${args.required?"required":null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={selectId:"select-default",label:"Label",hint:"Hint / Example message.",value:"",defaultValue:"Select option.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:"blur"};const Disabled=Template.bind({});Disabled.args={selectId:"select-disabled",label:"Label",hint:"Hint / Example message.",defaultValue:"Select option.",disabled:!0,lang:"en",validateOn:"blur"};const Error=Template.bind({});Error.args={selectId:"select-error",label:"Label",hint:"Hint / Example message.",defaultValue:"Select option.",required:!0,errorMessage:"Error message or validation message.",lang:"en",validateOn:"blur"};const Required=Template.bind({});Required.args={selectId:"select-required",label:"Label",hint:"Hint / Example message.",defaultValue:"Select option.",required:!0,lang:"en",validateOn:"blur"};const WithoutDefaultValue=Template.bind({});WithoutDefaultValue.args={selectId:"select-default-value",label:"Label",hint:"Hint / Example message.",lang:"en",validateOn:"blur"};const Props=Template.bind({});Props.args={selectId:"select-props",label:"Label",hint:"Hint / Example message.",value:"",defaultValue:"Select option.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:"blur"};const Playground=(args=>`\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.defaultValue?`default-value="${args.defaultValue}"`:null}\n  ${args.required?"required":null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n`).bind({});Playground.args={selectId:"select-playground",label:"Label",hint:"Hint / Example message.",value:"",defaultValue:"Select option.",errorMessage:"",required:!1,disabled:!1,lang:"en",validateOn:"blur"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},WithoutDefaultValue.parameters={...WithoutDefaultValue.parameters,docs:{...WithoutDefaultValue.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...WithoutDefaultValue.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n\n\x3c!-- React code --\x3e\n<GcdsSelect\n  selectId="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</GcdsSelect>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-select\n  select-id="${args.selectId}"\n  label="${args.label}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}\n  ${args.required ? `required` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n  <option value="3">Option 3</option>\n  <option value="4">Option 4</option>\n  <option value="5">Option 5</option>\n  <option value="6">Option 6</option>\n  <option value="7">Option 7</option>\n  <option value="8">Option 8</option>\n</gcds-select>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Error","Required","WithoutDefaultValue","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);