import{w as l}from"./app-623fe8ae.js";import{_ as d,M as t,p as i,q as h,N as n,U as p,R as b,Q as e,t as a,a1 as r}from"./framework-2ecd7faa.js";const f={async mounted(){await l(),this.abcjsReady=!0,setTimeout(()=>{this.callbacks=[this.$refs.numTunes,this.$refs.tuneById,this.$refs.tuneByTitle]},500)},data(){return{abcjsReady:!1,callbacks:[]}}},m=e("h1",{id:"tune-book",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tune-book","aria-hidden":"true"},"#"),a(" Tune Book")],-1),k=e("p",null,"The following analysis is based on the abc string that is in the textarea at the bottom of this page.",-1),_=e("h2",{id:"number-of-tunes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#number-of-tunes","aria-hidden":"true"},"#"),a(" Number of Tunes")],-1),y=e("p",null,"It might be useful to know in advance how many tunes are in a tunebook before rendering them:",-1),v=r(`<h2 id="get-tune-info" tabindex="-1"><a class="header-anchor" href="#get-tune-info" aria-hidden="true">#</a> Get Tune Info</h2><p>The following assumes you&#39;ve created a <code>TuneBook</code> object like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var tuneBook = new ABCJS.TuneBook(tunebookString)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="extract-tune-by-id" tabindex="-1"><a class="header-anchor" href="#extract-tune-by-id" aria-hidden="true">#</a> Extract Tune by ID</h3><p>If you know the ID, then you can use the following to get a particular tune in a tunebook. The id is the value in the <code>X:</code> field.</p>`,5),g=e("h3",{id:"extract-tune-by-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extract-tune-by-title","aria-hidden":"true"},"#"),a(" Extract Tune by Title")],-1),x=e("p",null,[a("If you know the title, then you can use the following to get a particular tune in a tunebook. The title is the value in the "),e("em",null,"first"),a(),e("code",null,"T:"),a(" field.")],-1),T=r(`<h3 id="get-all-tune-info" tabindex="-1"><a class="header-anchor" href="#get-all-tune-info" aria-hidden="true">#</a> Get all Tune Info</h3><p>You can directly access the array of tunes in a tune book with:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arrayOfTunes <span class="token operator">=</span> tunebook<span class="token punctuation">.</span>tunes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-all-measures-separately" tabindex="-1"><a class="header-anchor" href="#get-all-measures-separately" aria-hidden="true">#</a> Get all measures separately</h3><p>To parse the string and return each measure:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> measureArray <span class="token operator">=</span> abcjs<span class="token punctuation">.</span><span class="token function">extractMeasures</span><span class="token punctuation">(</span>tunebookString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="test-data" tabindex="-1"><a class="header-anchor" href="#test-data" aria-hidden="true">#</a> Test Data</h2><p>Paste in any ABC you want here and see how that affects the analysis above:</p>`,8);function w(B,j,I,N,s,V){const u=t("num-tunes"),o=t("tune-book-info"),c=t("example-tune-book");return i(),h("div",null,[m,k,_,y,n(u,{ref:"numTunes"},null,512),v,n(o,{ref:"tuneById",type:"id"},null,512),g,x,n(o,{ref:"tuneByTitle",type:"title"},null,512),T,s.abcjsReady?(i(),p(c,{key:0,callbacks:s.callbacks},null,8,["callbacks"])):b("v-if",!0)])}const C=d(f,[["render",w],["__file","tune-book.html.vue"]]);export{C as default};
