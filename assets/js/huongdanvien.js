const huongDanViens = [{
        id: 1,
        hoTen: "Nguyễn Văn A",
        email: "nguyenvana@gmail.com",
        soDienThoai: "0123456789",
        diaChi: "Hà Nội",
        trangThai: "active",
        thoiGian: "2024-01-15"
    },
    {
        id: 2,
        hoTen: "Trần Thị B",
        email: "tranthib@gmail.com",
        soDienThoai: "0987654321",
        diaChi: "Hồ Chí Minh",
        trangThai: "active",
        thoiGian: "2024-01-15"
    },
    {
        id: 3,
        hoTen: "Lê Văn C",
        email: "levanc@gmail.com",
        soDienThoai: "0369852147",
        diaChi: "Đà Nẵng",
        trangThai: "inactive",
        thoiGian: "2024-01-14"
    },
    {
        id: 4,
        hoTen: "Phạm Thị D",
        email: "phamthid@gmail.com",
        soDienThoai: "0741852963",
        diaChi: "Cần Thơ",
        trangThai: "active",
        thoiGian: "2024-01-13"
    },
    {
        id: 5,
        hoTen: "Hoàng Văn E",
        email: "hoangvane@gmail.com",
        soDienThoai: "0258963147",
        diaChi: "Huế",
        trangThai: "active",
        thoiGian: "2024-01-12"
    }
];

function taoHangBang(item) {
    return `
        <tr>
            <td>${item.id}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.soDienThoai}</td>
            <td>${item.diaChi}</td>
            <td>
                <span class="badge ${item.trangThai === 'active' ? 'bg-success' : 'bg-danger'}">
                    ${item.trangThai === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                </span>
            </td>
            <td>${item.thoiGian}</td>
            <td>
                <div class="btn-group">
                    <button class="btn btn-main" title="Sửa">
                        <i class="fal fa-edit"></i>
                    </button>
                    <button class="btn btn-danger" title="Xóa">
                        <i class="fal fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

function renderHuongDanVien() {
    const tbody = document.getElementById('tbody-huongdanvien');
    const html = huongDanViens.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

function searchHuongDanVien() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tbody = document.getElementById('tbody-huongdanvien');

    const filteredHuongDanViens = huongDanViens.filter(item =>
        item.hoTen.toLowerCase().includes(searchTerm)
    );

    const html = filteredHuongDanViens.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderHuongDanVien);