const tours = [{
        id: 1,
        tenTour: "Du lịch mùa Thu - Tour Du lịch Quy Nhơn - Phú Yên từ Sài Gòn 2024",
        danhMuc: "Tour trong nước",
        moTa: "Khám phá vẻ đẹp văn hóa, bãi biển và dịch vụ cao cấp",
        giaTien: "24,000,000",
        thoiGian: "5 ngày 4 đêm",
        ngayBatDau: "2024-02-01",
        ngayKetThuc: "2024-02-05",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 2,
        tenTour: "Du lịch Đà Nẵng mùa Thu - Hội An - Huế 3N2Đ từ Sài Gòn 2024",
        danhMuc: "Tour trong nước",
        moTa: "Khám phá vẻ đẹp cổ kính của phố cổ và di sản văn hóa",
        giaTien: "31,000,000",
        thoiGian: "3 ngày 2 đêm",
        ngayBatDau: "2024-02-10",
        ngayKetThuc: "2024-02-12",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 3,
        tenTour: "Du lịch Đà Nẵng mùa Thu - Huế - Làng Hương Thuỷ Xuân - Mikazuki từ Sài Gòn 2024",
        danhMuc: "Tour trong nước",
        moTa: "Trải nghiệm văn hóa làng nghề truyền thống và nghỉ dưỡng cao cấp",
        giaTien: "36,000,000",
        thoiGian: "7 ngày 6 đêm",
        ngayBatDau: "2024-02-15",
        ngayKetThuc: "2024-02-21",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 4,
        tenTour: "Du lịch Đà Nẵng mùa Thu - Huế - Động Phong Nha 5N4Đ từ Sài Gòn 2024",
        danhMuc: "Tour trong nước",
        moTa: "Khám phá hệ thống hang động kỳ vĩ của di sản thiên nhiên thế giới",
        giaTien: "24,000,000",
        thoiGian: "5 ngày 4 đêm",
        ngayBatDau: "2024-03-01",
        ngayKetThuc: "2024-03-05",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 5,
        tenTour: "Du lịch Đà Nẵng mùa Thu - Huế - Động Thiên Đường 5N4Đ từ Sài Gòn 2024",
        danhMuc: "Tour trong nước",
        moTa: "Chiêm ngưỡng vẻ đẹp kỳ ảo của hang động đẹp nhất thế giới",
        giaTien: "24,000,000",
        thoiGian: "5 ngày 4 đêm",
        ngayBatDau: "2024-03-10",
        ngayKetThuc: "2024-03-14",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 6,
        tenTour: "Du lịch Nhật Bản mùa Thu - Osaka - Kyoto - Yamanashi - Fuji - Tokyo từ Sài Gòn 2024",
        danhMuc: "Tour quốc tế",
        moTa: "Khám phá vẻ đẹp núi Phú Sĩ và thủ đô Tokyo sôi động",
        giaTien: "36,000,000",
        thoiGian: "7 ngày 6 đêm",
        ngayBatDau: "2024-03-15",
        ngayKetThuc: "2024-03-21",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 7,
        tenTour: "Du lịch Trung Quốc mùa Thu - Thành Đô - Cửu Trại Câu - Lạc Sơn - Đô Giang Yển từ Sài Gòn 2024",
        danhMuc: "Tour quốc tế",
        moTa: "Chiêm ngưỡng cảnh đẹp thiên nhiên tuyệt mỹ của Cửu Trại Câu",
        giaTien: "31,000,000",
        thoiGian: "6 ngày 5 đêm",
        ngayBatDau: "2024-03-20",
        ngayKetThuc: "2024-03-25",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    },
    {
        id: 8,
        tenTour: "Du lịch Trung Quốc mùa Thu - Trương Gia Giới - Phượng Hoàng Cổ Trấn 6 ngày từ Sài Gòn 2024",
        danhMuc: "Tour quốc tế",
        moTa: "Khám phá vẻ đẹp cổ kính của phố cổ nghìn năm tuổi",
        giaTien: "31,000,000",
        thoiGian: "6 ngày 5 đêm",
        ngayBatDau: "2024-03-25",
        ngayKetThuc: "2024-03-30",
        xuatPhat: "TP.HCM",
        vanChuyen: "Máy bay",
        trangThai: "Đang hoạt động"
    }
];

function taoHangBang(tour) {
    const trangThaiClass = tour.trangThai === "Đang hoạt động" ? "bg-success" : "bg-danger";

    return `
        <tr>
            <td>${tour.id}</td>
            <td>${tour.tenTour}</td>
            <td>${tour.danhMuc}</td>
            <td>${tour.moTa}</td>
            <td>${tour.giaTien}</td>
            <td>${tour.thoiGian}</td>
            <td>${tour.ngayBatDau}</td>
            <td>${tour.ngayKetThuc}</td>
            <td>${tour.xuatPhat}</td>
            <td>${tour.vanChuyen}</td>
            <td>
                <span class="badge ${trangThaiClass}">${tour.trangThai}</span>
            </td>
            <td>
                <div class="btn-group">
                    <button class="btn btn-sm btn-main" title="Sửa">
                        <i class="fal fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" title="Xóa">
                        <i class="fal fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

function renderTours() {
    const tbody = document.getElementById('tbody-quanlytour');
    const html = tours.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

function searchTour() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const trangThaiFilter = document.querySelector('select[class="form-control"]').value;
    const tbody = document.getElementById('tbody-quanlytour');

    const filteredTours = tours.filter(item => {
        const matchesSearch = item.tenTour.toLowerCase().includes(searchTerm) ||
            item.danhMuc.toLowerCase().includes(searchTerm);

        const matchesStatus = trangThaiFilter === "" ||
            (trangThaiFilter === "active" && item.trangThai === "Đang hoạt động") ||
            (trangThaiFilter === "inactive" && item.trangThai === "Tạm ngưng");

        return matchesSearch && matchesStatus;
    });

    const html = filteredTours.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderTours);