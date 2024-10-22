/**
 * HTMLを読み込んだあとに実行するイベントリスナーを設定する。
 * loginUtil.jsを読み込む。
 * ログインボタンがクリックされたときの処理を設定する。
 * ユーザー名とパスワードの入力欄から値を取得する。
 * authenticate関数を呼び出して認証を行う。
 * 認証が成功した場合は、ログイン成功メッセージを表示する。
 * 認証が失敗した場合は、ログイン失敗メッセージを表示する。
 */
document.addEventListener('DOMContentLoaded', function() {
    document.cookie = "username=user1";
    // getCookie('username');
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        console.log(document.cookie);
        const username = document.getElementById('loginId').value;
        const password = document.getElementById('password').value;
        
        if (authenticate(username, password)) {
            alert('ログイン成功');
        } else {
            alert('ログイン失敗');
        }
    });
});