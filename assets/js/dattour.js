const bookings = [{
        id: 1,
        tenKhachHang: "Nguyễn Văn A",
        email: "nguyenvana@gmail.com",
        soDienThoai: "0123456789",
        tenTour: "Tour Hạ Long 3 ngày 2 đêm",
        danhMuc: "Tour miền Bắc",
        soNguoi: 2,
        tongTien: "5,000,000",
        ngayDat: "2024-01-15",
        trangThai: "Đã xác nhận"
    },
    {
        id: 2,
        tenKhachHang: "Trần Thị B",
        email: "tranthib@gmail.com",
        soDienThoai: "0987654321",
        tenTour: "Tour Đà Nẵng - Hội An",
        danhMuc: "Tour miền Trung",
        soNguoi: 4,
        tongTien: "14,000,000",
        ngayDat: "2024-01-20",
        trangThai: "Chờ xác nhận"
    },
    {
        id: 3,
        tenKhachHang: "Lê Văn C",
        email: "levanc@gmail.com",
        soDienThoai: "0369852147",
        tenTour: "Tour Phú Quốc",
        danhMuc: "Tour miền Nam",
        soNguoi: 1,
        tongTien: "4,500,000",
        ngayDat: "2024-01-25",
        trangThai: "Đã hủy"
    }
];

function taoHangBang(booking) {
    const trangThaiClass = booking.trangThai === "Đã xác nhận" ? "bg-success" :
        booking.trangThai === "Chờ xác nhận" ? "bg-warning" : "bg-danger";

    return `
        <tr>
            <td>${booking.id}</td>
            <td>${booking.tenKhachHang}</td>
            <td>${booking.email}</td>
            <td>${booking.soDienThoai}</td>
            <td>${booking.tenTour}</td>
            <td>${booking.danhMuc}</td>
            <td>${booking.soNguoi}</td>
            <td>${booking.tongTien}</td>
            <td>${booking.ngayDat}</td>
            <td>
                <span class="badge ${trangThaiClass}">${booking.trangThai}</span>
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

function renderBookings() {
    const tbody = document.getElementById('tbody-dattour');
    const html = bookings.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

function searchBooking() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const trangThaiFilter = document.querySelector('select[class="form-control"]').value;
    const tbody = document.getElementById('tbody-dattour');

    const filteredBookings = bookings.filter(item => {
        const matchesSearch = item.tenKhachHang.toLowerCase().includes(searchTerm);

        const matchesStatus = trangThaiFilter === "" ||
            (trangThaiFilter === "pending" && item.trangThai === "Chờ xác nhận") ||
            (trangThaiFilter === "confirmed" && item.trangThai === "Đã xác nhận") ||
            (trangThaiFilter === "cancelled" && item.trangThai === "Đã hủy");

        return matchesSearch && matchesStatus;
    });

    const html = filteredBookings.map(taoHangBang).join('');
    tbody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderBookings);