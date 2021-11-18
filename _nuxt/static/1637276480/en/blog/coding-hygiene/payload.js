__NUXT_JSONP__("/en/blog/coding-hygiene", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{article:{slug:"coding-hygiene",description:"Coding practices to get high-quality software released fast",title:"Coding Hygiene",img:"\u002Fimg\u002Fhygiene.jpg",alt:"Coding hygiene, photo by Jernej Furman (https:\u002F\u002Fwww.flickr.com\u002Fphotos\u002F91261194@N06\u002F49820964568)",author:{name:"Malik Olivier Boussejra",slug:"olivier",bio:"CTO at Epigno",img:"\u002Fimg\u002Fauthors\u002Fpic-malik-olivier-boussejra.jpg"},tags:[A],toc:[{id:I,depth:l,text:J},{id:K,depth:l,text:L},{id:M,depth:l,text:N},{id:O,depth:l,text:P},{id:Q,depth:l,text:R},{id:S,depth:l,text:T},{id:U,depth:l,text:V},{id:W,depth:l,text:X},{id:Y,depth:l,text:Z},{id:_,depth:l,text:$},{id:aa,depth:3,text:ab},{id:ac,depth:l,text:ad},{id:ae,depth:l,text:af},{id:ag,depth:l,text:ah},{id:ai,depth:l,text:aj},{id:ak,depth:l,text:al}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"In this document, we provide a list of \"good\" practices to release reliable\napplications fast."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Of course, there are exceptions to everything, but these practices should provide\na good base for working in a team that ships reliable software fast."}]},{type:a,value:c},{type:b,tag:m,props:{id:I},children:[{type:b,tag:f,props:{href:"#continuous-delivery",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If code is to be merged into the main trunk, consider it to be production-ready.\nIt will be released into a staging server for testing, then into production\nwithin a day."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We don't make big releases: "},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRelease_early,_release_often",rel:[q,r,s],target:t},children:[{type:a,value:"We make small releases often"}]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's better to spend "},{type:b,tag:v,props:{},children:[{type:a,value:"everyday an hour"}]},{type:a,value:" testing a small subset of released\nfixes and features, than pushing hard 2 or 3 weeks testing and hot-fixing huge\nfeatures and many bugfixes every 3 months."}]},{type:a,value:c},{type:b,tag:m,props:{id:K},children:[{type:b,tag:f,props:{href:"#readability-first",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When editing mature software, you spend 80% of your time reading code, rather\nthan writing it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Readability matters."}]},{type:a,value:c},{type:b,tag:m,props:{id:M},children:[{type:b,tag:f,props:{href:"#keep-it-simple-stupid",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Known as "},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FKISS_principle",rel:[q,r,s],target:t},children:[{type:a,value:"KISS"}]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Is the implementation the simplest implementation that can solve the given problem?"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Can even a stupid person understand it?"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you write code, always think about those two questions.\nIt is easy to fall down a rabbit hole of over-complicated design."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Always "},{type:b,tag:o,props:{},children:[{type:a,value:"come back"}]},{type:a,value:" and simplify."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You are not paid by the line. On the contrary, reducing line count in a module\nwithout loss in functionality is the prerogative of a great programmer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The only code that has no bug is code that is not written.\nSo the less code, the less bugs."}]},{type:a,value:c},{type:b,tag:m,props:{id:O},children:[{type:b,tag:f,props:{href:"#put-related-code-close-to-each-other",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When reading code, nothing is worse than having to jump to a completely\ndifferent file in a completely different directory to understand a code snippet."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Put related code close to each other. Ideally, code should be structured so that\na single logical unit can easily hold within the height of a single screen (say,\nat most 20 lines)."}]},{type:a,value:c},{type:b,tag:m,props:{id:Q},children:[{type:b,tag:f,props:{href:"#not-too-much-duplications",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You never want to fix the same bug in 10 different places."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Code duplicated twice can be left duplicated (provided the snippet is not too\nlong).\nMore than that, and you should refactor.\nThis concept is usually called the "},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRule_of_three_(computer_programming)",rel:[q,r,s],target:t},children:[{type:a,value:"rule of three"}]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:m,props:{id:S},children:[{type:b,tag:f,props:{href:"#be-stateless",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"State is the source of most of your application's bugs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Keep the state contained to the bare minimum that satisfies the spec.\nAlways avoid using state (especially mutable state) when it can be avoided."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Always enforce "},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSingle_source_of_truth",rel:[q,r,s],target:t},children:[{type:a,value:"single source of truth"}]}]},{type:a,value:". You never want to edit the same value at several places,\nlest you or your co-worker forget one place and cause nasty bugs."}]},{type:a,value:c},{type:b,tag:m,props:{id:U},children:[{type:b,tag:f,props:{href:"#no-commented-out-code",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Commented out code is debt."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Never push commented out code into production."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"No one will understand why this code exists and why it is commented out."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And you too will forget why it is commented out within a few months, anyway."}]},{type:a,value:c},{type:b,tag:m,props:{id:W},children:[{type:b,tag:f,props:{href:"#code-styling",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Use the linter and code formatter set up for your project. Don't complain."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enforced team conventions and consistency always trump personal preferences.\nYou will get used to the formatter's rules anyway."}]},{type:a,value:c},{type:b,tag:m,props:{id:Y},children:[{type:b,tag:f,props:{href:"#naming-conventions",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Follow naming conventions. This includes case ("},{type:b,tag:n,props:{},children:[{type:a,value:"camelCase"}]},{type:a,value:C},{type:b,tag:n,props:{},children:[{type:a,value:"PascalCase"}]},{type:a,value:",\n"},{type:b,tag:n,props:{},children:[{type:a,value:"snake_case"}]},{type:a,value:C},{type:b,tag:n,props:{},children:[{type:a,value:"kebab-case"}]},{type:a,value:C},{type:b,tag:n,props:{},children:[{type:a,value:"ALL_CAPS"}]},{type:a,value:"), but also usage of singular\u002Fplural form\nof names, and verb usage."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Focus on readability and context.\nFor example, if you write a function that mutates some state, always use a\ndescriptive action verb."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In doubt, look at the code surrounding the place your editing and follow the\nsame convention."}]},{type:a,value:c},{type:b,tag:m,props:{id:_},children:[{type:b,tag:f,props:{href:"#comments",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Good comments are good."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Bad comments are bad."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Comments should be clear, useful and on point."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Comments should be next to the code they are commenting."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Comments should be "},{type:b,tag:v,props:{},children:[{type:a,value:"correct"}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Comments "},{type:b,tag:v,props:{},children:[{type:a,value:"must"}]},{type:a,value:" be maintained."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"No comment is better than bad or misleading comments."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSelf-documenting_code",rel:[q,r,s],target:t},children:[{type:a,value:"Self-documenting code"}]}]},{type:a,value:" is good."}]},{type:a,value:c},{type:b,tag:D,props:{id:aa},children:[{type:b,tag:f,props:{href:"#story-telling-comments",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If splitting by sub-function is not as simple, splitting code into logical units\nseparated by explanatory comments is a good idiom for readability."}]},{type:a,value:c},{type:b,tag:am,props:{className:[an]},children:[{type:b,tag:ao,props:{className:[ap,"language-js"]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:e,props:{className:[k,x]},children:[{type:a,value:"\u002F\u002F Retrieve foo via the X API to achieve better performance because of Y"}]},{type:a,value:c},{type:b,tag:e,props:{className:[k,E]},children:[{type:a,value:F}]},{type:a,value:" x "},{type:b,tag:e,props:{className:[k,y]},children:[{type:a,value:G}]},{type:a,value:H},{type:b,tag:e,props:{className:[k,"spread",y]},children:[{type:a,value:"..."}]},{type:a,value:c},{type:b,tag:e,props:{className:[k,x]},children:[{type:a,value:aq}]},{type:a,value:c},{type:b,tag:e,props:{className:[k,E]},children:[{type:a,value:F}]},{type:a,value:" foo "},{type:b,tag:e,props:{className:[k,y]},children:[{type:a,value:G}]},{type:a,value:H},{type:b,tag:e,props:{className:[k,ar]},children:[{type:a,value:"f"}]},{type:b,tag:e,props:{className:[k,z]},children:[{type:a,value:as}]},{type:a,value:"x"},{type:b,tag:e,props:{className:[k,z]},children:[{type:a,value:at}]},{type:a,value:"\n\n"},{type:b,tag:e,props:{className:[k,x]},children:[{type:a,value:"\u002F\u002F Do Z with foo"}]},{type:a,value:c},{type:b,tag:e,props:{className:[k,E]},children:[{type:a,value:F}]},{type:a,value:" bar "},{type:b,tag:e,props:{className:[k,y]},children:[{type:a,value:G}]},{type:a,value:H},{type:b,tag:e,props:{className:[k,ar]},children:[{type:a,value:"g"}]},{type:b,tag:e,props:{className:[k,z]},children:[{type:a,value:as}]},{type:a,value:"foo"},{type:b,tag:e,props:{className:[k,z]},children:[{type:a,value:at}]},{type:a,value:c},{type:b,tag:e,props:{className:[k,x]},children:[{type:a,value:aq}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:ac},children:[{type:b,tag:f,props:{href:"#code-transparency-and-back-up",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While drafting code, do whatever you want that is productive to you.\nHowever, keep your work-in-progress (WIP) code in check with a merge request (MR)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thus your WIP will always be backed up in version control (back-up), and\neveryone in the team can jump in and help if you have an issue with your MR\n(transparency)."}]},{type:a,value:c},{type:b,tag:m,props:{id:ae},children:[{type:b,tag:f,props:{href:"#divide-and-conquer",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Split big tasks into individual (divide) into testable and achievable smaller\ntasks (conquer)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Make many small merge requests to accomplish a big task."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Incremental improvements build up over time. Rome was not made in one day."}]},{type:a,value:c},{type:b,tag:m,props:{id:ag},children:[{type:b,tag:f,props:{href:"#commit-history-and-version-control",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We use "},{type:b,tag:n,props:{},children:[{type:a,value:"git"}]},{type:a,value:" as version control."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Consider a merge request that you submit as a collection of patches, where each\npatch is a commit. As such, commit history should be linear."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While drastic, we do this to prevent regressions and make the review process more efficient (more efficient → easier to find bugs → better quality)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.kernel.org\u002Fdoc\u002Fhtml\u002Fv4.12\u002Fprocess\u002Fsubmitting-patches.html#describe-your-changes",rel:[q,r,s],target:t},children:[{type:a,value:"Linux Kernel patch submission process"}]}]},{type:a,value:" is very appropriate.\nIt is so good that I am going to cite the parts I deem most important below."}]},{type:a,value:c},{type:b,tag:"style",props:{},children:[{type:a,value:"\nblockquote p {\n  display: block;\n}\n"}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:D,props:{id:"describe-your-changes"},children:[{type:b,tag:f,props:{href:"#describe-your-changes",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:"Describe your changes"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Describe your problem. Whether your patch is a one-line bug fix or 5000 lines of a new feature, there must be an underlying problem that motivated you to do this work."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Describe user-visible impact. Straight up crashes [...] are pretty convincing, but not all bugs are that blatant."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:D,props:{id:"separate-your-changes"},children:[{type:b,tag:f,props:{href:"#separate-your-changes",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:"Separate your changes"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Separate each "},{type:b,tag:v,props:{},children:[{type:a,value:"logical change"}]},{type:a,value:" into a separate patch."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For example, if your changes include both bug fixes and performance enhancements for a single [component], separate those changes into two or more patches. If your changes include an API update, and a new [component] which uses that new API, separate those into two patches."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On the other hand, if you make a single change to numerous files, group those\nchanges into a single patch. Thus a single logical change is contained within a\nsingle patch."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The point to remember is that each patch should make an easily understood change that can be verified by reviewers. Each patch should be justifiable on its own merits."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When dividing your change into a series of patches, take special care to ensure that the [application] builds and runs properly after each patch in the series. Developers using "},{type:b,tag:n,props:{},children:[{type:a,value:"git bisect"}]},{type:a,value:" to track down a problem can end up splitting your patch series at any point; they will not thank you if you introduce bugs in the middle."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For good measure, rebase your patch set on top the latest commit in the main\ntrunk before testing it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Do not pollute a patch with unrelated or cosmetic changes (e.g. add\u002Fremove a\nline).  If you do think the style was bad, then fix the styling in a separate\ncommit.  Remember: "},{type:b,tag:o,props:{},children:[{type:a,value:"Each patch should be justifiable on its own merits."}]}]},{type:a,value:c},{type:b,tag:m,props:{id:ai},children:[{type:b,tag:f,props:{href:"#commit-messages",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For bigger projects, commit message can be structured as follows:"}]},{type:a,value:c},{type:b,tag:am,props:{className:[an]},children:[{type:b,tag:ao,props:{className:[ap,"language-text"]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"[$component] $subComponent: $Title\n\nThis commit fixes the issue X, by using the method Y.\nY is preferable over Z because *foo*.\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If no component or sub-component exists for the given changeset, feel free to\nleave out \""},{type:b,tag:n,props:{},children:[{type:a,value:"[$component]"}]},{type:a,value:"\" or \""},{type:b,tag:n,props:{},children:[{type:a,value:"$subComponent:"}]},{type:a,value:"\" from the title."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$Title should not be too long, it should be a title.\nUsing an action verb describing the change is a good idea.\nFor example: \"Add feature X\", not \"Adds\", not \"Added\", not \"Adding\", not \"add\",\nsimply \"Add\")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For readability, the body of the commit message should be wrapped at the\n72-character column, except for quoted material that has a specific line format."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If in doubt look at the commit history and be consistent with existing, similar\ncommits."}]},{type:a,value:c},{type:b,tag:m,props:{id:ak},children:[{type:b,tag:f,props:{href:"#code-reviews",ariaHidden:g,tabIndex:h},children:[{type:b,tag:e,props:{className:[i,j]},children:[]}]},{type:a,value:al}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To ensure code quality, we do reviews before merging a code contribution.\nIt's better to be a few days late than sorry because we merged broken code."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When asking for reviews, ensure that all the coding hygiene points discussed\nabove are dealt with. If not, explain why."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ideally, a reviewer should not have to waste time pointing at obvious issues."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When everything is checked, use the \"Needs review\" label and appoint an\navailable reviewer.\nThe reviewer shall review within a day, so that the submitter does not lose\nmomentum."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The reviewer shall point issues that should be dealt with, then remove the \"Needs\nreview\" label. Through discussion, they will work together possible enhancements\nwith the submitter about possible enhancements. Rinse and repeat until the merge\nrequest is as good as it can get."}]}]},dir:"\u002Farticles\u002Fen",path:"\u002Farticles\u002Fen\u002Fcoding-hygiene",extension:".md",createdAt:au,updatedAt:au},tags:{trivia:{slug:A,name:A}},prev:{slug:"webpack-with-flask",title:"Webpack with flask"},next:null,availableLocales:[{code:av,iso:av,name:"日本語"}]}],fetch:[],mutations:void 0}}("text","element","\n","p","span","a","true",-1,"icon","icon-link","token",2,"h2","code","em","li","nofollow","noopener","noreferrer","_blank",".","strong","blockquote","comment","operator","punctuation","trivia","ul",", ","h3","keyword","const","="," ","continuous-delivery","Continuous delivery","readability-first","Readability first","keep-it-simple-stupid","Keep It Simple, Stupid","put-related-code-close-to-each-other","Put related code close to each other","not-too-much-duplications","Not too much duplications","be-stateless","Be stateless","no-commented-out-code","No commented out code","code-styling","Code styling","naming-conventions","Naming conventions","comments","Comments","story-telling-comments","Story-telling comments","code-transparency-and-back-up","Code transparency and back-up","divide-and-conquer","Divide and conquer","commit-history-and-version-control","Commit history and version control","commit-messages","Commit messages","code-reviews","Code reviews","div","nuxt-content-highlight","pre","line-numbers","\u002F* more lines *\u002F","function","(",")","2021-11-18T22:08:06.288Z","ja")));