# Groonga suggest sample with AngularJS

## Todo
* 一回もサブミットしていない場合、changeが動いていない
* 環境構築手順の整理。ZeroMQとかはいっていないとgroonga-suggest-httpdやlearnerはインストールされない。
* 自動学習を試す
* コンプリートボックスをつくるサンプルをつくる

```
% mkdir -p testdb
% groonga-suggest-create-dataset testdb/db test
% mkdir logs_test
% groonga-suggest-httpd -p 3100 -d -l logs_test/log --n-threads 1 testdb/db
% groonga-suggest-learner -l logs_test testdb/db
```

