const onClickAdd = () => {
  // 中身を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
};

// 渡された引数を元に未完了TODOを作る 関数
const createIncompleteTodo = (todo) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  // button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // li

    // li検索
    const moveTarget = completeButton.closest("li");

    // ボタンを消す
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 戻す処理
    backButton.addEventListener("click", () => {
      // todoの内容を取得し、未完了リストへ追加
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);

      // 完了から削除
      backButton.closest("li").remove();
    });

    // 生成
    moveTarget.firstElementChild.appendChild(backButton);

    // 完了リストへ移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // liタグを削除

    // liタグを検索
    const deleteTarget = deleteButton.closest("li");

    // 消す
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 階層構造の設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // ulタグの子に設定
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
