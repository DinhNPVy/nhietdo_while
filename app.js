let tmp = parseInt(prompt("Nhập vào nhiệt độ"))
while (tmp < 20 || tmp > 100){
    if(tmp < 20){
        alert("Nhiệt độ quá lạnh vì thấp hơn 20")
        tmp = parseInt(prompt("Nhập vào nhiệt độ"))
    }else if(tmp > 100){
        alert("Nhiệt độ quá nóng")
        tmp = parseInt(prompt("Nhập vào nhiệt độ"))
    }
}
alert("Nhiệt độ bình thường")