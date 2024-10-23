// HTMLを読み込んだあとに実行するイベントリスナーを設定する。
document.addEventListener('DOMContentLoaded', function() {

    // ログインボタンがクリックされたときの処理を設定する。
    document.getElementById('loginButton').addEventListener('click', function() {
        // ユーザー名とパスワードの入力欄から値を取得する。
        const username = document.getElementById('loginId').value;
        const password = document.getElementById('pass').value;

        // authenticate関数を呼び出して認証を行う。
        const isAuthenticated = authenticate(username, password);

        // 認証が成功した場合
        if (isAuthenticated) {
            // ログイン成功メッセージを表示する
            alert('ログイン成功');
            // index画面へリダイレクト。
            window.location.href = 'index.html';
        } else {
            // 認証が失敗した場合は
            // ログイン失敗メッセージを表示する
            alert('ログイン失敗');
            // パスワード入力欄をクリア。
            document.getElementById('pass').value = '';
        }
    });
});
