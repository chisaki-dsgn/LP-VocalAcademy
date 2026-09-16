# [架空ボーカルスクールLP制作 / 音彩 VOCAL ACADEMY]

Figma（自作デザインカンプ）からコーディングを行った架空のボーカルスクールのLP（ランディングページ）です。  
実務を意識し、GitHubを用いたブランチ運用（Pull Request）を行って制作しました。

**サイトURL：** [https://　](https:/　)

【**デザインカンプ** 】

| PCデザインカンプ | スマホデザインカンプ |
| --- | --- |
| ![PC](./img/pc-readme.png) | ![SP](./img/sp-readme.png) |

---

## 制作概要

| 項目 | 内容 |
| :--- | :--- |
| **制作期間** | 2026年8月26日 〜 2026年8月30日（約23時間） |
| **対応範囲** | デザイン、コーディング、レスポンシブ対応、アニメーション実装 |
| **対応デバイス** | スマホ,PC（ブレークポイント：768px） |

---

## 使用技術・環境

- **HTML5** （セマンティックなマークアップ）
- **Sass (SCSS)** 
  - パーシャルファイル（`_*.scss`）によるモジュール管理
  - ターミナルでのコンパイル運用
  - **BEM** の設計思想を意識した命名規則
- **JavaScript**
- **エディタ:** VSCode
- **バージョン管理:** Git / GitHub（ブランチ運用・Pull Requestを活用）
- **ホスティング:** GitHub Pages
- **フォーム機能:** SSGform（サンクスページ遷移・自動返信設定済）

---

## 工夫した点・こだわった点

### 1. Sass（SCSS）パーシャル管理による保守性の向上
- 構造（`_header.scss`, `_footer.scss` 等）や要素ごとにパーシャルファイルを分割し、コードの可読性とメンテナンス性を高めました。
- ターミナル上でコンパイル環境を構築し、効率的な開発フローを意識しました。

### 2. BEM記法を意識したコンポーネント設計
- コンポーネントの再利用性とクラス名の重複防止のため、**BEM（Block, Element, Modifier）** の命名ルールを意識して設計・コーディングを行いました。

### 3. 実務を想定したGit / GitHub運用
- 1機能（または1セクション）の実装ごとに `feat/` ブランチを作成し、Pull Requestを通じて `main` ブランチへマージする開発フローを実践・記録しました。

### 4. フォームの実装とSSGform連携
- 問い合わせフォームには **SSGform** を採用し、静的サイトでありながら実用的なフォーム送信機能を実装しました。
- バリデーションや送信後のサンクスページ（`thanks.html`）への適切なリダイレクト遷移を正しく制御しています。
---

## ディレクトリ構成

```text
.
├── css/
│   ├── style.css          # SassからコンパイルされたCSS
│   └── style.css.map      
│
├── img/                   # 画像ファイル
│
├── js/
│   └── main.js            # JavaScriptファイル
│
├── scss/                  # Sass (SCSS)
│   ├── foundation/        # リセット・基本設定・変数定義
│   │   ├── _base.scss
│   │   └── _variables.scss
│   │
│   ├── pages/             # 下層ページ固有のスタイル
│   │   └── _thanks.scss
│   │
│   ├── sections/          # 各セクションごとのスタイル（BEM運用）
│   │   ├── _contact.scss
│   │   ├── _faq.scss
│   │   ├── _feature.scss
│   │   ├── _footer.scss
│   │   ├── _fv-cta.scss
│   │   ├── _header.scss
│   │   ├── _mv.scss
│   │   ├── _plan.scss
│   │   ├── _probrem.scss
│   │   └── _teacher.scss
│   │
│   └── style.scss         # パーシャルを全読み込み・コンパイルする親ファイル
│
├── .gitignore             # Git管理除外ファイル
├── index.html             # トップページ（LP）
└── thanks.html            # サンクスページ
