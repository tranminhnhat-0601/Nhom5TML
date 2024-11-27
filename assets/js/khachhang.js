const khachHangs = [{
        id: 1,
        hoTen: "Phạm Nguyễn Trường Huy",
        avatar: "/assets/img/clients/truonghuy.jpg",
        email: "nptruonghuy07@gnail.com",
        soDienThoai: "0123456789",
        diaChi: "Hồ Chí Minh",
        trangThai: "active",
        thoiGian: "2024-01-15"
    },
    {
        id: 2,
        hoTen: "Trần Minh Nhật",
        avatar: "/assets/img/clients/minhnhat.jpg",
        email: "tranminhnhat0615@gmail.com",
        soDienThoai: "0987654321",
        diaChi: "Hồ Chí Minh",
        trangThai: "active",
        thoiGian: "2024-01-15"
    },
    {
        id: 3,
        hoTen: "Nguyễn Chánh Hưng ",
        avatar: "/assets/img/clients/chanhhung.jpg",
        email: "nguyenchanhhung2.qng06@gmail.com",
        soDienThoai: "0369852147",
        diaChi: "Hồ Chí Minh",
        trangThai: "inactive",
        thoiGian: "2024-01-14"
    },
    {
        id: 4,
        hoTen: "Lê Hoàng Huy",
        avatar: "/assets/img/clients/hoanghuy.jpg",
        email: "hoanghuyl2k6@gmail.com",
        soDienThoai: "0741852963",
        diaChi: "Hồ Chí Minh",
        trangThai: "active",
        thoiGian: "2024-01-13"
    },
    {
        id: 5,
        hoTen: "Phạm Nguyễn Công Sơn",
        avatar: "/assets/img/clients/congson.jpg",
        email: "phamson19526@gmail.com",
        soDienThoai: "0258963147",
        diaChi: "Hồ Chí Minh",
        trangThai: "active",
        thoiGian: "2024-01-12"
    }
];

function taoHangBang(item) {
    return `
        <tr>
            <td>${item.id}</td>
            <td class="text-start">
                <img style="width: 30px; height: 30px; object-fit: cover; border-radius: 50%;" class="provider csm-lz-load csm-lz-loaded" src="${item.avatar}">
                ${item.hoTen}
            </td>
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

function renderKhachHang() {
    const tbody = document.getElementById('tbody-khachhang');
    const html = khachHangs.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

function searchKhachHang() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tbody = document.getElementById('tbody-khachhang');

    const filteredKhachHangs = khachHangs.filter(item =>
        item.hoTen.toLowerCase().includes(searchTerm)
    );

    const html = filteredKhachHangs.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderKhachHang);