function tinhDiemTrungBinh(ten, toan, van, anh) {
    let diemtb = (toan + van + anh) / 3;
    console.log("điểm trung bình của" + ten + " là " + diemtb);
    console.log(`điểm trung bình của ${ten} là ${diemtb}`)
}
tinhDiemTrungBinh("tam", 1, 3, 5);

function chaoBan(ten,thoi_gian) {
    if(0<thoi_gian&&thoi_gian< 11) {
        console.log("chào buổi sáng");
    }
    if(12<thoi_gian &&thoi_gian< 17) {
        console.log("chào buổi chiều")
    }  
    if(18< thoi_gian && thoi_gian< 23) {
        console.log("chào buổi tối")
    }      
}
chaoBan("tâm", 15)
chaoBan("ánh", 16)
chaoBan("nhàn", 17)

function randomTu1den10() {
    console.log(Math.random() * 10);
}
randomTu1den10()

function tinhDiemTrungBinh3Diem(score1, score2, score3) {
    let diemtb = (score1 + score2 + score3) / 3;
    console.log(Math.round(diemtb));
}
tinhDiemTrungBinh3Diem(2,3,4); 

console.log('----------run---------')
setTimeout(function () {
    console.log("hê hê hê hê");
},20000);

setInterval(function() {
    console.log("hê ha hê ha");
},20000);

