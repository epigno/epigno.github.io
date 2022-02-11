__NUXT_JSONP__("/blog/linux-control-screen-backlight-with-keyboard-shortcut", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$){return {data:[{article:{slug:"linux-control-screen-backlight-with-keyboard-shortcut",description:"i3のキーボードショートカットでスクリーンのバックライトを自由自在に操ろう",title:"Linuxで画面のバックライトをキーボードで操る",img:"\u002Fimg\u002Fi3-screenshot.png",alt:"i3 screenshot with some Rust code and bashtop running in the background",author:{name:"Malik Olivier Boussejra",slug:"olivier",bio:"CTO at Epigno",img:"\u002Fimg\u002Fauthors\u002Fpic-malik-olivier-boussejra.jpg"},createdAt:"2022-01-27T00:00:00.000Z",updatedAt:"2022-02-11T00:00:00.000Z",tags:[ab],toc:[{id:V,depth:H,text:V},{id:aw,depth:H,text:ax},{id:W,depth:H,text:W},{id:X,depth:H,text:X},{id:ay,depth:H,text:"一般ユーザに brightness 書き込み権限を"},{id:Y,depth:az,text:Y},{id:Z,depth:az,text:Z},{id:aA,depth:H,text:aB},{id:_,depth:H,text:_}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"当方は"},{type:b,tag:t,props:{href:"https:\u002F\u002Fsystem76.com\u002Flaptops\u002Flemur",rel:[ac,ad,ae],target:af},children:[{type:a,value:"新しいコンピュータ"}]},{type:a,value:"を購入しました。そこで、なれている環境を全部新しいコンピュータに移す必要がありました。\n"},{type:b,tag:t,props:{href:"https:\u002F\u002Fsystem76.com",rel:[ac,ad,ae],target:af},children:[{type:a,value:"System76"}]},{type:a,value:" のハードウェアなので、Linuxを自分でインストールする必要がなく、生産的な環境が用意できていました。\n古いマシーンの dot files ("},{type:b,tag:f,props:{},children:[{type:a,value:".gitconfig"}]},{type:a,value:ag},{type:b,tag:f,props:{},children:[{type:a,value:".config"}]},{type:a,value:ag},{type:b,tag:f,props:{},children:[{type:a,value:".bashrc"}]},{type:a,value:ag},{type:b,tag:f,props:{},children:[{type:a,value:".thunderbird"}]},{type:a,value:" など)\nを全部新しいマシーンに "},{type:b,tag:f,props:{},children:[{type:a,value:"rsync"}]},{type:a,value:" で送信し、すぐにいつも使っている環境と同じような環境が構築できました。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"また、当方の好みで、"},{type:b,tag:t,props:{href:"https:\u002F\u002Fi3wm.org\u002F",rel:[ac,ad,ae],target:af},children:[{type:a,value:D}]},{type:a,value:" というウィンドウマネージャを使っています。"},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:"が軽い代償として、ウィンドウのタイリング以外の機能は全くありません。\nそこで、System76が用意しているキーボードショートカット（音量設定キー、画面の輝度設定キーなど）は全部動きません。\n無論、デフォルトのPopOSでは、特別な設定なく、すぐ使えます。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"そこで、この記事で、画面の輝度設定キーの設定を紹介します。"}]},{type:a,value:e},{type:b,tag:I,props:{id:V},children:[{type:b,tag:t,props:{href:"#%E3%81%82%E3%82%89%E3%81%99%E3%81%98",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:V}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"輝度設定キーは輝度を変更するカスタムなコマンドにバインディングすることで、"},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:"で輝度設定キーが普通に使えるようになります。\nまず、カスタムなバインディングを定義するため、輝度設定キーのシンボルを取得する必要があります。"}]},{type:a,value:e},{type:b,tag:I,props:{id:aw},children:[{type:b,tag:t,props:{href:"#%E8%BC%9D%E5%BA%A6%E8%A8%AD%E5%AE%9A%E3%82%AD%E3%83%BC%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%ABkeysym%E3%82%92%E5%8F%96%E5%BE%97",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:ax}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"まず、キーボード上、輝度設定キーを目視しましょう。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:"img",props:{alt:"輝度設定キー",src:"\u002Fimg\u002Fsystem76-lemur-pro-keyboard.png"},children:[]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Fn + F8 を必死に押しても反応しませんよね？"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"まず、キーが認識されていることを確認し、キーのシンボルを取得しましょう。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" というプログラムを使います。"},{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" はXサーバーのイベントを全部プリントします。\nそのうち、どのキーを押したか、そのキーのコードネームみたいなシンボル（"},{type:b,tag:f,props:{},children:[{type:a,value:"keysym"}]},{type:a,value:"といいます）をプリントします。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" を起動してから、輝度ダウン・輝度アップのキーを押しましょう。下記のようなテキストデータが出力されます。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,ah]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"KeyPress event, serial 34, synthetic NO, window 0x4000001,\n    root 0x7a8, subw 0x0, time 265851214, (360,568), root:(1324,588),\n    state 0x0, keycode 232 (keysym 0x1008ff03, XF86MonBrightnessDown), same_screen YES,\n    XLookupString gives 0 bytes:\n    XmbLookupString gives 0 bytes:\n    XFilterEvent returns: False\n\n...\n\nKeyPress event, serial 35, synthetic NO, window 0x4000001,\n    root 0x7a8, subw 0x0, time 265852254, (360,568), root:(1324,588),\n    state 0x0, keycode 233 (keysym 0x1008ff02, XF86MonBrightnessUp), same_screen YES,\n    XLookupString gives 0 bytes:\n    XmbLookupString gives 0 bytes:\n    XFilterEvent returns: False\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"ここで、"},{type:b,tag:f,props:{},children:[{type:a,value:"XF86MonBrightnessDown"}]},{type:a,value:" および "},{type:b,tag:f,props:{},children:[{type:a,value:"XF86MonBrightnessUp"}]},{type:a,value:" の輝度ダウン・輝度アップキーのシンボルがあります。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"そのキーにカスタムなコマンドをバインディングするため、見つけ出したkeysymは "},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" の設定ファイルの中で使います！"}]},{type:a,value:e},{type:b,tag:I,props:{id:W},children:[{type:b,tag:t,props:{href:"#%E8%BC%9D%E5%BA%A6%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"KernelのほとんどのドライバはファイルシステムAPIを提供しています。\n輝度のドライバも同じです。\n次のことはハードウェアに依ってドライバやパスが違いますが、原理に変わりはありません。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"当方のPCは "},{type:b,tag:f,props:{},children:[{type:a,value:aC}]},{type:a,value:" というドライバを使っており、ファイルシステムAPIは下記のディレクトリにあります。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,ah]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fsys\u002Fclass\u002Fbacklight\u002Fintel_backlight\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"そこで、いつくかのファイルがあります。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:a,value:ai},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:"cd"}]},{type:a,value:" \u002Fsys\u002Fclass\u002Fbacklight\u002Fintel_backlight\n$ "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aj}]},{type:a,value:"\nactual_brightness  bl_power  brightness  device  max_brightness  power  scale  subsystem  "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:"type"}]},{type:a,value:"  uevent\n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# brightness と max_brightness は今回重要なファイルとなります。"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aa}]},{type:a,value:" max_brightness\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aa}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# brightnessの 値は max_brightness と一緒なので、"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# スクリーンの現在の輝度は最上限値であることがわかります"}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# さて、輝度を半分にしましょう"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aD}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\u003E"}]},{type:a,value:" brightness\nbash: brightness: Permission denied "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# (T_T)"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# 基本、brightness はrootでしかいじれないので、sudo と tee を使いましょう"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aD}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:am}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# これで、画面が暗くなったはずです！"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:am}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# 0を書き込むと真っ暗になるので要注意"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"これを知った上で、輝度を変更するスクリプトを書きます。"}]},{type:a,value:e},{type:b,tag:I,props:{id:X},children:[{type:b,tag:t,props:{href:"#%E8%BC%9D%E5%BA%A6%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E6%9B%B8%E3%81%8F",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:X}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fusr\u002Flocal\u002Fbin\u002Fbacklight"}]},{type:a,value:" に下記のスクリプトを入れます。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"現在の輝度を読み取り、それを変えるスクリプトです。\n輝度が必ず "},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:" と "},{type:b,tag:f,props:{},children:[{type:a,value:"max_brightness"}]},{type:a,value:" の間にあるようにしています。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,"shebang","important"]},children:[{type:a,value:"#!\u002Fusr\u002Fbin\u002Fenv bash"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:"set"}]},{type:a,value:" -e\n\n"},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:"CURRENT"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aG}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:"MAX"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'\u002Fsys\u002Fclass\u002Fbacklight\u002Fintel_backlight\u002Fmax_brightness'"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aG}]}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:a,value:" -z "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aH}]},{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Screen backlight brightess: "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"$CURRENT"}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]},{type:a,value:l}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"    Change brightness value with following command:\""}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"    \\$ "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"$0"}]},{type:a,value:" \\"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:l}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:"exit"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:"ARGV"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aH}]},{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aI},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:aJ}]},{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aK}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"+\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aL}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"+"}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aP}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aQ}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aI},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:aJ}]},{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aK}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"-\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aL}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"-"}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aP}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"else"}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"$ARGV"}]},{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:at}]},{type:a,value:l}]},{type:a,value:" -gt "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]},{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aq}]},{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aQ}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:at}]},{type:a,value:l}]},{type:a,value:" -lt "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:T}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,F,h]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:at}]},{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aF}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"使ってみましょう。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"$ backlight\nScreen backlight brightess: "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:"\n$ backlight -5000\nbash: brightness: Permission denied\n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# brightnessに書き込むには root が要りますね"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:M}]},{type:a,value:" backlight -5000\n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# 暗くなりました！"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:M}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# 明るくなりました！"}]},{type:a,value:"\n$ backlight\nScreen backlight brightess: "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"43000"}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"ですが、"},{type:b,tag:f,props:{},children:[{type:a,value:M}]},{type:a,value:" が必要なら、"},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" のバインディングで呼び出せないですね。\n次は "},{type:b,tag:f,props:{},children:[{type:a,value:M}]},{type:a,value:" が不要になるようにしましょう。"}]},{type:a,value:e},{type:b,tag:I,props:{id:ay},children:[{type:b,tag:t,props:{href:"#%E4%B8%80%E8%88%AC%E3%83%A6%E3%83%BC%E3%82%B6%E3%81%AB-brightness-%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BF%E6%A8%A9%E9%99%90%E3%82%92",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:"一般ユーザに "},{type:b,tag:f,props:{},children:[{type:a,value:"brightness"}]},{type:a,value:" 書き込み権限を"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:aT}]},{type:a,value:aU},{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fsys\u002Fclass\u002Fbacklight\u002Fintel_backlight\u002Fbrightness"}]},{type:a,value:" への書き込み権限は付与できますが、再起動時で毎回実行する必要があるので、極めて不便です。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:au}]},{type:a,value:" のルールでファイルシステムAPIのファイルの権限を随時に変えましょう。\n"},{type:b,tag:f,props:{},children:[{type:a,value:au}]},{type:a,value:" はドライバをロードする役目を持つ、とても大事なプログラムです。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"デバイスを差し込むときなど、ドライバロード時、任意なコマンドも実行できる設定は可能になっています。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u002Flib\u002Fudev\u002Frules.d\u002F90-backlight.rules"}]},{type:a,value:aU},{type:b,tag:f,props:{},children:[{type:a,value:av}]},{type:a,value:" のサブシステムに対するルールを作ります。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"90-backlight.rule"}]},{type:a,value:" の中身は下記のテキストにすれば良いです。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,ah]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"ACTION==\"add\", SUBSYSTEM==\"backlight\", RUN+=\"\u002Fbin\u002Fchmod o+w \u002Fsys\u002Fclass\u002Fbacklight\u002F%k\u002Fbrightness\"\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"これで、"},{type:b,tag:f,props:{},children:[{type:a,value:av}]},{type:a,value:"のドライバをロードしたときと同時に、"},{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fbin\u002Fchmod o+w \u002Fsys\u002Fclass\u002Fbacklight\u002F%k\u002Fbrightness"}]},{type:a,value:" というコマンドが実行されます。\nちなみに "},{type:b,tag:f,props:{},children:[{type:a,value:"%k"}]},{type:a,value:" はデバイスの kernel name に差し替えるものになります。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"今回のハードウェアの "},{type:b,tag:f,props:{},children:[{type:a,value:av}]},{type:a,value:" は "},{type:b,tag:f,props:{},children:[{type:a,value:aC}]},{type:a,value:" という kernel name になっています。\nということで、下記のコマンドが実行されて、一般ユーザに書き込み権限を与えるコマンドとなっています。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aT}]},{type:a,value:" o+w \u002Fsys\u002Fclass\u002Fbacklight\u002Fintel_backlight\u002Fbrightnes\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"システム再起動後、権限が変わったことを確認できます。前後比較をしましょう。"}]},{type:a,value:e},{type:b,tag:aV,props:{id:Y},children:[{type:b,tag:t,props:{href:"#%E5%89%8D",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:Y}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:a,value:ai},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aj}]},{type:a,value:" -l brightness\n-rw-r--r-- "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aX}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aZ}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:a_}]},{type:a,value:":43 brightness\n$ backlight -5000\nbash: brightness: Permission denied\n"}]}]}]},{type:a,value:e},{type:b,tag:aV,props:{id:Z},children:[{type:b,tag:t,props:{href:"#%E5%BE%8C",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:Z}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:a,value:ai},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aj}]},{type:a,value:" -l brightness\n-rw-r--rw- "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aX}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aZ}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:a_}]},{type:a,value:":43 brightness\n$ backlight -5000\n"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# 一般ユーザ権限でも暗くなりました！成功！"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"これですべての条件が揃いましたので、あとは "},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" の設定ファイルでバインディングを定義するしかないです。"}]},{type:a,value:e},{type:b,tag:I,props:{id:aA},children:[{type:b,tag:t,props:{href:"#%E6%9C%80%E5%BE%8C%E3%82%AD%E3%83%BC%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E8%A8%AD%E5%AE%9A",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aB}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"~\u002F.config\u002Fi3\u002Fconfig"}]},{type:a,value:" に下記の2行を追加します。"}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,J]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Screen backlight brightness control"}]},{type:a,value:"\nbindsym XF86MonBrightnessDown "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:a$}]},{type:a,value:" backlight -5000\nbindsym XF86MonBrightnessUp "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:a$}]},{type:a,value:aS}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:" のリロード後、さー！来ました！"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"輝度設定キーが使えるようになりました。"}]},{type:a,value:e},{type:b,tag:I,props:{id:_},children:[{type:b,tag:t,props:{href:"#%E3%81%BE%E3%81%A8%E3%82%81",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:$}]},{type:a,value:" で 輝度キーの keysymの名称を調べ、\nファイルシステムAPIで輝度を変え、\n輝度を変えるスクリプトを作成し、\n"},{type:b,tag:f,props:{},children:[{type:a,value:au}]},{type:a,value:" でファイルシステムAPIの権限を変更し、\nようやく"},{type:b,tag:f,props:{},children:[{type:a,value:D}]},{type:a,value:"のキーバインディングが設定できました。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"面白かったじゃないですか？"}]}]},dir:"\u002Farticles\u002Fja",path:"\u002Farticles\u002Fja\u002Flinux-control-screen-backlight-with-keyboard-shortcut",extension:".md"},tags:{trivia:{slug:ab,name:ab}},prev:{slug:"working-at-epigno",title:"バリュー：エピグノで働く"},next:null,availableLocales:[]}],fetch:{},mutations:void 0}}("text","element","span","token","\n","code"," ","variable","p","number","operator","\"","string","function","punctuation","keyword","builtin","class-name","comment","a","div","nuxt-content-highlight","pre","line-numbers","true",-1,"icon","icon-link","\n    ","i3","1","assign-left","=",2,"h2","language-bash","\n$ ","echo","sudo",":","48000","\n\n","[","]",";","then","NEW_VALUE","あらすじ","輝度を変更してみる","輝度を変更するスクリプトを書く","前","後","まとめ","xev","cat","trivia","nofollow","noopener","noreferrer","_blank",", ","language-text","$ ","ls"," brightness\n","|","tee","0","if"," \u002F ","$MAX","$value","fi","$NEW_VALUE","udev","backlight","輝度設定キーのシンボルkeysymを取得","輝度設定キーのシンボル(keysym)を取得","一般ユーザに-brightness-書き込み権限を",3,"最後キーバインディングを設定","最後！キーバインディングを設定！","intel_backlight","24000","$(","'\u002Fsys\u002Fclass\u002Fbacklight\u002Fintel_backlight\u002Fbrightness'",")","$1","${ARGV","1}","==","$((","\"$CURRENT\" "," \"${ARGV","}\"","))","elif","\n    Change brightness value with following command:\n    $ \u002Fusr\u002Flocal\u002Fbin\u002Fbacklight "," backlight +5000\n","chmod"," で ","h3"," root root ","4096"," Jan ","27","20","exec")));