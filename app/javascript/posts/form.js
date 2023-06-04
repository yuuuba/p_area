// document.addEventListener('DOMContentLoaded', () => {
//   const areaSelect = document.querySelector('#area-select');
//   const realForm = document.querySelector('#real-form');
//   const netForm = document.querySelector('#net-form');
//   const prefectureSelect = document.querySelector('#prefecture-select');
//   const citySelect = document.querySelector('#city-select');

//   if (areaSelect) {
//     areaSelect.addEventListener('change', () => {
//       if (areaSelect.value === 'real') {
//         realForm.style.display = 'block';
//         netForm.style.display = 'none';
//         sendRealData();
//       } else if (areaSelect.value === 'net') {
//         realForm.style.display = 'none';
//         netForm.style.display = 'block';
//         sendNetData();
//       } else {
//         realForm.style.display = 'none';
//         netForm.style.display = 'none';
//       }
//     });
//   }

//   const sendNetData = () => {
//     const areaId = window.areaId;

//     fetch(`/areas/${areaId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': '<%= form_authenticity_token %>'
//       },
//       body: JSON.stringify({ net: true })
//     })
//       .then(response => response.json())
//       .then(data => {
//         // レスポンスの処理（任意）
//       })
//       .catch(error => {
//         console.error('An error occurred while sending net data:', error);
//       });
//   };

//   const sendRealData = () => {
//     const areaId = window.areaId;

//     fetch(`/areas/${areaId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': '<%= form_authenticity_token %>'
//       },
//       body: JSON.stringify({ real: true })
//     })
//       .then(response => response.json())
//       .then(data => {
//         // レスポンスの処理（任意）
//       })
//       .catch(error => {
//         console.error('An error occurred while sending real data:', error);
//       });
//   };
// });
document.addEventListener('DOMContentLoaded', () => {
  // TODO: 「ネット」「リアル」で「リアル」が選択されたら、「県名 (ダミーデータ)」一覧 選択肢を表示させたい
  // 1. <select/> 要素を querySelector() で特定し、変数に代入
  const selectElement = document.querySelector('#post_area_id')

  // 2. addEventListener() で <select/> 要素にイベント (change) を設定
  // 2-a. 設定したイベントを元に、やりたいことを (関数として) 書く
  selectElement.addEventListener('change', (event) => {
    // ここで 何をするか 記述

    const realForm = document.querySelector('#real-form')

    // if 「リアル」が選択されたら...
    if (event.target.value === 'Real') {
      // 都道府県を持つ、<select/> の非表示化を解除する
      realForm.style.display = ''
    } else {
      realForm.style.display = 'none'
    }
  })

  // TODO:
  // 1. Rails から JSON (String) を渡してもらう (JS 側からリクエストを送る.. fetch メソッド)
  // 2. JS では JSON.parse() で オブジェクトに変換
  // 3. 以降は オブジェクトの key を参照することで、 value を読み出せる

  // 例: JS から Rails にリクエストを送ると、JSON {message: "Hello"} が返ってくる... JS 側で console.log() に結果を出力する、単機能アプリ
  
})