const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ledger-Cl2CJW7S.js","assets/costReceipts-GSqRrYz7.js","assets/records-ucxO56sY.js","assets/zod-CoM9arUc.js","assets/decimal-CaUHonIL.js","assets/index-BAkKgaYp.js","assets/react-Coahmxxj.js","assets/index-LJvZbH4T.css","assets/facts-BmbFBj99.js","assets/ledgerCsv-CqXjSiMP.js","assets/csv-D7zDFyqe.js"])))=>i.map(i=>d[i]);
import{eF as De,f as We,eG as Me,g as ve,aG as Pe,aF as Ue,aH as Ye,cn as z,U as Ge,V as Oe,a8 as $,v as I,z as e,bM as g,a as Re,G as y,ag as xe,Y as Be,b0 as ue,co as q,cx as se,a0 as ke,eH as je,dX as Ve,eI as re,eJ as ae,eK as ce,eL as _e,eM as Ke,eN as Xe,eO as ze,eP as $e,eQ as le,bD as qe,eR as Qe,eo as Ze,dW as Je,eS as en,ac as nn,bi as Ne,bj as tn,eT as he,bk as on,Q as sn,Z as rn,cf as an,eU as cn,$ as de,cq as ln,aO as hn,eV as dn,W as Te,eW as Tn}from"./index-BAkKgaYp.js";import{d as B}from"./records-ucxO56sY.js";import{C as Ie}from"./Card-C6y14KbF.js";import{T as _,a as L,b,K as Ae}from"./Table-Bvan2mUv.js";import{C as Q,P as pe,a as u,k}from"./ContentPage-DAtt6wq8.js";import{a as Se,T as In,H as G}from"./analyze-sStEKs4p.js";import{C as x}from"./rules-gKtLza1d.js";import{C as En}from"./ContactBookButton-D-cE9NPu.js";import{w as On,r as Rn,b as un,i as Nn,c as An,d as pn}from"./pilotUi-BHGPwsNc.js";import{E as Ee}from"./ExportRecordsButton-CS1Y4NeD.js";import{T as Sn}from"./TextInput-BRBYWVPc.js";import{r as fn}from"./lifecycle-JPBmSZfL.js";import{h as mn}from"./session-poEUDWM8.js";import{D as gn,R as bn}from"./documentRetention-ClzVBGdi.js";import{E as yn}from"./events-C7FIBJb2.js";import{DEFAULT_RETENTION_DAYS as wn,RETENTION_CHOICES as Hn}from"./model-CT4ymCwx.js";import{S as Ln}from"./disclaimers-BhUYqybu.js";import{b as Cn}from"./support-CqF39c5d.js";import"./react-Coahmxxj.js";import"./zod-CoM9arUc.js";import"./decimal-CaUHonIL.js";import"./dates-BPlzL-g5.js";import"./normalize-ClromYBA.js";import"./model-Bg2jKhZc.js";import"./taxExemption-BX2Ggs4n.js";import"./vpic-DtVNMFD3.js";import"./source-BhVLjtXu.js";import"./baselineSource-C4MuIPG_.js";import"./engineInput-DWErUdgO.js";import"./cases-DClg3IWV.js";import"./redact-D9MeuWKb.js";import"./summary-DLwb-2Ue.js";import"./effectText-CeIUhEiO.js";import"./useCommitInput-90zuIFcJ.js";import"./Select-C7LxegJ2.js";import"./clipboard-QlHDvpjb.js";import"./inputRead-D3JfejHK.js";import"./links-dJB4NesY.js";const Fn={base:"Your inputs as entered.",repairs_plus_1000:"Repairs cost $1,000 more than entered.",resale_minus_10:"The car sells for 10% less than your expected resale price; percentage selling costs are recomputed at the lower price.",combined:"Both changes at once: repairs +$1,000 and resale −10%.",repairs_plus_500:"Repairs cost $500 more than entered.",buy_combined:"Repairs +$500 and a separate $500 overrun at once (new deals only).",sells_30_days_later:"Every per-day holding or financing line runs 30 more days. Added only while the deal has a per-day line."},fe=`Your own stress case (up to ${De} per deal): a change to the repairs and your price, plus a resale change (Flip) or an overrun on top of the costs (Buy), by the amounts you choose.`,Dn={yearTolerance:n=>`Model years within ${n} of the subject can be partial matches; a strong match needs the same year. Further apart: excluded.`,mileageStrongMaxDiff:n=>`A comparable within ${Number(n).toLocaleString("en-US")} miles of the subject can be a strong match.`,mileagePartialMaxDiff:n=>`Up to ${Number(n).toLocaleString("en-US")} miles apart: a partial match; more: a weak match. Prices are never adjusted for mileage.`,staleAfterDays:n=>`A price seen more than ${n} days ago is flagged stale and cannot be a strong match.`,adequateMinIncluded:n=>`“Adequate” evidence needs at least ${n} included comparables…`,adequateMinStrong:n=>`…of which at least ${n} are strong matches…`,adequateNewestMaxDays:n=>`…and the newest no older than ${n} days.`,limitedMinIncluded:n=>`${n} or more included comparables (short of adequate): “limited”. One or two: “weak”. None: “none”.`,marketAreaMiles:n=>`Comparables more than ${n} miles from the subject are outside its local market (partial match).`,outlierMinCount:n=>`Outliers are checked only when at least ${n} prices are included.`,outlierIqrMultiplier:n=>`A price more than ${n} × the interquartile range beyond the quartiles is flagged as an outlier — flagged, never removed.`,futureDateToleranceDays:n=>`Dates up to ${n} day after today count as today (time zones); later dates are excluded.`,minVinKeyLength:n=>`VINs shorter than ${n} characters (for example masked ones) are not used to spot duplicates.`},Wn={major_issue:"Major mechanical, structural or safety-system issues",title:"Title, ownership and identity",repairs:"Unknown repairs and condition",cost:"Other unknown costs and deadlines",evidence:"Price and identity evidence",minor:"Minor or cosmetic items"};function Mn(){const n=s=>({id:s.id,label:s.label,description:Fn[s.id]??fe});return{flip:Ue.map(n),buy:Pe.map(n),later:n(Ye)}}function vn(){return Object.keys(x).map(n=>({key:n,value:Number.isInteger(x[n])?Number(x[n]).toLocaleString("en-US"):String(x[n]),description:Dn[n](x[n])}))}function Pn(){return In.map(n=>({tier:n,description:Wn[n]}))}function Un(){return[G.meets,G.below,G.insufficient,G.withinBudget("12000.00").replace("$12,000","$Q"),G.overBudget("12000.00").replace("$12,000","$Q")]}function Yn(n,s){const a=Se(ve(n),{now:n,today:s}),o=a.engine;if(o.mode!=="flip")throw new Error("The flip example did not analyze in Flip Mode.");const h=o.maxPurchasePrice.kind==="ceiling"?o.maxPurchasePrice:null,d=o.ceilingSteps??[],r=h?d.find(t=>t.price===h.price):void 0,E=r?d.find(t=>B(t.price).greaterThan(B(r.price))&&t.buyerFee!==null&&r.buyerFee!==null&&t.buyerFee!==r.buyerFee):void 0,N=o.gapToTarget;return{analysis:a,bid:o.purchasePrice,resale:o.expectedResale,investedCash:o.investedCash,netResale:o.netResale,cashMargin:o.cashMargin,contingency:o.contingency,margin:o.marginAfterContingency,target:o.targetProfit,miss:N!==null&&B(N).isNegative()?B(N).negated().toFixed(2):null,economicMargin:o.economicMargin,ceiling:(h==null?void 0:h.price)??null,increment:(h==null?void 0:h.increment)??null,feeAtCeiling:(r==null?void 0:r.buyerFee)??null,cliffPrice:(E==null?void 0:E.price)??null,feeAfterCliff:(E==null?void 0:E.buyerFee)??null,marginAfterCliff:(E==null?void 0:E.marginAfterContingency)??null,breakEven:o.breakEvenResale,breakEvenWithContingency:o.breakEvenResaleWithContingency,resaleForTarget:o.resaleForTarget??null,scenarios:o.scenarios.map(t=>({id:t.id,label:t.label,value:t.value}))}}function Gn(n,s){var d;const a=Se(We(n),{now:n,today:s}),o=a.engine;if(o.mode!=="buy")throw new Error("The buy example did not analyze in Buy Mode.");const h=(d=o.scenarios.find(r=>r.id===Me.repairsPlus500))==null?void 0:d.ceiling;return{analysis:a,price:o.purchasePrice,allIn:o.allInCost,budget:o.budget,overBy:o.overUnderBudget!==null&&B(o.overUnderBudget).greaterThan(0)?o.overUnderBudget:null,ceiling:o.maxPurchasePrice.kind==="ceiling"?o.maxPurchasePrice.price:null,repairsPlus500Ceiling:(h==null?void 0:h.kind)==="ceiling"?h.price:null}}const xn=[{id:"how-definitions",title:"The numbers CurbWhiz works out"},{id:"how-ceiling",title:"The most you can pay"},{id:"how-break-even",title:"Break-even resale"},{id:"how-rounding",title:"Rounding, Unknown and N/A"},{id:"how-scenarios",title:"Downside scenarios"},{id:"how-comps",title:"Comparable prices"},{id:"how-checks",title:"How checks are ranked"},{id:"how-wording",title:"How results are worded"},{id:"how-fees",title:"Auction fee schedules"},{id:"how-examples",title:"Worked examples"},{id:"how-tests",title:"What the tests prove"}];function T({amount:n}){return e.jsx("span",{className:"num",children:Be(n)})}function Bn(n){return n.split(/(?=[A-Z])/).map((a,o)=>e.jsxs(I.Fragment,{children:[o>0&&e.jsx("wbr",{}),a]},o))}function S({children:n}){return e.jsx("code",{className:"content-formula",children:n})}function $t(){z(q.methodology);const n=Ge(),s=Oe(),{importExample:a}=$(),[o,h]=I.useState(null),d=I.useMemo(()=>{try{const i=n.now();return{flip:Yn(i,s),buy:Gn(i,s),error:null}}catch(i){return{flip:null,buy:null,error:i instanceof Error?i.message:"The worked examples could not be computed."}}},[n,s]),r=I.useMemo(()=>Mn(),[]),E=I.useMemo(()=>vn(),[]),N=i=>{const c=a(i);c.ok?ue({name:"deal",id:c.deal.id}):h(c.error)},t=d.flip,l=d.buy;return e.jsxs(Q,{eyebrow:"Methodology",title:"How the math works",lead:e.jsxs(e.Fragment,{children:["Fixed formulas, exact decimal math. Formula version ",e.jsx("span",{className:"mono",children:xe}),"."]}),children:[e.jsx(pe,{items:xn}),e.jsx(u,{id:"how-definitions",title:"The numbers CurbWhiz works out",icon:"scale",tone:"purchase",children:e.jsxs("dl",{className:"content-defs",children:[e.jsxs("dt",{children:[e.jsx(S,{children:"P"})," Purchase price"]}),e.jsx("dd",{children:"Your bid or offer (the asking price when you haven’t entered one)."}),e.jsxs("dt",{children:[e.jsx(S,{children:"F(P)"})," Buyer fee"]}),e.jsx("dd",{children:"The auction’s buyer premium at that price — from a fee schedule or the amount you enter."}),e.jsxs("dt",{children:[e.jsx(S,{children:"T(P)"})," Acquisition tax"]}),e.jsx("dd",{children:"The tax you enter: a fixed amount, a rate on the price, or a rate on the price plus every auction fee."}),e.jsx("dt",{children:e.jsx(S,{children:"A = P + F(P) + T(P) + transport + inspection + other acquisition costs"})}),e.jsx("dd",{children:"Acquisition cost."}),e.jsx("dt",{children:e.jsx(S,{children:"I = A + repairs + parts + paid labor + holding + financing"})}),e.jsx("dd",{children:"Invested cash. A loan’s principal is how you pay, not a cost, so it is never counted again; interest and loan fees are."}),e.jsx("dt",{children:e.jsx(S,{children:"N = S − E(S)"})}),e.jsx("dd",{children:"Net resale: the expected resale price S minus the selling costs at that price."}),e.jsx("dt",{children:e.jsx(S,{children:"M = N − I"})}),e.jsx("dd",{children:"Projected cash margin."}),e.jsx("dt",{children:e.jsx(S,{children:"Margin after contingency = M − B"})}),e.jsx("dd",{children:"B is the contingency you set aside: a planning allowance, not money already spent and not a statistical loss estimate."}),e.jsx("dt",{children:e.jsx(S,{children:"Economic margin = M − B − owner hours × hourly value"})}),e.jsx("dd",{children:"Shown when your own unpaid time is entered. Paid labor is a cost and is never counted twice."}),e.jsx("dt",{children:"Buy Mode: all-in cost"}),e.jsx("dd",{children:"The price plus every acquisition cost, immediate repairs and the contingency — checked against your total budget. Ongoing ownership costs (insurance, maintenance, registration renewal, fuel) are shown separately for the period you choose and never added to the budget figure."})]})}),e.jsxs(u,{id:"how-ceiling",title:"The most you can pay",icon:"gauge",tone:"accent",children:[e.jsx("p",{children:"The max bid (Flip) is the highest price on the bid grid at which the margin after contingency still reaches your target. The max price (Buy) is the highest price at which the all-in cost stays within your budget."}),e.jsxs("ul",{className:"content-list",children:[e.jsx("li",{children:"Prices are searched on the auction’s bid increments, one fee bracket at a time, and the answer is checked by recomputing every cost at that price."}),e.jsx("li",{children:"A fee bracket can make a higher bid cost more than it gains (a fee cliff), so a constant-fee shortcut would give the wrong answer."}),e.jsx("li",{children:"Buy Mode rounds the max price down to the whole cent, never up."}),e.jsx("li",{children:"When a cost the price depends on is Unknown, there is no max price yet: CurbWhiz says which line to fill in instead of guessing."})]})]}),e.jsxs(u,{id:"how-break-even",title:"Break-even resale",icon:"bars",tone:"selling",children:[e.jsxs("p",{children:["The lowest resale price at which you get your invested cash back. With selling costs of a rate ",e.jsx(S,{children:"r"})," plus a fixed ",e.jsx(S,{children:"e"}),":"]}),e.jsxs("p",{children:[e.jsx(S,{children:"Break-even = (I + e) ÷ (1 − r)"}),", and a second, conservative figure with the contingency: ",e.jsx(S,{children:"(I + B + e) ÷ (1 − r)"}),"."]})]}),e.jsx(u,{id:"how-rounding",title:"Rounding, Unknown and N/A",icon:"approx",tone:"insufficient",children:e.jsxs("ul",{className:"content-list",children:[e.jsx("li",{children:"Every line is rounded half-up to the cent; totals add the rounded lines. Display figures show whole dollars; ceilings always show their exact cents."}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unknown"})," means not entered yet. It is never treated as $0: totals that depend on it say so, and the max price waits for it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"$0"})," appears only when you entered zero."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"N/A"})," means you marked a cost as not applying. It is left out on purpose and shown as such. A tax marked N/A needs a stated reason, which is shown as a check to verify."]})]})}),e.jsxs(u,{id:"how-scenarios",title:"Downside scenarios",icon:"loss",tone:"loss",children:[e.jsx("p",{children:"Stress tests under stated changes — not probabilities. Price-dependent fees are recalculated in each one."}),e.jsxs(_,{caption:"Flip Mode scenarios",showCaption:!0,className:"content-table content-table--pairs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(L,{children:"Scenario"}),e.jsx(L,{children:"What changes"})]})}),e.jsxs("tbody",{children:[r.flip.map(i=>e.jsxs("tr",{children:[e.jsx(b,{children:i.label}),e.jsx(b,{children:i.description})]},i.id)),e.jsxs("tr",{children:[e.jsx(b,{children:r.later.label}),e.jsx(b,{children:r.later.description})]})]})]}),e.jsxs(_,{caption:"Buy Mode scenarios",showCaption:!0,className:"content-table content-table--pairs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(L,{children:"Scenario"}),e.jsx(L,{children:"What changes"})]})}),e.jsx("tbody",{children:r.buy.map(i=>e.jsxs("tr",{children:[e.jsx(b,{children:i.label}),e.jsx(b,{children:i.description})]},i.id))})]}),e.jsx("p",{className:"muted text-sm",children:fe})]}),e.jsxs(u,{id:"how-comps",title:"Comparable prices",icon:"search",tone:"title",children:[e.jsx("p",{children:"These rules decide which of the prices you enter are used and how strong the evidence is. They are usability heuristics, not statistics: there is no confidence percentage, and dealer and private-party prices are kept apart."}),e.jsxs(_,{caption:"Comparable rules",className:"content-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(L,{children:"Rule"}),e.jsx(L,{numeric:!0,children:"Value"}),e.jsx(L,{children:"Meaning"})]})}),e.jsx("tbody",{children:E.map(i=>e.jsxs("tr",{children:[e.jsx(b,{children:e.jsx("span",{className:"mono text-xs",children:Bn(i.key)})}),e.jsx(b,{numeric:!0,children:i.value}),e.jsx(b,{children:i.description})]},i.key))})]})]}),e.jsxs(u,{id:"how-checks",title:"How checks are ranked",icon:"check-circle",tone:"gain",children:[e.jsx("p",{children:"“Before you buy” shows the top three open checks. Items that would stop the purchase come first, then by likely money at risk:"}),e.jsx("ol",{className:"content-list content-list--numbered",children:Pn().map(i=>e.jsx("li",{children:i.description},i.tier))}),e.jsx("p",{className:"muted text-sm",children:"Each check says why it is where it is, and whether it rests on a seller statement or an auction declaration rather than a confirmed fact."})]}),e.jsxs(u,{id:"how-wording",title:"How results are worded",icon:"document",tone:"other",children:[e.jsx("p",{children:"The result describes your numbers, never the car. These are the only headlines:"}),e.jsx("ul",{className:"content-list",children:Un().map(i=>e.jsxs("li",{children:["“",i,"”"]},i))}),e.jsx("p",{children:"CurbWhiz never calls a car or a deal good, never says to buy, and never turns missing data into a clean record — an empty recall or history lookup is not proof of anything. Money and verification stay separate: a margin that meets your target confirms nothing about the car."})]}),e.jsxs(u,{id:"how-fees",title:"Auction fee schedules",icon:"gavel",tone:"fee",children:[e.jsxs("ul",{className:"content-list",children:[e.jsx("li",{children:"The built-in schedules are synthetic examples with invented fees. They set fees only on the worked examples, never on your own deals."}),e.jsx("li",{children:"On your own auction deal, enter the buyer fee yourself, or type in the auction’s own fee table from its published terms; a table you enter is due for a re-check after 90 days."}),e.jsx("li",{children:"A fee table that is past its review date, or doesn’t match your buyer category and payment method, is not used until you check it again."})]}),e.jsx(g,{tone:"info",title:"Supported coverage",children:Re})]}),e.jsxs(u,{id:"how-examples",title:"Worked examples",icon:"flask",tone:"inspection",children:[e.jsx("p",{className:"muted text-sm",children:"Computed on this page from the same engine as your deals. They are synthetic: the fees and the tax treatment are invented for the arithmetic."}),d.error&&e.jsx(g,{tone:"warning",title:"The examples couldn’t be computed",children:d.error}),o&&e.jsx(g,{tone:"warning",title:"The example isn’t available",children:o}),t&&e.jsx(Ie,{title:"Auction flip",eyebrow:"Flip Mode · Synthetic example",footer:e.jsx(y,{size:"sm",iconEnd:"arrow-right",onClick:()=>N("flip"),children:"Open this example"}),children:e.jsxs("div",{className:"stack stack--sm",children:[e.jsxs("p",{children:["A bid of ",e.jsx(T,{amount:t.bid})," and an expected resale of ",e.jsx(T,{amount:t.resale}),": invested cash ",e.jsx(T,{amount:t.investedCash}),", net resale"," ",e.jsx(T,{amount:t.netResale}),", cash margin ",e.jsx(T,{amount:t.cashMargin}),", and margin after the ",e.jsx(T,{amount:t.contingency})," contingency"," ",e.jsx(T,{amount:t.margin}),t.miss?e.jsxs(e.Fragment,{children:[" ","— ",e.jsx(T,{amount:t.miss})," short of the ",e.jsx(T,{amount:t.target})," target."]}):"."]}),e.jsxs("p",{children:["Max bid ",e.jsx(T,{amount:t.ceiling})," on a ",e.jsx(T,{amount:t.increment})," grid: the buyer fee there is ",e.jsx(T,{amount:t.feeAtCeiling}),t.cliffPrice&&e.jsxs(e.Fragment,{children:[", but at ",e.jsx(T,{amount:t.cliffPrice})," it rises to ",e.jsx(T,{amount:t.feeAfterCliff})," and the margin falls to ",e.jsx(T,{amount:t.marginAfterCliff})," — the fee cliff"]}),"."]}),e.jsxs("p",{children:["Break-even resale ",e.jsx(T,{amount:t.breakEven}),", or ",e.jsx(T,{amount:t.breakEvenWithContingency})," with the contingency. To reach the target at this bid the car must sell for ",e.jsx(T,{amount:t.resaleForTarget}),"."]}),e.jsx(Ae,{rows:t.scenarios.map(i=>({key:i.id,label:i.label,value:e.jsx(T,{amount:i.value})}))})]})}),l&&e.jsx(Ie,{title:"Private purchase",eyebrow:"Buy Mode · Synthetic example",footer:e.jsx(y,{size:"sm",iconEnd:"arrow-right",onClick:()=>N("buy"),children:"Open this example"}),children:e.jsxs("div",{className:"stack stack--sm",children:[e.jsxs("p",{children:["At the ",e.jsx(T,{amount:l.price})," asking price the all-in cost is ",e.jsx(T,{amount:l.allIn}),l.overBy?e.jsxs(e.Fragment,{children:[", ",e.jsx(T,{amount:l.overBy})," over the ",e.jsx(T,{amount:l.budget})," budget"]}):null,"."]}),e.jsxs("p",{children:["Max price within the budget: ",e.jsx(T,{amount:l.ceiling}),", rounded down to the cent. If the repair quote rises by ",e.jsx(T,{amount:"500.00"}),", it falls to"," ",e.jsx(T,{amount:l.repairsPlus500Ceiling}),"."]}),e.jsx("p",{className:"muted text-sm",children:"Affordability is not market value: the max price says what fits your budget, not what the car is worth."})]})})]}),e.jsx(u,{id:"how-tests",title:"What the tests prove",icon:"check",tone:"transport",children:e.jsxs("ul",{className:"content-list",children:[e.jsx("li",{children:"Automated tests check that the arithmetic is right: tax bases, percentages, rounding, financing, fee cliffs, bid increments, Unknown versus zero, and that the report shows the same numbers as the screen."}),e.jsx("li",{children:"They do not show that a resale price will be reached. Passing tests is not a prediction accuracy rate."}),e.jsx("li",{children:"A change to any formula output changes the formula version, so a saved snapshot always names the formulas it used."})]})})]})}const kn="https://vpic.nhtsa.dot.gov",jn="https://api.nhtsa.gov",Vn="https://www.fueleconomy.gov",_n="https://www.nhtsa.gov",Kn="https://api.openai.com",Xn="https://api.revenuecat.com",zn=Object.freeze([{id:"obd_scanner",origin:null,name:"Your selected local Wi-Fi OBD adapter",what:"Fixed read-only standard diagnostic requests over Wi-Fi. Readings stay on device unless separately included in approved cloud sync. No ECU write or clearing command.",when:"Only after you confirm your parked vehicle and enter your own adapter address. Requires the native scanner plugin and compatible physical hardware.",targets:["native"],browserConnects:[]},{id:"account_data",origin:se,name:"Configured CurbWhiz account/data server, Supabase Auth and enabled providers",what:"Sign-in sends your email and code, or an existing account password when that option is enabled, to our account service and Supabase for verification. Passwords are not saved by the app or added to diagnostics, deals or backups. Enabled market searches send vehicle criteria, ZIP and radius to MarketCheck. A vehicle history report sends the VIN you entered, and nothing else, to our server and to VINData (VIN Data Products LLC, an approved NMVTIS data provider) only when you tap Run after the consent list; the returned facts are shown in the app for 90 days and kept only on this device, with a link to the VINData-branded report. Report purchases and included reports are tied to your account on our server. Saved searches retain approved criteria/results. An approved Pro connection links a random purchase ID to your account and verifies subscription status with RevenueCat. Signing in alone uploads no deal or file. Separately approved selected-deal sync sends selected financial records, notes and supported retained files to private Supabase storage. Optional push registration sends an Apple device token; push text contains no VIN, financial figures or location. Access tokens stay in memory. On iOS, a refresh credential is kept in this device’s Keychain to restore sign-in after a restart; signing out or Delete everything removes it. Web sign-in lasts for the current session.",when:"When you request sign-in, registration, deletion with a fresh code, a history report, a lookup, a saved search or an approved subscription connection. Retention and paid lookups need separate rights and allowances. Device sync requires separate selection and approval. Provider licensing and activation still apply.",targets:["static","server","native"],browserConnects:se?["static","native"]:[]},{id:"support_link",origin:null,name:"Apple billing-help pages and your chosen mail app",what:"Apple pages receive a normal page visit. A billing email draft contains the issue category, app/build version and purchase-check state; you choose what to add and send. No saved deal or payment-card details are included.",when:"Only when you tap a billing-help link or open an email draft. Copying a template sends nothing.",targets:["static","server","native"],browserConnects:[]},{id:"vpic",origin:kn,name:"NHTSA vPIC (the U.S. government’s VIN decoder)",what:"The VIN, and nothing else.",when:"Only when you press Decode.",targets:["static","server","native"],browserConnects:["static","native"]},{id:"guidance_links",origin:null,name:"Official consumer, inspection and EV guidance pages",what:"A normal page visit to the official guidance provider. No saved deal, VIN or inspection notes are included in these guidance links.",when:"Only when you tap a guidance link. Reading the in-app guidance sends nothing.",targets:["static","server","native"],browserConnects:[]},{id:"model_research",origin:jn,name:"NHTSA’s public U.S. recall, complaint and crash-rating API",what:"The model year and make/model (the official selections, or the ones NHTSA’s own decoder returned), plus normal network request data. No VIN, deal, file, account token or listing text — matching complaints to your car’s build happens on this device.",when:"When you load official makes/models or request model campaigns in Model recall research, and once after you decode a VIN, when the Safety card reads that model year’s recalls, owner complaints and 5-Star ratings (again only if you decode a different VIN or tap Read again).",targets:["static","server","native"],browserConnects:["static","server","native"]},{id:"fuel_economy",origin:Vn,name:"fueleconomy.gov (the U.S. EPA and Department of Energy)",what:"The model year, make and model, and the fueleconomy.gov menu entries that narrow it down (such as “Civic 4Dr”), plus normal network request data. No VIN, price, location or other deal details.",when:"Only when CurbWhiz looks up the EPA fuel economy and annual fuel cost for a car you decoded — once per car, and again if you pick a different version.",targets:["static","server","native"],browserConnects:["static","server","native"]},{id:"recall_link",origin:_n,name:"NHTSA recall lookup (nhtsa.gov)",what:"The VIN, in the address of the page that opens.",when:"Only when you tap the recall lookup link; it opens nhtsa.gov in a new tab.",targets:["static","server","native"],browserConnects:[]},{id:"listing_links",origin:null,name:"Listing links you save",what:"Nothing: CurbWhiz never fetches them.",when:"A saved link opens in a new tab only when you tap it.",targets:["static","server","native"],browserConnects:[]},{id:"comps_search",origin:null,name:"Cars.com, CarGurus and Autotrader searches",what:"The year, make and model, in the address of the search page that opens. No VIN, price, mileage, location or other deal details. CurbWhiz reads nothing back from these sites.",when:"Only when you tap one of the “Find comparables” buttons; the search opens in your browser.",targets:["static","server","native"],browserConnects:[]},{id:"value_search",origin:null,name:"KBB and Edmunds value pages",what:"The year, make and model, in the address of the page that opens (or nothing, when the car isn’t entered yet). No VIN, price, mileage, location or other deal details. CurbWhiz reads nothing back from these sites.",when:"Only when you tap one of the “Get a value” buttons in the Goal step; the page opens in your browser.",targets:["static","server","native"],browserConnects:[]},{id:"fee_source_links",origin:null,name:"Auction fee pages (the “Source” link on a published fee schedule, e.g. iaai.com)",what:"A normal page visit to the auction’s public fee page. No deal, VIN, price or bid is included.",when:"Only when you tap “Source” on a published fee schedule; the page opens in your browser.",targets:["static","server","native"],browserConnects:[]},{id:"host",origin:null,name:"The host that serves this site (GitHub Pages for the public build)",what:"The standard request data every browser sends to load a page: your IP address, browser version and the address requested. Your deals are not part of it.",when:"When the page and its files load.",targets:["static","server"],browserConnects:[]},{id:"app_store",origin:Xn,name:"Apple’s App Store and RevenueCat (the subscription service the app uses)",what:"An app ID that starts anonymous, purchase receipts and device details. If you approve an enabled account connection, a random purchase ID links Pro to that account. This connection does not send your email, deals, VINs or files to RevenueCat.",when:"When checking or restoring Pro, subscribing, or connecting your purchase after approval.",targets:["native"],browserConnects:[]},{id:"icloud_drive",origin:null,name:"Your own iCloud Drive (Apple), only while iCloud Drive is on for CurbWhiz",what:"One backup file of your saved deals — the same file “Back up all deals” makes — in Files › iCloud Drive › CurbWhiz. Photos and documents are not in it.",when:"After a saved deal changes, at most every 10 minutes. iOS syncs the file to your iCloud; CurbWhiz has no server copy. Turn it off in the iPhone’s Settings › your name › iCloud.",targets:["native"],browserConnects:[]},{id:"apple_maps",origin:null,name:"Apple Maps (Apple), through iOS",what:"The two places of a trip you ask about — the car’s location as you typed it and your starting place or, if you tap “Use distance to …”, one reading of where you are — to work out the driving distance and time. Never your deals or VINs.",when:"Only when you ask for the distance for a transport estimate. iOS asks before CurbWhiz can use your location; the reading isn’t saved.",targets:["native"],browserConnects:[]},{id:"extraction",origin:Kn,name:"OpenAI GPT-6 Luna, through the CurbWhiz server",what:"The listing screenshot you choose to read, or the exact seller-message text you review for Seller Chat Assistant. Seller chat sends text only, not its screenshot, your budget or deal files. Detected contacts are removed on device; redaction is best effort. A server explicitly configured for the legacy Anthropic listing provider sends listing screenshots to Anthropic instead; seller chat uses OpenAI. No automatic provider fallback is used.",when:"Only after you approve Read with cloud AI for that image or explicitly approve the exact seller-message text in a configured native build, or press Extract in a configured server build. Never on the static build. Account IDs and shared usage counters enforce cloud limits; manual tools remain available.",targets:["server","native"],browserConnects:[]}]),$n="No advertising analytics or cookies. Configured online services send the information described above. Selected-deal sync, cloud backup, exports and sharing can copy deal information off this device.",qn="A factual description, not legal terms — under review.";function Qn(n){return zn.filter(s=>s.targets.includes(n))}const K="DELETE";function Zn(n){return typeof n.destroy=="function"}function Jn(n){return typeof n.keys=="function"}function et(n,s){return new Promise(a=>{try{const o=n.deleteDatabase(s);o.onsuccess=()=>a(!0),o.onerror=()=>a(!1),o.onblocked=()=>a(!1)}catch{a(!1)}})}async function nt(n){var a,o,h;const s=un();try{const d=n.native===void 0?ke():n.native;let r=!1;try{(a=d==null?void 0:d.prepareToErase)==null||a.call(d)}catch{r=!0}je(),fn();const E=n.store.eraseAll();try{(await Promise.allSettled([Promise.resolve().then(()=>{var R,A;return(A=(R=n.store).waitForWrites)==null?void 0:A.call(R)}),On()])).some(R=>R.status==="rejected")&&(r=!0)}catch{r=!0}Ve(),re(n.local),re(n.session,ae);let N=r,t=r?"Some background tasks could not be stopped. Reopen CurbWhiz, then retry Delete everything.":null;try{if(Zn(n.blobStore))await n.blobStore.destroy();else if(Jn(n.blobStore))for(const c of await n.blobStore.keys())await n.blobStore.remove(c)}catch(c){N=!0,t=c instanceof Error&&c.message===ce?ce:"The saved files could not be deleted. Close other CurbWhiz tabs, then try again."}if(n.indexedDB)for(const c of _e)c!=="dealpilot-blobs"&&!await et(n.indexedDB,c)&&(N=!0,t??(t="Some saved CurbWhiz data could not be deleted. Close other CurbWhiz tabs, then try again."));try{const c=await((o=n.serviceWorker)==null?void 0:o.getRegistrations())??[],R=n.serviceWorkerScope??(typeof window>"u"?null:new URL("/dealpilot-web/",window.location.href).href);if((await Promise.all(c.filter(p=>p.scope===R).map(p=>p.unregister()))).includes(!1)&&(await n.serviceWorker.getRegistrations()).some(p=>p.scope===R))throw Error("worker_remains")}catch{N=!0,t??(t="CurbWhiz’s offline worker could not be removed. Close other CurbWhiz tabs, then try again.")}try{const R=(await((h=n.caches)==null?void 0:h.keys())??[]).filter(p=>Ke.some(f=>p.startsWith(f))),A=await Promise.all(R.map(p=>n.caches.delete(p)));if(A.includes(!1)){const p=await n.caches.keys();if(R.some((f,m)=>!A[m]&&p.includes(f)))throw Error("cache_remains")}}catch{N=!0,t??(t="CurbWhiz’s offline files could not be deleted. Close other CurbWhiz tabs, then try again.")}d&&!await d.eraseNativeCopies().catch(()=>!1)&&(N=!0,t??(t="Some of CurbWhiz’s files on this iPhone could not be deleted. Try again.")),Rn(),mn(),Xe(),ze(),$e(n.local);const l=[...le(n.local),...le(n.session,ae)];if(l.length===0&&!N)return{ok:!0,deals:E.length};const i=t??`${l.length===1?"One stored item":`${l.length} stored items`} could not be removed. Close other CurbWhiz tabs, then try again.`;return{ok:!1,deals:E.length,message:i,remainingKeys:l,filesRemain:N}}finally{s()}}function tt(n="Until you delete them, or this browser clears the site’s data."){const s=Hn.map(h=>`${h}`),a=`${s.slice(0,-1).join(", ")} or ${s[s.length-1]} days`,o=gn.filter(h=>h.value!=="until_removed").map(h=>h.value).join(", ");return[{key:"deals",what:"Saved deals",kept:n},{key:"contacts",what:"Private service contacts",kept:"Until you remove them or use Delete everything. Contact details, source and permission records are in a separate private contact backup, not deal backups, reports or snapshots. Previously exported files and device backups may retain older copies."},{key:"drafts",what:"New deals you haven’t typed into",kept:"Not saved at all until your first edit."},{key:"snapshots",what:"Snapshots of a deal",kept:`Up to ${qe} ordinary snapshots per deal: the first and newest are kept. Shared report snapshots and pinned snapshots are also kept until you delete them or the deal; device storage limits still apply.`},{key:"files",what:"Screenshots and documents",kept:`Listing screenshots: ${a} (${wn} unless you change it). Evidence document/photo uploads: ${o} days, or until you remove them; the picker shows the chosen period. Expired files are removed when CurbWhiz runs cleanup, including at startup or when its files view is opened. Removal can wait until you next use the app. A file you choose not to keep is used once and not stored. A screenshot is sent for reading only after you approve cloud AI in a configured native build, or press Extract in a configured server build. Static web builds never upload screenshots for reading.`},{key:"cover",what:"Car photos",kept:"A cover photo per deal, stored on this device only, until you remove it or delete the deal. Never in reports, shared text or snapshots — only on a deal-card image when you tick “Include my car photo”; backups carry the deal, not the photo."},{key:"receipts",what:"Cost receipts",kept:"A photo or PDF per cost line, stored on this device only, until you remove it or delete the deal. Never in reports, shared text, snapshots or the ledger CSV; backups carry the deal, not the receipt."},{key:"backups",what:"Backups and files you download",kept:"Wherever you save them. CurbWhiz keeps no copy anywhere else."},{key:"streak",what:"Your check-day streak",kept:`The dates of your last ${Qe} check days, stored on this device only. It is not part of deal files or backups. Delete everything clears it.`},{key:"events",what:"Pilot usage log (pilot mode only)",kept:`The newest ${yn.toLocaleString("en-US")} events, only while pilot mode is on; never sent.`}]}function ot(n){return{lead:"Your deals stay on this device. Optional sign-in, history reports and market lookups do not upload or synchronize them. Everything below lives in this browser until you delete it.",storageLabel:"This site’s browser storage",storageUnknown:"Not reported by this browser",keptAnswer:null,askToKeep:!0,noDownloads:"This browser can’t create downloads.",eraseBody:"Removes every deal, snapshot, file, service contact, backup date, setting and pilot record CurbWhiz keeps in this browser. Other websites’ data is not touched. This can’t be undone.",eraseDialog:s=>`Every deal, snapshot, service contact and file CurbWhiz saved in this browser will be removed. Type ${s} to confirm.`,dealsKept:"Until you delete them, or this browser clears the site’s data."}}const it="Real flips only. No receipts, photos or full VINs.",st=[{id:"data-stored",title:"What is stored here"},{id:"data-leaves",title:"What leaves this device"},{id:"data-kept",title:"How long things are kept"},{id:"data-erase",title:"Delete everything"}];function rt(){try{return globalThis.sessionStorage??null}catch{return null}}function j(n){return`${n.toLocaleString("en-US")} ${n===1?"file":"files"}`}function X(n){return(Number.isFinite(n)&&n>=1073741824?`${(n/1073741824).toLocaleString("en-US",{maximumFractionDigits:1})} GB`:cn(n)).replace(/(\d) (?=[A-Za-z])/g,"$1 ")}function at(){const{deals:n}=$(),s=Ne(),a=I.useMemo(()=>[...an(n)],[n]),[o,h]=I.useState(0),d=I.useMemo(()=>({keys:a,blobStore:s,attempt:o}),[a,s,o]),r=I.useRef(d);r.current=d;const[E,N]=I.useState(null);I.useEffect(()=>{let l=!0;const i=()=>l&&r.current===d;return(async()=>{const c={available:0,missing:0,unchecked:0,bytes:0};for(const R of a){if(!i())return;try{const A=await(s.getStrict?s.getStrict(R):s.get(R));if(!i())return;A===void 0?s.getStrict?c.missing++:c.unchecked++:!(A instanceof Blob)||!Number.isFinite(A.size)||A.size<0?c.unchecked++:(c.available++,c.bytes+=A.size)}catch{c.unchecked++}}i()&&N({scope:d,...c})})(),()=>{l=!1}},[d,a,s]);const t=(E==null?void 0:E.scope)===d?E:null;return{count:a.length,checking:t===null,available:(t==null?void 0:t.available)??0,missing:(t==null?void 0:t.missing)??0,unchecked:(t==null?void 0:t.unchecked)??0,bytes:(t==null?void 0:t.bytes)??0,retry:()=>h(l=>l+1)}}function qt(){z(q.data);const n=Ze(),s=Je(),a=en(),o=at(),{deals:h}=$(),d=Oe(),r=nn(),E=Ne(),{toast:N}=tn(),t=I.useMemo(()=>({store:r,blobStore:E}),[r,E]),l=r.getDataEpoch(),i=I.useMemo(()=>({owner:t,epoch:l}),[t,l]),c=I.useRef(i);c.current=i;const R=I.useRef(!1),[A,p]=I.useState(void 0),f=I.useRef(null),m=I.useRef(null),[me,Z]=I.useState(null),[ge,V]=I.useState(null),v=me===i,be=ge===i,[ye,C]=I.useState(!1),[J,F]=I.useState(""),[we,ee]=I.useState(null),D=we===t,[P,W]=I.useState(null),ne=(P==null?void 0:P.owner)===t&&P.epoch===l?P.message:null,He=Nn(An()),Le=Qn(ln),w=ot();I.useLayoutEffect(()=>(R.current=!0,()=>{R.current=!1,f.current=null,m.current=null}),[]),I.useLayoutEffect(()=>{var O;((O=m.current)==null?void 0:O.owner)!==t&&(C(!1),F(""),W(null))},[i,t]);const Ce=w.keptAnswer??(a.persisted===!0?"Yes — this browser has agreed to keep CurbWhiz’s data.":a.persisted===!1?"Not yet. The browser may clear the data when space runs low.":"This browser doesn’t say."),te=async()=>{const[{moneyLedger:O},{exportLedgerCsv:H}]=await Promise.all([de(()=>import("./ledger-Cl2CJW7S.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),de(()=>import("./ledgerCsv-CqXjSiMP.js"),__vite__mapDeps([9,10,2,3,4,5,6,7,8]))]);return H(O(h,d),h)},oe=async()=>{var M,U;if(!R.current||c.current!==i||r.getDataEpoch()!==l||((M=f.current)==null?void 0:M.scope)===i||((U=m.current)==null?void 0:U.owner)===t)return;const O={scope:i};f.current=O;const H=()=>R.current&&c.current===i&&r.getDataEpoch()===l&&f.current===O;Z(i),V(null);try{const Y=await n.download(!0);if(!H())return;V(Y?null:i),Y&&N({message:"Backup saved or shared. Keep it somewhere safe.",tone:"meets"})}catch{H()&&V(i)}finally{f.current===O&&(f.current=null,R.current&&c.current===i&&Z(null))}},Fe=async()=>{var U,Y;if(!R.current||c.current!==i||r.getDataEpoch()!==l||((U=f.current)==null?void 0:U.scope)===i||((Y=m.current)==null?void 0:Y.owner)===t)return;const O={owner:t};m.current=O;const H=()=>R.current&&c.current.owner===t&&m.current===O;ee(t),W(null);const M=typeof navigator<"u"?navigator:void 0;try{const ie=await nt({store:r,local:hn(),session:rt(),blobStore:E,serviceWorker:M&&"serviceWorker"in M?M.serviceWorker:null,caches:typeof caches<"u"?caches:null,indexedDB:typeof indexedDB<"u"?indexedDB:null});if(!H()||r.getDataEpoch()!==l+1)return;if(!ie.ok){W({owner:t,epoch:r.getDataEpoch(),message:ie.message});return}dn(),C(!1),F(""),N({message:"Everything CurbWhiz stored on this device was deleted.",tone:"info"}),ue({name:"home"})}catch{H()&&(r.getDataEpoch()===l||r.getDataEpoch()===l+1)&&W({owner:t,epoch:r.getDataEpoch(),message:"Deletion could not finish. Reopen CurbWhiz, then retry Delete everything."})}finally{m.current===O&&(m.current=null,R.current&&c.current.owner===t&&(ee(null),r.getDataEpoch()!==l&&r.getDataEpoch()!==l+1&&(C(!1),F(""))))}};return e.jsxs(Q,{eyebrow:"Privacy · On this device",title:"Your data",lead:w.lead,children:[e.jsx(pe,{items:st}),e.jsxs(u,{id:"data-stored",title:"What is stored here",icon:"lock",tone:"title",children:[e.jsx(En,{}),e.jsx("p",{children:"Private service contacts are backed up separately from deals. Open the contact book to export or restore its private backup."}),he,he,e.jsx(Ae,{rows:[{key:"deals",label:"Saved deals",value:String(n.dealCount)},{key:"snapshots",label:"Snapshots",value:String(n.snapshotCount)},{key:"files",label:"Screenshots and documents",value:k(o.checking?"Checking device files…":`${j(o.available)} available · ${o.unchecked?"total size unknown":X(o.bytes)}`),note:`${j(o.count)} referenced by saved deals`},{key:"meter",label:"Deal storage",value:k(s.text),note:`${s.reading.usedChars.toLocaleString("en-US")} of about ${s.reading.budgetChars.toLocaleString("en-US")} characters`},{key:"estimate",label:w.storageLabel,value:k(s.estimate?`${X(s.estimate.usage)} used of ${X(s.estimate.quota)}`:w.storageUnknown)},{key:"persisted",label:"Kept when space runs low",value:Ce},{key:"backup",label:"Last backup",value:k(n.lastBackupAt?on(n.lastBackupAt):"Never")}]}),!o.checking&&(o.missing>0||o.unchecked>0)&&e.jsxs(g,{tone:"warning",title:"Some files need attention",live:!0,action:e.jsx(y,{onClick:o.retry,children:"Check files again"}),children:[o.missing>0&&e.jsxs("p",{children:[j(o.missing)," not found on this device. Deal backups include file references, not file contents. Keep or restore the originals."]}),o.unchecked>0&&e.jsxs("p",{children:[j(o.unchecked)," could not be checked. Unlock device storage and retry. No files were changed."]})]}),s.warn&&e.jsx(g,{tone:"warning",title:"Deal storage is filling up",children:"Back up your deals, then delete old snapshots or deals you no longer need."}),e.jsxs("div",{className:"content-actions",children:[e.jsx(y,{variant:"primary",icon:"download",onClick:()=>void oe(),disabled:v||D,loading:v,loadingLabel:"Preparing backup…",children:"Back up all deals"}),w.askToKeep&&a.persisted!==!0&&e.jsx(y,{onClick:async()=>{p(await a.request())},children:"Ask this browser to keep my deals"})]}),e.jsxs("p",{className:"muted text-sm",children:["Backup size: ",n.estimatedSize(!0),". Photos, receipts and documents stay on this device — backups don’t include them."]}),e.jsxs("div",{className:"content-actions content-actions--ledger",children:[e.jsx(Ee,{icon:"download",label:"Export ledger CSV",build:async()=>(await te()).deals}),e.jsx(Ee,{icon:"table",label:"Export monthly CSV",build:async()=>(await te()).months})]}),e.jsx("p",{className:"muted text-sm",children:it}),be&&e.jsx(g,{tone:"warning",title:"The backup wasn’t saved",children:"Try saving again and choose a safe location or share destination. Your deals are unchanged."}),A!==void 0&&e.jsx(g,{tone:A?"meets":"info",live:!0,children:A===!0?"This browser agreed to keep CurbWhiz’s data.":A===!1?"This browser didn’t agree. Backups are the safe way to keep your deals.":"This browser doesn’t support the request. Backups are the safe way to keep your deals."})]}),e.jsxs(u,{id:"data-leaves",title:"What leaves this device",icon:"upload",tone:"transport",children:[e.jsx("p",{className:"muted text-sm",children:qn}),e.jsx("ul",{className:"content-origins",children:Le.map(O=>e.jsxs("li",{className:"content-origin",children:[e.jsxs("p",{className:"content-origin__name",children:[e.jsx("strong",{children:O.name}),O.origin&&e.jsx("span",{className:"mono text-xs content-origin__host",children:O.origin.replace(/^https:\/\//,"")})]}),e.jsxs("p",{className:"content-origin__row",children:[e.jsx("span",{className:"caption",children:"What"})," ",e.jsx("span",{children:O.what})]}),e.jsxs("p",{className:"content-origin__row",children:[e.jsx("span",{className:"caption",children:"When"})," ",e.jsx("span",{children:O.when})]})]},O.id))}),e.jsx("p",{children:$n}),He&&e.jsx(g,{tone:"info",title:"Shared web address",children:pn})]}),e.jsx(u,{id:"data-kept",title:"How long things are kept",icon:"clock",tone:"holding",children:e.jsx("dl",{className:"content-retention",children:tt(w.dealsKept).map(O=>e.jsxs("div",{className:"content-retention__row",children:[e.jsx("dt",{children:O.what}),e.jsx("dd",{children:O.kept})]},O.key))})}),e.jsxs(u,{id:"data-erase",title:"Delete everything",icon:"trash",tone:"loss",children:[e.jsx("p",{children:w.eraseBody}),e.jsx("div",{className:"content-actions",children:e.jsx(y,{variant:"danger",icon:"trash",onClick:()=>C(!0),children:"Delete everything on this device"})})]}),e.jsx(sn,{open:ye,onClose:()=>{D||(C(!1),F(""),W(null))},title:"Delete everything on this device?",description:w.eraseDialog(K),footer:e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:()=>{C(!1),F(""),W(null)},disabled:D,children:"Cancel"}),e.jsx(y,{variant:"danger",onClick:()=>void Fe(),disabled:J.trim()!==K||D||v,loading:D,loadingLabel:"Deleting…",children:"Delete everything"})]}),children:e.jsxs("div",{className:"stack stack--sm",children:[e.jsx("div",{className:"content-actions",children:e.jsx(y,{icon:"download",onClick:()=>void oe(),disabled:v||D,loading:v,loadingLabel:"Preparing backup…",children:"Download a backup first"})}),e.jsx(rn,{label:`Type ${K} to confirm`,children:e.jsx(Sn,{value:J,onValueChange:F,autoComplete:"off",autoCapitalize:"characters",spellCheck:!1})}),ne&&e.jsx(g,{tone:"below",title:"Not everything was deleted",live:!0,children:ne})]})})]})}const ct=`CurbWhiz — third-party notices

The following copyright and license notices cover included open-source libraries, fonts, native SDKs and related tooling. Not every component is used in every build. Inclusion does not imply endorsement of CurbWhiz.

@anthropic-ai/sdk 0.133.0 — MIT
================================================================

Copyright 2023 Anthropic, PBC.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@babel/runtime 7.29.10 — MIT
================================================================

MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/app 8.1.2 — MIT
================================================================

Copyright 2020-present Ionic
https://ionic.io

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/core 8.5.3 — MIT
================================================================

MIT License

Copyright (c) 2017-present Drifty Co.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@capacitor/filesystem 8.1.4 — MIT
================================================================

MIT License

Copyright (c) 2025 Ionic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@capacitor/haptics 8.0.2 — MIT
================================================================

Copyright 2020-present Ionic
https://ionic.io

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/keyboard 8.0.6 — MIT
================================================================

Copyright 2020-present Ionic
https://ionic.io

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/local-notifications 8.3.1 — MIT
================================================================

Copyright 2020-present Ionic
https://ionic.io

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/share 8.0.3 — MIT
================================================================

Copyright 2020-present Ionic
https://ionic.io

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/splash-screen 8.0.2 — MIT
================================================================

Copyright 2020-present Ionic
https://ionic.io

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@capacitor/synapse 1.0.4 — ISC
================================================================

MIT License

Copyright (c) 2025 Ionic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/aix-ppc64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/android-arm 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/android-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/android-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/darwin-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/darwin-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/freebsd-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/freebsd-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-arm 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-ia32 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-loong64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-mips64el 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-ppc64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-riscv64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-s390x 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/linux-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/netbsd-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/netbsd-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/openbsd-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/openbsd-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/openharmony-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/sunos-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/win32-arm64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/win32-ia32 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@esbuild/win32-x64 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@fontsource-variable/geist 5.3.0 — OFL-1.1
================================================================

Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font) Geist-Italic[wght].ttf: Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.

@fontsource-variable/geist-mono 5.3.0 — OFL-1.1
================================================================

Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git) GeistMono-Italic[wght].ttf: Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.

@hono/node-server 2.1.5 — MIT
================================================================

MIT License

Copyright (c) 2022 - present, Yusuke Wada and Hono contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@revenuecat/purchases-capacitor 13.7.3 — MIT
================================================================

MIT License

Copyright (c) 2023 RevenueCat, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@revenuecat/purchases-typescript-internal-esm 19.10.0 — MIT
================================================================

MIT License

Copyright (c) 2019 RevenueCat, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@stablelib/base64 1.0.1 — MIT
================================================================

This software is licensed under the MIT license:

Copyright (C) 2016 Dmitry Chestnykh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

decimal.js 10.6.0 — MIT
================================================================

The MIT Licence.\r
\r
Copyright (c) 2025 Michael Mclaughlin\r
\r
Permission is hereby granted, free of charge, to any person obtaining\r
a copy of this software and associated documentation files (the\r
'Software'), to deal in the Software without restriction, including\r
without limitation the rights to use, copy, modify, merge, publish,\r
distribute, sublicense, and/or sell copies of the Software, and to\r
permit persons to whom the Software is furnished to do so, subject to\r
the following conditions:\r
\r
The above copyright notice and this permission notice shall be\r
included in all copies or substantial portions of the Software.\r
\r
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,\r
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\r
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\r
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\r
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\r
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

esbuild 0.28.2 — MIT
================================================================

MIT License

Copyright (c) 2020 Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

fast-sha256 1.3.0 — Unlicense
================================================================

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>

fsevents 2.3.3 — MIT
================================================================

MIT License
-----------

Copyright (C) 2010-2020 by Philipp Dunkel, Ben Noordhuis, Elan Shankar, Paul Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

hono 4.13.13 — MIT
================================================================

MIT License

Copyright (c) 2021 - present, Yusuke Wada and Hono contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

js-tokens 4.0.0 — MIT
================================================================

The MIT License (MIT)

Copyright (c) 2014, 2015, 2016, 2017, 2018 Simon Lydell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

json-schema-to-ts 3.1.1 — MIT
================================================================

MIT License

Copyright (c) 2020 Thomas Aribart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

loose-envify 1.4.0 — MIT
================================================================

The MIT License (MIT)

Copyright (c) 2015 Andres Suarez <zertosh@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

react 18.3.1 — MIT
================================================================

MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

react-dom 18.3.1 — MIT
================================================================

MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

scheduler 0.23.2 — MIT
================================================================

MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

standardwebhooks 1.1.1 — MIT
================================================================

The MIT License

Copyright (c) 2023 Svix (https://www.svix.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

ts-algebra 2.0.0 — MIT
================================================================

MIT License

Copyright (c) 2020 Thomas Aribart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

tslib 2.8.1 — 0BSD
================================================================

Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.

tsx 4.23.15 — MIT
================================================================

MIT License

Copyright (c) Hiroki Osame <hiroki.osame@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

zod 4.6.7 — MIT
================================================================

MIT License

Copyright (c) 2025 Colin McDonnell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

capacitor-swift-pm 8.5.3 — native SDK
================================================================

The MIT License (MIT)

Copyright (c) 2022-present Drifty Co.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Third-party components, software, and/or libraries (collectively, "components") are included under the licenses specified by their authors. For information about these third-party licenses, refer to the separate legal notices governing such components at NOTICE file at the top level of the package.

ion-ios-filesystem 2.0.1 — native SDK
================================================================

MIT License

Copyright (c) 2025 Ionic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

purchases-hybrid-common 19.10.0 — native SDK
================================================================

MIT License

Copyright (c) 2019 RevenueCat, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

purchases-ios-spm 5.94.0 — native SDK
================================================================

MIT License

Copyright (c) 2024 RevenueCat, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Apache Cordova portions included by CapacitorCordova
================================================================

Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


Apache Cordova
Copyright 2012 The Apache Software Foundation

This product includes software developed at
The Apache Software Foundation (http://www.apache.org/).


/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */
`,lt=["It doesn’t bid, buy vehicles, contact sellers or transfer vehicle payments.","Available research and third-party reports can be incomplete; they don’t establish a vehicle’s actual condition or complete history.","Costs you leave Unknown are not counted in any total — the result says so.","It doesn’t replace an independent inspection or qualified legal and tax advice."],ht=[{where:"iPhone or iPad (Safari)",how:Tn},{where:"Android (Chrome)",how:"Open the browser menu, then tap “Install app” or “Add to Home screen”."},{where:"Computer (Chrome or Edge)",how:"Click the install icon at the right of the address bar, or open the menu and choose “Install CurbWhiz”."}];function Qt(){return z(q.about),e.jsxs(Q,{eyebrow:"About",title:"About CurbWhiz",lead:"One car deal at a time: the all-in cost, your ceiling, what to verify.",children:[e.jsxs(u,{id:"about-build",title:"This build",icon:"info",tone:"other",children:[e.jsx("p",{className:"mono text-sm about-build",children:Cn()}),e.jsxs("p",{className:"muted text-sm",children:["Deals are saved in this browser by default",". Selected-deal cloud sync needs separate approval. See ",e.jsx("a",{href:Te({name:"data"}),children:"Your data"})," for what is stored and what can leave the device."]})]}),e.jsxs(u,{id:"about-is-isnt",title:"What CurbWhiz is and isn’t",icon:"gauge",tone:"accent",children:[e.jsx("p",{children:"It works out projections from the numbers and evidence you enter. Every report says the same:"}),e.jsx("ul",{className:"content-list",children:Ln.map(n=>e.jsx("li",{children:n},n))}),e.jsx("p",{children:"And about the app itself:"}),e.jsx("ul",{className:"content-list",children:lt.map(n=>e.jsx("li",{children:n},n))}),e.jsxs("p",{children:["How each figure is worked out is on ",e.jsx("a",{href:Te({name:"methodology"}),children:"How the math works"}),"."]})]}),e.jsx(u,{id:"about-coverage",title:"Supported coverage",icon:"flag",tone:"tax",children:e.jsx(g,{tone:"info",children:Re})}),e.jsxs(u,{id:"about-notices",title:"Open-source notices",icon:"document",tone:"other",children:[e.jsx("p",{children:"Copyright and license notices for included libraries, fonts and native SDKs are available on this device."}),e.jsxs("details",{children:[e.jsx("summary",{children:"Read third-party notices"}),e.jsx("pre",{className:"legal-notices__text",tabIndex:0,role:"region","aria-label":"Third-party license text",children:ct})]})]}),e.jsxs(u,{id:"about-install",title:"Install it like an app",icon:"download",tone:"title",children:[e.jsx("dl",{className:"content-defs",children:ht.map(n=>e.jsxs("div",{className:"content-defs__pair",children:[e.jsx("dt",{children:n.where}),e.jsx("dd",{children:n.how})]},n.where))}),e.jsx("p",{className:"muted text-sm",children:"Installed, it opens in its own window and the browser is more likely to keep its data."})]}),e.jsxs(u,{id:"about-support",title:"Report a problem",icon:"alert",tone:"insufficient",children:[e.jsx("p",{children:"Describe what looks wrong. You get a short summary to copy (no VIN, prices or links) and, if you like, a diagnostic file with build and device facts only. CurbWhiz sends nothing itself."}),e.jsx("div",{className:"content-actions",children:e.jsx(bn,{variant:"secondary"})})]})]})}export{Qt as AboutPage,qt as DataPage,$t as MethodologyPage};
