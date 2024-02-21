"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[7365],{"./src/components/gcds-fieldset/stories/gcds-fieldset.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Fieldset",parameters:{actions:{argTypesRegex:"^gcds.*",handles:["GroupError","GroupErrorClear"]}},argTypes:{fieldsetId:{name:"fieldset-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},legend:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.h4,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.q_,gcdsGroupError:{action:"GroupError",table:{category:"Events | Événements"}},gcdsGroupErrorClear:{action:"GroupErrorClear",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>\n  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </gcds-select>\n</gcds-fieldset>\n\n\x3c!-- React code --\x3e\n<GcdsFieldset\n  fieldsetId="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <GcdsInput inputId="form-input" label="Input label" hint="Hint / Example message." size="6"></GcdsInput>\n  <GcdsSelect selectId="form-select" label="Select label" hint="Hint / Example message." defaultValue="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </GcdsSelect>\n</GcdsFieldset>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={fieldsetId:"fieldset",legend:"Legend",hint:"Hint / Example message.",errorMessage:"",required:!1,disabled:!1,validateOn:"blur",lang:"en"};const Required=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-checkbox\n    checkbox-id="check1"\n    label="Checkbox 1"\n    name="check"\n    value="1"\n  >\n  </gcds-checkbox>\n  <gcds-checkbox\n    checkbox-id="check2"\n    label="Checkbox 2"\n    name="check"\n    value="2"\n  >\n  </gcds-checkbox>\n</gcds-fieldset>\n\n\x3c!-- React code --\x3e\n<GcdsFieldset\n  fieldsetId="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <GcdsCheckbox\n    checkboxId="check1"\n    label="Checkbox 1"\n    name="check"\n    value="1"\n  >\n  </GcdsCheckbox>\n  <GcdsCheckbox\n    checkboxId="check2"\n    label="Checkbox 2"\n    name="check"\n    value=""2\n  >\n  </GcdsCheckbox>\n</GcdsFieldset>\n`.replace(/\s\snull\n/g,"")).bind({});Required.args={fieldsetId:"fieldset",legend:"Legend",hint:"Hint / Example message.",errorMessage:"",required:!0,disabled:!1,validateOn:"blur",lang:"en"};const Disabled=Template.bind({});Disabled.args={fieldsetId:"fieldset",legend:"Legend",hint:"Hint / Example message.",errorMessage:"",required:!1,disabled:!0,validateOn:"blur",lang:"en"};const Error=Template.bind({});Error.args={fieldsetId:"fieldset",legend:"Legend",hint:"Hint / Example message.",errorMessage:"This is an error message",required:!1,disabled:!1,validateOn:"blur",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>\n  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </gcds-select>\n</gcds-fieldset>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={fieldsetId:"fieldset",legend:"Legend",hint:"Hint / Example message.",errorMessage:"",required:!1,disabled:!1,validateOn:"blur",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>\n  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </gcds-select>\n</gcds-fieldset>\n\n\x3c!-- React code --\x3e\n<GcdsFieldset\n  fieldsetId="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsInput inputId="form-input" label="Input label" hint="Hint / Example message." size="6"></GcdsInput>\n  <GcdsSelect selectId="form-select" label="Select label" hint="Hint / Example message." defaultValue="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </GcdsSelect>\n</GcdsFieldset>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-checkbox\n    checkbox-id="check1"\n    label="Checkbox 1"\n    name="check"\n    value="1"\n  >\n  </gcds-checkbox>\n  <gcds-checkbox\n    checkbox-id="check2"\n    label="Checkbox 2"\n    name="check"\n    value="2"\n  >\n  </gcds-checkbox>\n</gcds-fieldset>\n\n\x3c!-- React code --\x3e\n<GcdsFieldset\n  fieldsetId="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsCheckbox\n    checkboxId="check1"\n    label="Checkbox 1"\n    name="check"\n    value="1"\n  >\n  </GcdsCheckbox>\n  <GcdsCheckbox\n    checkboxId="check2"\n    label="Checkbox 2"\n    name="check"\n    value=""2\n  >\n  </GcdsCheckbox>\n</GcdsFieldset>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>\n  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </gcds-select>\n</gcds-fieldset>\n\n\x3c!-- React code --\x3e\n<GcdsFieldset\n  fieldsetId="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsInput inputId="form-input" label="Input label" hint="Hint / Example message." size="6"></GcdsInput>\n  <GcdsSelect selectId="form-select" label="Select label" hint="Hint / Example message." defaultValue="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </GcdsSelect>\n</GcdsFieldset>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>\n  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </gcds-select>\n</gcds-fieldset>\n\n\x3c!-- React code --\x3e\n<GcdsFieldset\n  fieldsetId="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <GcdsInput inputId="form-input" label="Input label" hint="Hint / Example message." size="6"></GcdsInput>\n  <GcdsSelect selectId="form-select" label="Select label" hint="Hint / Example message." defaultValue="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </GcdsSelect>\n</GcdsFieldset>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-fieldset\n  fieldset-id="${args.fieldsetId}"\n  legend="${args.legend}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  <gcds-input input-id="form-input" label="Input label" hint="Hint / Example message." size="6"></gcds-input>\n  <gcds-select select-id="form-select" label="Select label" hint="Hint / Example message." default-value="Select option.">\n    <option value="1">Option 1</option>\n    <option value="2">Option 2</option>\n    <option value="3">Option 3</option>\n    <option value="4">Option 4</option>\n    <option value="5">Option 5</option>\n    <option value="6">Option 6</option>\n    <option value="7">Option 7</option>\n    <option value="8">Option 8</option>\n  </gcds-select>\n</gcds-fieldset>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Required","Disabled","Error","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);