for (let i = 0; i < 3; i++) {
    console.log('繰り返し処理１:'+i);
    continue;      // continue文
    console.log('繰り返し処理２:'+i);
}

console.log('for文終了後の処理');

実行結果のコンソール出力
繰り返し処理１:0
繰り返し処理１:1
繰り返し処理１:2
for文終了後の処理