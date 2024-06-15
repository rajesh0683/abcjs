import{_ as e,p as a,q as t,a1 as n}from"./framework-2ecd7faa.js";const s={},i=n(`<h1 id="return-value-of-renderabc" tabindex="-1"><a class="header-anchor" href="#return-value-of-renderabc" aria-hidden="true">#</a> return value of renderAbc</h1><h2 id="visualobjs" tabindex="-1"><a class="header-anchor" href="#visualobjs" aria-hidden="true">#</a> visualObjs</h2><p>When you call <code>renderAbc</code> the return value is an array of objects. Those objects contain a lot of information about the tune that was rendered.</p><p>Each item in the array that was passed back is one tune. Even though it is not as common, you can render multiple tunes with one ABC string. For instance, the following ABC string will produce two tunes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>X:1
K:C
CDEF|

X:2
K:G
GABc|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an example of the <code>renderAbc</code> call:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> visualObjs <span class="token operator">=</span> abcjs<span class="token punctuation">.</span><span class="token function">renderAbc</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">&quot;id-for-tune-1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id-for-tune-2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    abcString<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">add_classes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This section will discuss the structure of <code>visualObjs</code>. You can, of course, name this anything you like, but this documentation will refer to it by this name.</p><h2 id="array-of-tunes" tabindex="-1"><a class="header-anchor" href="#array-of-tunes" aria-hidden="true">#</a> Array of Tunes</h2><p>Since the return value is an array but in many cases you know you have only passed one tune in, the first thing you&#39;ll do is:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> visualObj <span class="token operator">=</span> visualObjs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> Data</h2><div class="custom-container warning"><p class="custom-container-title">Volatile Format</p><p>The format of this object is NOT guaranteed to be backwards compatible, so if you do delve into this and write code that depends on it, you need to retest whenever you upgrade abcjs.</p></div><h3 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting" aria-hidden="true">#</a> formatting</h3><p>This contains a list of the fonts used for the various types of elements and other formatting commands that have been either passed in on the <code>renderAbc</code> call or appear in <code>%%</code> lines.</p><h3 id="lines" tabindex="-1"><a class="header-anchor" href="#lines" aria-hidden="true">#</a> lines</h3><p>This is an array of all the music. Each item in the array is a &quot;staff system&quot;. That is, it could be one staff for single instrument music, it could be two staves for piano music, or it could be more for ensemble music.</p><p>If you look at this object in the debugger, you can drill down and see all the notes and other symbols that you&#39;ve defined.</p><h3 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> media</h3><p>Either &quot;screen&quot; or &quot;print&quot;. When printing, the margins and the header and footer are used.</p><h3 id="metatext" tabindex="-1"><a class="header-anchor" href="#metatext" aria-hidden="true">#</a> metaText</h3><p>This is all of the items that aren&#39;t associated with the music. That includes the text that appears before the music starts and the text that appears after the music ends.</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>The version of this format.</p><h3 id="visualtranspose" tabindex="-1"><a class="header-anchor" href="#visualtranspose" aria-hidden="true">#</a> visualTranspose</h3><p>If the parameter <code>visualTranspose</code> was passed in on the <code>renderAbc</code> call, that value is reflected here.</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><div class="custom-container warning"><p class="custom-container-title">Volatile Format</p><p>The format of this object is NOT guaranteed to be backwards compatible, so if you do delve into this and write code that depends on it, you need to retest whenever you upgrade abcjs.</p></div><h3 id="getbarlength" tabindex="-1"><a class="header-anchor" href="#getbarlength" aria-hidden="true">#</a> getBarLength()</h3><p>Durations have units where a whole note is 1. This returns how long a measure is. For example, 4/4 time returns <code>1</code>, 3/4 time returns <code>0.75</code>, 6/8 time returns <code>0.75</code>.</p><h3 id="getbeatlength" tabindex="-1"><a class="header-anchor" href="#getbeatlength" aria-hidden="true">#</a> getBeatLength()</h3><p>Durations have units where a whole note is 1. This returns how long a beat is. For example, 4/4 time returns <code>0.25</code>, 6/8 time returns <code>0.375</code> since a beat is three eighth notes.</p><h3 id="getbeatspermeasure" tabindex="-1"><a class="header-anchor" href="#getbeatspermeasure" aria-hidden="true">#</a> getBeatsPerMeasure()</h3><p>This returns how many beats are in a measure. For example, 4/4 time returns <code>4</code>, 6/8 time returns <code>2</code> since a beat is three eighth notes.</p><h3 id="getbpm" tabindex="-1"><a class="header-anchor" href="#getbpm" aria-hidden="true">#</a> getBpm()</h3><p>This is the starting beats per minute. Tempo changes could appear later in the tune, but this is the value that was set with the <code>Q:</code> statement, or if that statement doesn&#39;t exist, it is the default tempo of 180.</p><h3 id="getmeter" tabindex="-1"><a class="header-anchor" href="#getmeter" aria-hidden="true">#</a> getMeter()</h3><p>This returns the internal representation of the meter as an object. More often you&#39;ll find <code>getMeterFraction</code> more useful if you are doing calculations.</p><h3 id="getmeterfraction" tabindex="-1"><a class="header-anchor" href="#getmeterfraction" aria-hidden="true">#</a> getMeterFraction()</h3><p>This returns an object with the properties <code>num</code> and <code>den</code>. For instance, 3/4 time returns <code>{num: 3, den: 4}</code>. Common and Cut time are resolved to <code>{num: 4, den: 4}</code> and <code>{num: 2, den: 2}</code> respectively.</p><h3 id="getpickuplength" tabindex="-1"><a class="header-anchor" href="#getpickuplength" aria-hidden="true">#</a> getPickupLength()</h3><p>Durations have units where a whole note is 1. If the first measure is not full, then this is the length of that first measure. It is then considered pickup notes.</p><h3 id="getkeysignature" tabindex="-1"><a class="header-anchor" href="#getkeysignature" aria-hidden="true">#</a> getKeySignature()</h3><p>This returns the internal representation of the key signature with all of its pieces broken apart.</p><h3 id="getelementfromchar-charindex" tabindex="-1"><a class="header-anchor" href="#getelementfromchar-charindex" aria-hidden="true">#</a> getElementFromChar(charIndex)</h3><p><code>charIndex</code> is a character position in the original ABC. This searches through the tune for the element that matches that character. If you pass in the index of a non-note element it returns null.</p><h3 id="gettotalbeats" tabindex="-1"><a class="header-anchor" href="#gettotalbeats" aria-hidden="true">#</a> getTotalBeats</h3><p>Returns <code>undefined</code> until <code>setUpAudio</code> is called, then it returns the total number of beats that the tune has.</p><h3 id="gettotaltime" tabindex="-1"><a class="header-anchor" href="#gettotaltime" aria-hidden="true">#</a> getTotalTime</h3><p>Returns <code>undefined</code> until <code>setUpAudio</code> is called, then it returns the total number of seconds that the tune will take at the tempo that was specified in <code>setUpAudio</code>.</p><h3 id="millisecondspermeasure" tabindex="-1"><a class="header-anchor" href="#millisecondspermeasure" aria-hidden="true">#</a> millisecondsPerMeasure()</h3><p>This does the calculation using beats per minute and beats per measure.</p><h3 id="setupaudio" tabindex="-1"><a class="header-anchor" href="#setupaudio" aria-hidden="true">#</a> setUpAudio()</h3><p>If you aren&#39;t using the built in synth, but you still want the information that the synth provides, call this. If you aren&#39;t overriding the BPM or anything else that can be set in the synth call, you can call this with no parameters. Otherwise specify the items you want to override.</p><p>This returns an array of all the sequence data. Normally you won&#39;t need this information, but there may be cases where it is useful for post-processing.</p><h3 id="findselectableelement-target" tabindex="-1"><a class="header-anchor" href="#findselectableelement-target" aria-hidden="true">#</a> findSelectableElement(target)</h3><p><code>target</code> is an HTML element. This will find the most appropriate selectable item for that element. This is useful if you want to know what a user is hovering over, for instance. Here&#39;s an example of how it might be used:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var renderAbc

var options = {
	add_classes: true,
	selectTypes: true // Add selection for all possible elements
};

renderAbc = ABCJS.renderAbc(&quot;paper&quot;, abcString, options);
var svg = document.getElementById(&quot;paper&quot;);
svg.addEventListener(&#39;mouseover&#39;, hoverListener) // one hover listener for the entire tune

function hoverListener(event) {
	// use the most specific element that was hovered on - it will bubble up until a selectable element is found
    var ret = renderAbc[0].findSelectableElement(event.relatedTarget)
	// if there isn&#39;t a selectable element (that is, the hover is over a blank space), null is returned
    if (ret)
        console.log(ret) // info about what the mouse is over
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getselectablearray" tabindex="-1"><a class="header-anchor" href="#getselectablearray" aria-hidden="true">#</a> getSelectableArray()</h3><p>This returns an array of all of the selectable items in the tune. The return type is <code>Array&lt;Selectable&gt;</code>.</p><p>This can be used to build more complicated interactive functionality.</p>`,61),r=[i];function o(d,h){return a(),t("div",null,r)}const l=e(s,[["render",o],["__file","render-abc-result.html.vue"]]);export{l as default};
