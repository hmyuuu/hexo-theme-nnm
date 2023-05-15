<h1 align="center">自炊 Volantis</h1>
<p align="center">
  一个修改自 hexo-theme-volantis 的 Hexo 主题。用于自己的博客使用。
</p>
<p align="center">
  A Hexo theme forked from hexo-theme-volantis. Modified for self-use.
</p>
<br>

<p align="center">
  <a href="https://www.npmjs.com/package/hexo-theme-jisui-vlts">
    <img src="https://img.shields.io/npm/v/hexo-theme-jisui-vlts?color=purple" alt="npm"/>
  </a>
  <img src="https://img.shields.io/github/repo-size/ymd45921/hexo-theme-ymd45921.svg" alt="REPO size"/>
  <a href="https://www.npmjs.com/package/hexo-theme-jisui-vlts">
    <img src="https://img.shields.io/github/license/ymd45921/hexo-theme-ymd45921.svg" alt="npm"/>
  </a>
  <a href="https://volantis.js.org"><img src="https://img.shields.io/badge/Volantis-6.0--pjax-54b3a4" alt="REPO size"/></a>
</p>

> 本来应该叫 `hexo-theme-ymd45921` 的，但是由于我的用户名实在是太垃圾了，用作包名会触发 npm 的垃圾检测发不出去…… 而 Hexo 并不支持找到用户命名空间下的包，导致就算坚持己见发到自己的命名空间里也没法正常通过包的方式引用，于是瞎起名字了。

目前的默认分支是 2023 年基于 Volantis 的 `6.0-pjax` 分支重新修改而成。旧版本仍然可以通过 `legacy` 分支取得，Commit ID = 16a166d31866538ca107db2e7a45bd6ec3668000.

## 使用说明

首先安装本包作为你的 Hexo 博客仓库的依赖：

```bash
yarn add hexo-theme-jisui-vlts
```

推荐卸载原本的 Markdown 渲染器，改用 `@kohaku/hexo-renderer-markdown-it`。

然后修改你的博客的 `_config.yml`，使用 `jisui-vlts` 作为你的主题；并在博客仓库的根目录创建 `_config.jisui-vlts.yml` 以进行主题配置。

本主题大多数配置和 Volantis 保持一致，可以参考它的[官方文档](https://volantis.js.org/v6/getting-started/)；此外，本主题对 Volantis 进行了一些修改，如果要利用这些，可以复制本仓库的下的 [`_config.yml`](_config.yml) 并在该文件的基础上进行修改。
