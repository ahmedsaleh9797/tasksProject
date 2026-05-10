import{d as R,h as X,v as q}from"./chunk-LUEG3PUT.js";import{$c as I,Ab as U,Eb as v,Ia as f,Ib as Y,J as s,Ja as b,K as u,Ka as h,Kb as _,La as E,M as c,Ma as m,Na as d,O as l,Ob as x,Pc as G,Sb as p,Ta as S,Ua as B,Va as P,Xb as C,Yc as y,bb as A,bd as T,cb as V,cd as D,dd as a,ed as K,fa as F,ha as w,jb as j,kb as z,la as r,lb as $,lc as O,mb as L,xa as k,xb as g,yb as H}from"./chunk-W3QP25CN.js";var M=class t{transform(o,e){if(!o||!e)return null;let n=Object.keys(e);if(!n.length)return null;let i=n[0];return o[i]??null}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=E({name:"validation",type:t,pure:!0})};function ot(t,o){if(t&1&&(H(0),Y(1,"validation")),t&2){let e=z();U(" ",_(1,1,e.errorMessages,e.errors)," ")}}var J=class t{control;errorMessages;useDirty=!1;useTouched=!0;get currentControl(){return this.control?this.control instanceof X?this.control.control:this.control:null}shouldShowErrors(){let o=this.currentControl;if(!o)return!1;let e=o.touched,n=o.dirty;return this.useDirty&&this.useTouched?o.invalid&&(e||n):this.useDirty?o.invalid&&n:this.useTouched?o.invalid&&e:o.invalid}get errors(){return this.currentControl?.errors}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=f({type:t,selectors:[["app-error"]],inputs:{control:"control",errorMessages:"errorMessages",useDirty:"useDirty",useTouched:"useTouched"},decls:2,vars:1,consts:[["role","alert",1,"px-2","text-sm","text-red-600","rounded"]],template:function(e,n){e&1&&(A(0,"div",0),B(1,ot,2,4),V()),e&2&&(k(),P(n.shouldShowErrors()?1:-1))},dependencies:[M],encapsulation:2})};var Q=(()=>{class t extends D{modelValue=F(void 0);$filled=x(()=>G(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(t)))(i||t)}})();static \u0275dir=h({type:t,features:[d]})}return t})();var W=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var at=`
    ${W}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,rt={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Z=(()=>{class t extends I{name="inputtext";style=at;classes=rt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(t)))(i||t)}})();static \u0275prov=s({token:t,factory:t.\u0275fac})}return t})();var tt=new c("INPUTTEXT_INSTANCE"),$t=(()=>{class t extends Q{componentName="InputText";hostName="";ptInputText=p();pInputTextPT=p();pInputTextUnstyled=p();bindDirectiveInstance=l(a,{self:!0});$pcInputText=l(tt,{optional:!0,skipSelf:!0})??void 0;ngControl=l(R,{optional:!0,self:!0});pcFluid=l(q,{optional:!0,host:!0,skipSelf:!0});pSize;variant=p();fluid=p(void 0,{transform:C});invalid=p(void 0,{transform:C});$variant=x(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=l(Z);constructor(){super(),w(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),w(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=h({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&j("input",function(){return i.onInput()}),n&2&&(S("data-p",i.dataP),g(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[v([Z,{provide:tt,useExisting:t},{provide:T,useExisting:t}]),m([a]),d]})}return t})(),Lt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=b({type:t});static \u0275inj=u({})}return t})();var et=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var pt=["*"],dt=`
    ${et}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,st={root:({instance:t})=>["p-floatlabel",{"p-floatlabel-over":t.variant==="over","p-floatlabel-on":t.variant==="on","p-floatlabel-in":t.variant==="in"}]},nt=(()=>{class t extends I{name="floatlabel";style=dt;classes=st;static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(t)))(i||t)}})();static \u0275prov=s({token:t,factory:t.\u0275fac})}return t})();var it=new c("FLOATLABEL_INSTANCE"),ut=(()=>{class t extends D{componentName="FloatLabel";_componentStyle=l(nt);$pcFloatLabel=l(it,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(a,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let e;return function(i){return(e||(e=r(t)))(i||t)}})();static \u0275cmp=f({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(n,i){n&2&&g(i.cx("root"))},inputs:{variant:"variant"},features:[v([nt,{provide:it,useExisting:t},{provide:T,useExisting:t}]),m([a]),d],ngContentSelectors:pt,decls:1,vars:0,template:function(n,i){n&1&&($(),L(0))},dependencies:[O,y,K],encapsulation:2,changeDetection:0})}return t})(),ee=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=b({type:t});static \u0275inj=u({imports:[ut,y,y]})}return t})();export{J as a,Q as b,$t as c,Lt as d,ut as e,ee as f};
