"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[3788],{"./src/components/gcds-text/stories/gcds-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CharacterLimit:()=>CharacterLimit,Default:()=>Default,Light:()=>Light,NoCharacterLimit:()=>NoCharacterLimit,Playground:()=>Playground,Primary:()=>Primary,Props:()=>Props,Secondary:()=>Secondary,SizeBody:()=>SizeBody,SizeCaption:()=>SizeCaption,StyleItalic:()=>StyleItalic,StyleNormal:()=>StyleNormal,WeightBold:()=>WeightBold,WeightRegular:()=>WeightRegular,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text",argTypes:{characterLimit:{name:"character-limit",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},display:{control:{type:"select"},options:["block","flex","inline","inline-block","inline-flex","none"],table:{type:{summary:"string"},defaultValue:{summary:"block"}}},marginTop:{name:"margin-top",control:{type:"select"},options:["0","50","100","150","200","250","300","400","450","500","550","600","700","800","900","1000"],table:{type:{summary:"string"},defaultValue:{summary:"-"}}},marginBottom:{name:"margin-bottom",control:{type:"select"},options:["0","50","100","150","200","250","300","400","450","500","550","600","700","800","900","1000"],table:{type:{summary:"string"},defaultValue:{summary:"-"}}},size:{control:{type:"select"},options:["body","caption"],table:{type:{summary:"string"},defaultValue:{summary:"body"}}},textRole:{name:"text-role",control:{type:"select"},options:["light","primary","secondary"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},textStyle:{name:"text-style",control:{type:"select"},options:["italic","normal"],table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},weight:{control:{type:"select"},options:["bold","regular"],table:{type:{summary:"string"},defaultValue:{summary:"regular"}}},default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${"primary"!=args.textRole?`text-role="${args.textRole}"`:null} ${"body"!=args.size?`size="${args.size}"`:null} ${args.characterLimit?null:`character-limit="${args.characterLimit}"`} ${"block"!=args.display?`display="${args.display}"`:null} ${args.marginTop?`margin-top="${args.marginTop}"`:null} ${args.marginBottom?`margin-bottom="${args.marginBottom}"`:null} ${"normal"!=args.textStyle?`text-style="${args.textStyle}"`:null} ${"regular"!=args.weight?`weight="${args.weight}"`:null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${"primary"!=args.textRole?`textRole="${args.textRole}"`:null} ${"body"!=args.size?`size="${args.size}"`:null} ${args.characterLimit?null:`characterLimit="${args.characterLimit}"`} ${"block"!=args.display?`display="${args.display}"`:null} ${args.marginTop?`marginTop="${args.marginTop}"`:null} ${args.marginBottom?`marginBottom="${args.marginBottom}"`:null} ${"normal"!=args.textStyle?`textStyle="${args.textStyle}"`:null} ${"regular"!=args.weight?`weight="${args.weight}"`:null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Primary=Template.bind({});Primary.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Secondary=Template.bind({});Secondary.args={characterLimit:!0,display:"block",size:"body",textRole:"secondary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Light=Template.bind({});Light.args={characterLimit:!0,display:"block",size:"body",textRole:"light",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const SizeBody=Template.bind({});SizeBody.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const SizeCaption=Template.bind({});SizeCaption.args={characterLimit:!0,display:"block",size:"caption",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const CharacterLimit=Template.bind({});CharacterLimit.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const NoCharacterLimit=Template.bind({});NoCharacterLimit.args={characterLimit:!1,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const StyleNormal=Template.bind({});StyleNormal.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const StyleItalic=Template.bind({});StyleItalic.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"italic",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const WeightRegular=Template.bind({});WeightRegular.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const WeightBold=Template.bind({});WeightBold.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"bold",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Props=Template.bind({});Props.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."};const Playground=(args=>`\n<gcds-text\n  ${"primary"!=args.textRole?`text-role="${args.textRole}"`:null}\n  ${"body"!=args.size?`size="${args.size}"`:null}\n  ${args.characterLimit?null:`character-limit="${args.characterLimit}"`}\n  ${"block"!=args.display?`display="${args.display}"`:null}\n  ${args.marginTop?`margin-top="${args.marginTop}"`:null}\n  ${args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}\n  ${"normal"!=args.textStyle?`text-style="${args.textStyle}"`:null}\n  ${"regular"!=args.weight?`weight="${args.weight}"`:null}\n>\n  ${args.default}\n</gcds-text>\n`).bind({});Playground.args={characterLimit:!0,display:"block",size:"body",textRole:"primary",textStyle:"normal",weight:"regular",default:"This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Secondary.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Light.parameters?.docs?.source}}},SizeBody.parameters={...SizeBody.parameters,docs:{...SizeBody.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...SizeBody.parameters?.docs?.source}}},SizeCaption.parameters={...SizeCaption.parameters,docs:{...SizeCaption.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...SizeCaption.parameters?.docs?.source}}},CharacterLimit.parameters={...CharacterLimit.parameters,docs:{...CharacterLimit.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...CharacterLimit.parameters?.docs?.source}}},NoCharacterLimit.parameters={...NoCharacterLimit.parameters,docs:{...NoCharacterLimit.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...NoCharacterLimit.parameters?.docs?.source}}},StyleNormal.parameters={...StyleNormal.parameters,docs:{...StyleNormal.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...StyleNormal.parameters?.docs?.source}}},StyleItalic.parameters={...StyleItalic.parameters,docs:{...StyleItalic.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...StyleItalic.parameters?.docs?.source}}},WeightRegular.parameters={...WeightRegular.parameters,docs:{...WeightRegular.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...WeightRegular.parameters?.docs?.source}}},WeightBold.parameters={...WeightBold.parameters,docs:{...WeightBold.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...WeightBold.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-text ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</gcds-text>\n\n\x3c!-- React code --\x3e\n<GcdsText ${args.textRole != \'primary\' ? `textRole="${args.textRole}"` : null} ${args.size != \'body\' ? `size="${args.size}"` : null} ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.display != \'block\' ? `display="${args.display}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${args.textStyle != \'normal\' ? `textStyle="${args.textStyle}"` : null} ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}>\n  ${args.default}\n</GcdsText>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-text\n  ${args.textRole != \'primary\' ? `text-role="${args.textRole}"` : null}\n  ${args.size != \'body\' ? `size="${args.size}"` : null}\n  ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null}\n  ${args.display != \'block\' ? `display="${args.display}"` : null}\n  ${args.marginTop ? `margin-top="${args.marginTop}"` : null}\n  ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}\n  ${args.textStyle != \'normal\' ? `text-style="${args.textStyle}"` : null}\n  ${args.weight != \'regular\' ? `weight="${args.weight}"` : null}\n>\n  ${args.default}\n</gcds-text>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Secondary","Light","SizeBody","SizeCaption","CharacterLimit","NoCharacterLimit","StyleNormal","StyleItalic","WeightRegular","WeightBold","Props","Playground"]}}]);