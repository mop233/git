import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.BLRFJa7s.js";const C=JSON.parse('{"title":"撤销修改","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"base/control/revoke.md","filePath":"base/control/revoke.md"}'),h={name:"base/control/revoke.md"},n=t(`<h1 id="撤销修改" tabindex="-1">撤销修改 <a class="header-anchor" href="#撤销修改" aria-label="Permalink to &quot;撤销修改&quot;">​</a></h1><p>自然，你是不会犯错的。不过现在是凌晨两点，你正在赶一份工作报告，你在 readme.txt 中添加了一行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> under</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GPL.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mutable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> called</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stage.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tracks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">My</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stupid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> still</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SVN.</span></span></code></pre></div><p>在你准备提交前，一杯咖啡起了作用，你猛然发现了 stupid boss 可能会让你丢掉这个月的奖金！</p><p>既然错误发现得很及时，就可以很容易地纠正它。你可以删掉最后一行，手动把文件恢复到上一个版本的状态。如果用 <code>git status</code> 查看一下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> staged</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> what</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git checkout -- &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> discard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> working</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   readme.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> added</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (use </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git add&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and/or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git commit -a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>你可以发现，Git 会告诉你，<code>git checkout -- &lt;file&gt;</code> 可以丢弃工作区的修改：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span></code></pre></div><p>上面这条命令的意思是，把 readme.txt 文件在工作区的修改全部撤销，这里有两种情况：</p><ul><li>readme.txt 自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；</li><li>readme.txt 已经添加到暂存区后，又做了修改，现在，撤销修改就回到添加到暂存区后的状态。</li></ul><p>总之，这就是让这个文件回到最近一次 <code>git add</code> 或 <code>git commit</code> 时的状态。现在，看看 readme.txt 文件的内容：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> under</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GPL.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mutable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> called</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stage.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tracks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files.</span></span></code></pre></div><p>文件内容果然复原了。</p><p><code>git checkout -- &lt;file&gt;</code> 命令中的 <code>--</code> 很重要，没有 <code>--</code>，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到 <code>git checkout</code> 命令。</p><p>现在假定是凌晨 3 点，你不但写了一些胡话，还 <code>git add</code> 到暂存区了：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> distributed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> under</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GPL.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mutable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> called</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stage.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tracks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">My</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stupid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> still</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SVN.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span></code></pre></div><p>庆幸的是，在 commit 之前，你发现了这个问题。用 <code>git status</code> 查看一下，修改只是添加到了暂存区，还没有提交：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git reset HEAD &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unstage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   readme.txt</span></span></code></pre></div><p>Git 同样告诉我们，用命令 <code>git reset HEAD &lt;file&gt;</code> 可以把暂存区的修改撤销掉（unstage），重新放回到工作区：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Unstaged</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	readme.txt</span></span></code></pre></div><p><code>git reset</code> 命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用 HEAD 时，表示最新的版本。</p><p>再用 <code>git status</code> 查看一下，现在暂存区是干净的，工作区有修改：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> staged</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> what</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git checkout -- &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> discard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> working</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   readme.txt</span></span></code></pre></div><p>还记得如何丢弃工作区的修改吗？</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readme.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nothing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> working</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre></div><p>整个世界终于清净了！</p><p>现在，假设你不但改错了东西，还从暂存区提交到了版本库，怎么办呢？还记得<a href="./reset">版本回退</a>一节吗？可以回退到上一个版本。不过，这是有条件的，就是你还没有把自己的本地版本推送到远程。还记得 Git 是分布式版本控制系统吗？我们会讲到远程版本库，一旦你把 stupid boss 提交推送到远程版本库，你就真的惨了……</p><div class="warning custom-block"><p class="custom-block-title">小结</p><p>场景 1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 <code>git checkout -- &lt;file&gt;</code>。</p><p>场景 2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区，想丢弃修改，分两步：</p><ol><li>用命令 <code>git reset HEAD &lt;file&gt;</code>，就回到了场景 1；</li><li>按场景 1 操作。</li></ol><p>场景 3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考<a href="./reset">版本回退</a>一节，不过前提是没有推送到远程库。</p></div>`,28),k=[n];function l(p,e,F,d,r,g){return a(),i("div",null,k)}const c=s(h,[["render",l]]);export{C as __pageData,c as default};