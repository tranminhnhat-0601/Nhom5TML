const danhMucTours = [{
        id: 1,
        tenDanhMuc: "Tour trong nước",
        trangThai: "active",
        thoiGian: "2024-01-15"
    },
    {
        id: 2,
        tenDanhMuc: "Tour nước ngoài",
        trangThai: "active",
        thoiGian: "2024-01-15"
    },
    {
        id: 3,
        tenDanhMuc: "Tour nghỉ dưỡng",
        trangThai: "inactive",
        thoiGian: "2024-01-14"
    },
    {
        id: 4,
        tenDanhMuc: "Tour văn hóa",
        trangThai: "active",
        thoiGian: "2024-01-13"
    },
    {
        id: 5,
        tenDanhMuc: "Tour ẩm thực",
        trangThai: "active",
        thoiGian: "2024-01-12"
    }
];

function taoHangBang(item) {
    return `
        <tr>
            <td>${item.id}</td>
            <td>${item.tenDanhMuc}</td>
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

function renderDanhMucTour() {
    const tbody = document.getElementById('tbody-danhmuctour');
    const html = danhMucTours.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

function searchDanhMuc() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tbody = document.getElementById('tbody-danhmuctour');

    const filteredTours = danhMucTours.filter(item =>
        item.tenDanhMuc.toLowerCase().includes(searchTerm)
    );

    const html = filteredTours.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderDanhMucTour);