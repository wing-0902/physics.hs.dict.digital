# [地理探求　用語辞書](https://geography.hs.dict.digital)

## ディレクトリ構造

```
/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── _headers
│   └── _redirects
├── app
│   ├── assets
│   │   └── global.scss
│   ├── components
│   │   └── Header.vue
│   ├── layouts
│   │   └── default.vue
│   ├── pages
│   │   └── index.vue
│   └── var
│       └── msg.ts
├── content
│   └── dict <- ファイル名は全て"index.md"
│       ├── gb
│       │   ├──index.md <- 国家の場合ISO 3166-1に従う（ドメイン名とおおかた一致するが，GBなど例外あり）
│       │   └──gibraltar/index.md <- 複数階層のパスも可能
│       ├── eu/index.md <- トップレベルドメインがあればそれに従う
│       └── asia_nies/index.md <- 単語を繋げる時は「_」（アンダースコア）を使う
└── package.json
```
