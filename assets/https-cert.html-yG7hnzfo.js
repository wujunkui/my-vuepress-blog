import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as i}from"./app-DI-hMV7D.js";const s={},n=i(`<h1 id="服务器安装-https-证书-免费版" tabindex="-1"><a class="header-anchor" href="#服务器安装-https-证书-免费版"><span>服务器安装 HTTPS 证书-免费版</span></a></h1><p>Now let’s install Certbot, the free, open source tool for managing Let’s Encrypt certificates:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo apt install software-properties-common</span></span>
<span class="line"><span>sudo add-apt-repository universe</span></span>
<span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt install certbot python3-certbot-nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To obtain a certificate, you can now use the Nginx Certbot plugin, by issuing the following command. The certificate can cover multiple domains (100 maximum) by appending additional <code>d</code> flags.</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo certbot --nginx certonly -d YOURDOMAIN -d www.YOURDOMAIN</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After entering your email address and agreeing to the terms and conditions, the Certbot client will generate the requested certificate. Make a note of where the certificate file <code>fullchain.pem</code> and key file <code>privkey.pem</code> are created, as you will need them later.</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Successfully received certificate.</span></span>
<span class="line"><span>Certificate is saved at: /etc/letsencrypt/live/ashleyrich.com/fullchain.pem</span></span>
<span class="line"><span>Key is saved at: /etc/letsencrypt/live/ashleyrich.com/privkey.pem</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Certbot will handle renewing all your certificates automatically, but you can test automatic renewals with the following command:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>sudo certbot renew --dry-run</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),o=[n];function r(c,l){return t(),a("div",null,o)}const u=e(s,[["render",r],["__file","https-cert.html.vue"]]),m=JSON.parse('{"path":"/posts/https-cert.html","title":"服务器安装 HTTPS 证书-免费版","lang":"zh-CN","frontmatter":{"icon":"file","date":"2024-05-29T00:00:00.000Z","category":["服务器"],"tag":["技术","运维"],"description":"服务器安装 HTTPS 证书-免费版 Now let’s install Certbot, the free, open source tool for managing Let’s Encrypt certificates: To obtain a certificate, you can now use the Nginx Certbot plug...","head":[["meta",{"property":"og:url","content":"https://hslx.site/posts/https-cert.html"}],["meta",{"property":"og:site_name","content":"胡思乱想实验室"}],["meta",{"property":"og:title","content":"服务器安装 HTTPS 证书-免费版"}],["meta",{"property":"og:description","content":"服务器安装 HTTPS 证书-免费版 Now let’s install Certbot, the free, open source tool for managing Let’s Encrypt certificates: To obtain a certificate, you can now use the Nginx Certbot plug..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T13:16:31.000Z"}],["meta",{"property":"article:author","content":"wujunkui"}],["meta",{"property":"article:tag","content":"技术"}],["meta",{"property":"article:tag","content":"运维"}],["meta",{"property":"article:published_time","content":"2024-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T13:16:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器安装 HTTPS 证书-免费版\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T13:16:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wujunkui\\",\\"url\\":\\"https://github.com/wujunkui\\"}]}"]]},"headers":[],"git":{"createdTime":1716995295000,"updatedTime":1717074991000,"contributors":[{"name":"ShiftIns","email":"wujunkui407@icloud.com","commits":2}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"posts/https-cert.md","localizedDate":"2024年5月29日","excerpt":"\\n<p>Now let’s install Certbot, the free, open source tool for managing Let’s Encrypt certificates:</p>\\n<div class=\\"language- line-numbers-mode\\" data-ext=\\"\\" data-title=\\"\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\" style=\\"background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span>sudo apt install software-properties-common</span></span>\\n<span class=\\"line\\"><span>sudo add-apt-repository universe</span></span>\\n<span class=\\"line\\"><span>sudo apt update</span></span>\\n<span class=\\"line\\"><span>sudo apt install certbot python3-certbot-nginx</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,m as data};
