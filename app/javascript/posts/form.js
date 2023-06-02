document.addEventListener("DOMContentLoaded", function() {
  var prefectureSelect = document.getElementById("post_prefecture_id");
  var citySelect = document.getElementById("post_city_id");

  prefectureSelect.addEventListener("change", function() {
    var prefectureId = prefectureSelect.value;

    // Ajaxリクエストを送信して市町村を取得
    fetch("/prefectures/" + prefectureId + "/cities")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // 市町村のセレクトボックスを更新
        citySelect.innerHTML = "";
        data.forEach(function(city) {
          var option = document.createElement("option");
          option.value = city.id;
          option.text = city.name;
          citySelect.appendChild(option);
        });
      });
  });
});
