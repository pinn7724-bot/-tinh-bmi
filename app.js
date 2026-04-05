// ===== PHẦN 1: BIẾN =====
let ten = "Lan";
let tuoi = 28;
let laDaKho = true;

// ===== PHẦN 2: HÀM =====
function phanTichDa(loaiDa, tuoi) {
    if (loaiDa === "kho") {
        return "Da khô + " + tuoi + " tuổi → cần dưỡng ẩm sâu";
    } else if (loaiDa === "dau") {
        return "Da dầu → cần kiểm soát bã nhờn";
    } else {
        return "Da thường → chăm sóc cơ bản";
    }
}

// ===== PHẦN 3: DÙNG HÀM =====
let ketQua = phanTichDa("kho", tuoi);
console.log("Khách hàng:", ten);
console.log("Tư vấn:", ketQua);