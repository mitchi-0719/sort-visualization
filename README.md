# Sort Visualization

ソートアルゴリズムを視覚的に学べるWebアプリケーションです。

## 概要

このアプリケーションは、様々なソートアルゴリズムの動作を視覚的に理解できるツールです。各アルゴリズムがどのようにデータを並び替えるかをアニメーションで確認できます。

## 機能

- **複数のソートアルゴリズム**
  - バブルソート（Bubble Sort）
  - 選択ソート（Selection Sort）

- **カスタマイズ可能な設定**
  - ソート順序の選択（昇順/降順）
  - 配列サイズの調整
  - ソート速度の制御

- **UI機能**
  - ダークモード対応
  - レスポンシブデザイン
  - 自動実行モード

## 技術スタック

- **フロントエンド**
  - React 18.2.0
  - Material-UI 5.14
  - Emotion（スタイリング）

- **開発環境**
  - Vite 4.4
  - React Select

## セットアップ

### 必要要件

- Node.js（推奨: 最新のLTS版）
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone git@github.com:mitchi-0719/sort-visualization.git

# ディレクトリに移動
cd sort-visualization

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてアプリケーションにアクセスできます。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

ビルドされたアプリケーションをローカルでプレビューできます。

## プロジェクト構造

```
sort-visualization/
├── public/              # 静的ファイル
├── src/
│   ├── api/            # API関連のコード
│   ├── common/         # 共通コンポーネント
│   ├── components/     # UIコンポーネント
│   │   ├── block/      # ブロック関連のコンポーネント
│   │   └── sort/       # ソートアルゴリズムのコンポーネント
│   ├── constants/      # 定数定義
│   ├── context/        # Reactコンテキスト
│   ├── feature/        # ユーティリティ関数とカスタムフック
│   └── styles/         # スタイル定義
├── index.html
├── package.json
└── vite.config.js
```

## 使い方

1. **ソートアルゴリズムの選択**: ドロップダウンメニューから実行したいソートアルゴリズムを選択
2. **設定の調整**: 配列のサイズやソート順序を設定
3. **実行**: ソートボタンをクリックしてアニメーションを開始
4. **観察**: アルゴリズムの動作をアニメーションで確認

## ライセンス

ISC

## リポジトリ

https://github.com/mitchi-0719/sort-visualization
