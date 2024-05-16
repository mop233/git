import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.BLRFJa7s.js";const y=JSON.parse('{"title":"创建标签","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"senior/tag/create.md","filePath":"senior/tag/create.md"}'),h={name:"senior/tag/create.md"},t=n(`<h1 id="创建标签" tabindex="-1">创建标签 <a class="header-anchor" href="#创建标签" aria-label="Permalink to &quot;创建标签&quot;">​</a></h1><p>在 Git 中打标签非常简单，首先，切换到需要打标签的分支上：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Switched</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;master&#39;</span></span></code></pre></div><p>然后，输入命令 <code>git tag &lt;name&gt;</code> 就可以打一个新标签：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1.0</span></span></code></pre></div><p>可以用命令 <code>git tag</code> 查看所有标签：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v1.0</span></span></code></pre></div><p>默认标签是打在最新提交的 commit 上的，有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？</p><p>方法是找到历史提交的 commit id 然后打上就可以了：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=oneline</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --abbrev-commit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12a631b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (HEAD -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1.0,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) merged bug fix 101</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4c805e2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bug</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 101</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e1e9c68</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no-ff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f52c633</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cf810e4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conflict</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fixed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">5dc6824</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">simple</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">14096d0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> AND</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simple</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b17d20e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d46f35e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b84166e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">519219b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tracks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e43a48b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> understand</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> how</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> works</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1094adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> append</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GPL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">e475afc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eaadf4e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wrote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span></code></pre></div><p>比方说要对 add merge 这次提交打标签，它对应的 commit id 是 f52c633，输入命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v0.9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f52c633</span></span></code></pre></div><p>再用命令 <code>git tag</code> 查看标签：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v0.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v1.0</span></span></code></pre></div><p>注意，标签不是按时间顺序列出，而是按字母排序的。可以用 <code>git show &lt;tagname&gt;</code> 查看标签信息：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v0.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f52c63349bc3c1593499807e5c8e972b82c8f286</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">v0.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Michael</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Liao</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">askxuefeng@gmail.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Fri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> May</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 21:56:54</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2018</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a/readme.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b/readme.txt</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>可以看到，v0.9 确实打在 add merge 这次提交上。</p><p>还可以创建带有说明的标签，用 <code>-a</code> 指定标签名，<code>-m</code> 指定说明文字：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;version 0.1 released&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1094adb</span></span></code></pre></div><p>用命令 <code>git show &lt;tagname&gt;</code> 可以看到说明文字：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v0.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v0.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Tagger:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Michael</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Liao</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">askxuefeng@gmail.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Fri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> May</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 22:48:43</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2018</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> released</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1094adb7b9b3807259d8cb349e7df1d4d6477073</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">v0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Author:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Michael</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Liao</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">askxuefeng@gmail.co</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Fri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> May</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 21:06:15</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2018</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    append</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GPL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a/readme.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b/readme.txt</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意</p><p>标签总是和某个 commit 挂钩。如果这个 commit 既出现在 master，又出现在 dev 分支，那么在这两个分支上都可以看到这个标签。</p></div><div class="warning custom-block"><p class="custom-block-title">小结</p><ul><li>命令 <code>git tag &lt;tagname&gt;</code> 用于新建一个标签，默认为 HEAD，也可以指定一个 commit id；</li><li>命令 <code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;</code> 可以指定标签信息；</li><li>命令 <code>git tag</code> 可以查看所有标签。</li></ul></div>`,23),l=[t];function p(k,e,F,d,g,r){return a(),i("div",null,l)}const C=s(h,[["render",p]]);export{y as __pageData,C as default};