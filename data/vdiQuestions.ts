export const vdiQuestions = [
  {
    id: "connectionMethod",
    question: "接続方法は何ですか？",
    type: "radio",
    options: ["UAG経由", "Connection Serverへ直接接続", "不明"],
  },
  {
    id: "vdiErrorPoint",
    question: "どのタイミングでエラーが出ますか？",
    type: "radio",
    options: ["Horizon Client起動時", "サーバ選択時", "デスクトップ接続時", "不明"],
  },
];