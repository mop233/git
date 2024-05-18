import{_ as s,c as t,o as i,a3 as a}from"./chunks/framework.BLRFJa7s.js";const k=JSON.parse('{"title":"自定义 Git","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"others/custom/index.md","filePath":"others/custom/index.md"}'),e={name:"others/custom/index.md"},o=a('<h1 id="自定义-git" tabindex="-1">自定义 Git <a class="header-anchor" href="#自定义-git" aria-label="Permalink to &quot;自定义 Git&quot;">​</a></h1><p>在<a href="./../../base/start/install#配置">安装 Git</a>一节中，我们已经配置了 <code>user.name</code> 和 <code>user.email</code>，实际上，Git 还有很多配置项。</p><p>比如，让 Git 显示颜色，会让命令输出看起来更醒目：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color.ui</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre></div><p>这样，Git 会适当地显示不同的颜色，比如 <code>git status</code> 命令：</p><p><img src="https://raw.gitmirror.com/mop233/git/main/docs/others/images/01.png" alt="01"></p><p>文件名就会标色颜色。</p><p>我们在后面还会介绍如何更好地配置 Git，以便让你的工作更高效。</p>',8),n=[o];function p(r,c,h,l,d,_){return i(),t("div",null,n)}const m=s(e,[["render",p]]);export{k as __pageData,m as default};
