import{h as V}from"./chunk-KL673RVC.js";import{ia as r,ma as S,oa as L,pa as j,qa as s,ra as P}from"./chunk-NFDUQ5OF.js";import{i as B}from"./chunk-NTLNQ4MT.js";import{$a as x,Eb as F,Fb as T,Hb as I,K as c,L as d,La as i,Ma as h,Mb as N,N as u,Oa as m,P as o,Pa as v,Qa as y,Vb as k,Xb as A,_a as g,hb as C,ib as w,ma as f,rb as D,sb as M,tb as E,za as b}from"./chunk-FZSWMAGW.js";var p=class e{transform(a,t){if(!a||!t)return null;let l=Object.keys(t);if(!l.length)return null;let n=l[0];return a[n]??null}static \u0275fac=function(t){return new(t||e)};static \u0275pipe=m({name:"validation",type:e,pure:!0})};function H(e,a){if(e&1&&(T(0),k(1,"validation")),e&2){let t=D();I(" ",A(1,1,t.errorMessages,t.errors)," ")}}var _=class e{control;errorMessages;useDirty=!1;useTouched=!0;get currentControl(){return this.control?this.control instanceof V?this.control.control:this.control:null}shouldShowErrors(){let a=this.currentControl;if(!a)return!1;let t=a.touched,l=a.dirty;return this.useDirty&&this.useTouched?a.invalid&&(t||l):this.useDirty?a.invalid&&l:this.useTouched?a.invalid&&t:a.invalid}get errors(){return this.currentControl?.errors}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=i({type:e,selectors:[["app-error"]],inputs:{control:"control",errorMessages:"errorMessages",useDirty:"useDirty",useTouched:"useTouched"},decls:2,vars:1,consts:[["role","alert",1,"px-2","text-sm","text-red-600","rounded"]],template:function(t,l){t&1&&(C(0,"div",0),g(1,H,2,4),w()),t&2&&(b(),x(l.shouldShowErrors()?1:-1))},dependencies:[p],encapsulation:2})};var $=`
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
`;var K=["*"],G=`
    ${$}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,R={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},z=(()=>{class e extends S{name="floatlabel";style=G;classes=R;static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275prov=c({token:e,factory:e.\u0275fac})}return e})();var O=new u("FLOATLABEL_INSTANCE"),q=(()=>{class e extends j{componentName="FloatLabel";_componentStyle=o(z);$pcFloatLabel=o(O,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275cmp=i({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(l,n){l&2&&F(n.cx("root"))},inputs:{variant:"variant"},features:[N([z,{provide:O,useExisting:e},{provide:L,useExisting:e}]),v([s]),y],ngContentSelectors:K,decls:1,vars:0,template:function(l,n){l&1&&(M(),E(0))},dependencies:[B,r,P],encapsulation:2,changeDetection:0})}return e})(),he=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=h({type:e});static \u0275inj=d({imports:[q,r,r]})}return e})();export{_ as a,q as b,he as c};
