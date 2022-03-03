document.getElementById("btnLuong").onclick = function(){
    var day = document.getElementById("day").value;
    var day = parseInt(day);
    var luong = day*100000;
    var tienLuong = "Tiền lương của bạn là: " + luong;
    document.getElementById("thongBaoluong").innerHTML = tienLuong;
}