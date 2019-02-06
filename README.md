# vue app typescript

這是一個用 Vue + Typescript 的開發環境範例，由 [react-app-typescript](https://github.com/lightyen/react-app-typescript) 修改而來。

## 安裝以下開發環境

<a href="https://code.visualstudio.com">
<img src="https://user-images.githubusercontent.com/49339/32078127-102bbcfe-baa6-11e7-8ab9-b04dcad2035e.png" alt="vscode-img" width="10%"/></a>

<a href="https://nodejs.org">
<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="nodejs-img" width="15%"/></a>

<a href="https://yarnpkg.com">
<img src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png" alt="yarn-img" width="15%"/></a>

<a href="https://golang.org/dl">
<img src="https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="golang-img" width="10%"/></a>
<br />

---

![預覽圖](https://raw.githubusercontent.com/lightyen/vue-app-typescript/resources/images/env.png)

#### 安裝完後檢查環境是否正確運作

```shell
code -v
node -v
npm -v
yarn -v
go version
```

#### 安裝相關 Visual Studio Code 擴充元件

- **Debug for Firefox**
- **Debug for Chrome**
- **TSLint Vue**
- **Vetur**
- **Vue 2 Snippets**
- **GitLens**
- _Prettier_
- _Format Files_
- _EditorConfig for VS Code_

### 其他參考

- https://vuejs.org/
- https://github.com/kaorun343/vue-property-decorator
- https://github.com/mobxjs/mobx-vue

### 個人評語

**Vue** 技術棧對 **Typescript** 的支持不夠完善，尤其 **Vetur** 不支持 Typescript，導致大量丟失 Typescript 開發所帶來的好處，對我而言開發體驗真的很糟糕。(或許等 Vue 3.0 改版再看看...)
