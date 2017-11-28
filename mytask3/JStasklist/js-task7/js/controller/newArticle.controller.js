// app.controller('newArticle',function ($scope,$http) {
//     $scope.submit = function () {
//         var oFiles = document.getElementById('img').files;
//             console.log(oFiles[0]);
//             $scope.c = oFiles[0].name;
//             $scope.d = oFiles[0].size;
//             var formData = new FormData();
//             formData.append("file", oFiles[0]);
//             $http({
//                 method: "POST",
//                 url: '/carrots-admin-ajax/a/u/img/task',
//                 headers: {"Content-Type": undefined},
//                 data: formData
//             }).then(function successCallback(data) {
//                 console.log(data);
//             })
//         }
// });
// function submit() {
//     var oFiles = document.getElementById('img').files;
//     console.log(oFiles[0]);
//     var formData = new FormData();
//     formData.append("file",oFiles[0]);
//
//     console.log(formData);
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange=function()
//     {
//         if (xhr.readyState==4 && xhr.status==200)
//         {
//            alert(xhr.responseText);
//         }
//     };
// xhr.open('post','/carrots-admin-ajax/a/u/img/task',true);
// xhr.send(formData);
//
// }
// function showPreview(source) {
//     var file = source.files[0];
//     if(window.FileReader){
//         var fr = new FileReader();
//         fr.onloadend = function(e) {
//             document.getElementById("portrait").src = e.target.result;
//         };
//         fr.readAsDataURL(file);
//     }
// }


