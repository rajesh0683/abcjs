import{w as i}from"./app-623fe8ae.js";import{_ as o,M as d,p as s,q as c,U as l,R as h,N as b,a1 as a,Q as t,t as u}from"./framework-2ecd7faa.js";const m={async mounted(){await i(),this.abcjsReady=!0,setTimeout(()=>{this.callbacks=[this.$refs.foundClasses]},500)},data(){return{abcjsReady:!1,callbacks:[]}}},f=a('<h1 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h1><h2 id="class-names" tabindex="-1"><a class="header-anchor" href="#class-names" aria-hidden="true">#</a> Class Names</h2><p>If you use, <code>{ add_classes: true }</code>, then the following classes are attached to various elements:</p><table><thead><tr><th>class</th><th>description</th></tr></thead><tbody><tr><td>abcjs-annotation</td><td>Text added with the <code>&quot;^...&quot;</code> format.</td></tr><tr><td>abcjs-author</td><td>The author text</td></tr><tr><td>abcjs-bar</td><td>The bar lines.</td></tr><tr><td>abcjs-bar-number</td><td>The bar numbers.</td></tr><tr><td>abcjs-beam-elem</td><td>The beams connecting eighth notes together.</td></tr><tr><td>abcjs-brace</td><td>The brace on the left side of the staff (like for piano music.)</td></tr><tr><td>abcjs-bracket</td><td>The bracket on the left side of the staff.</td></tr><tr><td>abcjs-chord</td><td>The chord symbols, specified in quotes.</td></tr><tr><td>abcjs-clef</td><td>All clefs</td></tr><tr><td>abcjs-composer</td><td>The composer text</td></tr><tr><td>abcjs-d0-25, etc.</td><td>The duration of the note. (Replace the dash with a decimal point. That is, the example is a duration of 0.25, or a quarter note.)</td></tr><tr><td>abcjs-decoration</td><td>Everything to do with the extra symbols, like crescendo.</td></tr><tr><td>abcjs-defined-text</td><td>Text that appears between the lines of music, created with <code>%%text</code>.</td></tr><tr><td>abcjs-dynamics</td><td>The dynamics markings: <code>p</code> for instance. Also the crescendo mark.</td></tr><tr><td>abcjs-end-m0-n0</td><td>Added to slurs to indicate the ending note.</td></tr><tr><td>abcjs-ending</td><td>The line and decoration for the 1st and 2nd ending.</td></tr><tr><td>abcjs-key-signature</td><td>All key signatures</td></tr><tr><td>abcjs-l0, abcjs-l1, etc.</td><td>(lower case L, followed by a number) The staff line number, starting at zero.</td></tr><tr><td>abcjs-ledger</td><td>ledger line.</td></tr><tr><td>abcjs-lyric</td><td>The lyric line.</td></tr><tr><td>abcjs-m0, abcjs-m1, etc.</td><td>The measure count from the START OF THE LINE.</td></tr><tr><td>abcjs-mm0, abcjs-mm1, etc.</td><td>The measure count from the START OF THE TUNE.</td></tr><tr><td>abcjs-meta-bottom</td><td>Everything that is printed after all the music.</td></tr><tr><td>abcjs-meta-top</td><td>Everything that is printed before the first staff line.</td></tr><tr><td>abcjs-n0, abcjs-n1, etc.</td><td>The note count from the START OF THE MEASURE.</td></tr><tr><td>abcjs-note</td><td>Everything to do with a note.</td></tr><tr><td>abcjs-note_selected</td><td>This is the element that the user has clicked on.</td></tr><tr><td>abcjs-p-1, abcjs-p1, etc.</td><td>The y-position of the note (where middle-C is zero).</td></tr><tr><td>abcjs-part</td><td>Each part marking in the music itself.</td></tr><tr><td>abcjs-part-order</td><td>The part order indicator at the top.</td></tr><tr><td>abcjs-rest</td><td>Everything to do with a rest.</td></tr><tr><td>abcjs-rhythm</td><td>The rhythm text.</td></tr><tr><td>abcjs-slur</td><td>Slurs and ties. (backwards compatible)</td></tr><tr><td>abcjs-start-m0-n0</td><td>Added to slurs to indicate the beginning note.</td></tr><tr><td>abcjs-tie</td><td>Tie.</td></tr><tr><td>abcjs-legato</td><td>Slur. Because &quot;abcjs-slur&quot; was historically used to indicate either a slur or a tie this indicates only a slur.</td></tr><tr><td>abcjs-staff</td><td>The horizontal lines that make up the staff.</td></tr><tr><td>abcjs-staff-extra</td><td>Clefs, key signatures, time signatures.</td></tr><tr><td>abcjs-stem</td><td></td></tr><tr><td>abcjs-subtitle</td><td>The subtitle, both on the top and inserted in the middle</td></tr><tr><td>abcjs-symbol</td><td>Any special symbol, like a trill.</td></tr><tr><td>abcjs-tempo</td><td>The tempo marking.</td></tr><tr><td>abcjs-text</td><td>Extra text that is not part of the music.</td></tr><tr><td>abcjs-time-signature</td><td>All time signatures</td></tr><tr><td>abcjs-title</td><td>The line specified by T:</td></tr><tr><td>abcjs-top-line</td><td>This marks the top line of each staff. This is useful if you are trying to find where on the page the music has been drawn.</td></tr><tr><td>abcjs-top-of-system</td><td>This marks the top of each set of staves. This is useful if you are trying to find where on the page the music has been drawn.</td></tr><tr><td>abcjs-triplet</td><td>The extra markings that indicate a triplet. (But not the notes themselves.)</td></tr><tr><td>abcjs-unaligned-words</td><td>Lyrics at the bottom that aren&#39;t lined up with notes.</td></tr><tr><td>abcjs-v0, abcjs-v1, etc.</td><td>the voice number, starting at zero.</td></tr></tbody></table><h2 id="test-tune" tabindex="-1"><a class="header-anchor" href="#test-tune" aria-hidden="true">#</a> Test Tune</h2><p>Paste in any ABC you want here and see how that affects the classes below:</p>',6),p=t("h2",{id:"found-classes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#found-classes","aria-hidden":"true"},"#"),u(" Found Classes")],-1),j=t("p",null,"Select the following classes to see what they point to. (They are ANDed together.)",-1),g=a(`<h2 id="css-possibilities" tabindex="-1"><a class="header-anchor" href="#css-possibilities" aria-hidden="true">#</a> CSS Possibilities</h2><h3 id="changing-colors" tabindex="-1"><a class="header-anchor" href="#changing-colors" aria-hidden="true">#</a> changing colors</h3><p>If you want to just change everything to one other color, you can do something like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
    svg {
        fill: pink;
        stroke: pink;
    }
&lt;style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want more control, you can use the classes. For instance, to turn only the horizontal staff lines pink, do this instead:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
    svg .abcjs-staff {
        fill: pink;
        stroke: pink;
    }
&lt;style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(v,T,k,x,e,w){const r=d("example-tune-book"),n=d("found-classes");return s(),c("div",null,[f,e.abcjsReady?(s(),l(r,{key:0,callbacks:e.callbacks,"tune-id":32},null,8,["callbacks"])):h("v-if",!0),p,j,b(n,{ref:"foundClasses",target:"#paper"},null,512),g])}const A=o(m,[["render",y],["__file","classes.html.vue"]]);export{A as default};
