# Nền Tảng Thương Mại Điện Tử với React & Shadcn UI

Một nền tảng thương mại điện tử hiện đại được xây dựng bằng React, TypeScript và các thành phần Shadcn UI. Dự án này triển khai trải nghiệm mua sắm trực tuyến đầy đủ tính năng với xác thực người dùng, quản lý sản phẩm, giỏ hàng và xử lý đơn hàng.

## Tính Năng

### 1. Xác Thực & Phân Quyền

- Đăng ký người dùng với email và mật khẩu
- Hệ thống đăng nhập bảo mật
- Chức năng đăng xuất
- Quản lý hồ sơ (cập nhật thông tin cá nhân)
- Khả năng đổi mật khẩu

### 2. Quản Lý Sản Phẩm

- Danh sách sản phẩm với phân trang
- Lọc nâng cao theo:
  - Danh mục
  - Khoảng giá
  - Đánh giá
- Tìm kiếm theo tên sản phẩm
- Xem chi tiết sản phẩm với:
  - Hình ảnh chất lượng cao
  - Mô tả sản phẩm
  - Thông tin giá
  - Trạng thái tồn kho
  - Đánh giá của người dùng

### 3. Giỏ Hàng

- Thêm/xóa sản phẩm
- Cập nhật số lượng sản phẩm
- Tính toán tổng giỏ hàng theo thời gian thực
- Dữ liệu giỏ hàng được lưu trữ

### 4. Xử Lý Đơn Hàng

- Quy trình thanh toán mô phỏng
- Tạo đơn hàng từ giỏ hàng
- Tạo hóa đơn kỹ thuật số
- Theo dõi trạng thái đơn hàng
- Hủy đơn hàng (cho đơn hàng đang chờ)

### 5. Lịch Sử Đơn Hàng

- Xem lịch sử đơn hàng đầy đủ
- Thông tin chi tiết đơn hàng
- Lọc đơn hàng theo:
  - Khoảng thời gian
  - Trạng thái
  - Mã đơn hàng

### 6. Đánh Giá Sản Phẩm

- Đánh giá và xếp hạng của người dùng
- Danh sách đánh giá với:
  - Thông tin người dùng
  - Ngày đăng
  - Điểm đánh giá

### 7. Bảng Điều Khiển Quản Trị

- Đăng nhập quản trị bảo mật
- Quản lý sản phẩm (các thao tác CRUD)
- Quản lý đơn hàng
- Cập nhật trạng thái
- Xem chi tiết đơn hàng

### 8. Giao Diện Người Dùng

- Thiết kế phản hồi cho mọi thiết bị
- Trạng thái tải và hoạt ảnh
- Thông báo toast
- Hộp thoại modal
- Bố cục sạch sẽ và trực quan

## Công Nghệ Sử Dụng

### Frontend

- React 18
- TypeScript
- Shadcn UI Components
- React Router v6
- React Context API
- Axios cho gọi API

### Quản Lý Trạng Thái

- React Context cho:
  - Trạng thái xác thực
  - Giỏ hàng
  - Tùy chọn người dùng

### Định Tuyến

- React Router cho điều hướng
- Các tuyến được bảo vệ cho người dùng đã xác thực
- Tuyến quản trị với quyền truy cập dựa trên vai trò

### Tích Hợp API

- Giao tiếp API RESTful
- Axios cho yêu cầu HTTP
- Xử lý lỗi và bộ chặn

## Cấu Trúc Dự Án

```
src/
├── components/         # Các thành phần UI có thể tái sử dụng
├── pages/             # Các thành phần trang
├── layouts/           # Các thành phần bố cục
├── contexts/          # Các provider React Context
├── hooks/             # Các hook React tùy chỉnh
├── services/          # Các dịch vụ API
├── types/             # Định nghĩa kiểu TypeScript
├── utils/             # Các hàm tiện ích
└── assets/            # Tài nguyên tĩnh (hình ảnh, biểu tượng)
```

## Bắt Đầu

1. Sao chép kho lưu trữ
2. Cài đặt các phụ thuộc:
   ```bash
   npm install
   ```
3. Khởi động máy chủ phát triển:
   ```bash
   npm run dev
   ```

## Biến Môi Trường

Tạo file `.env` trong thư mục gốc với các biến sau:

```
VITE_API_URL=your_api_url
VITE_APP_NAME=your_app_name
```

## Đóng Góp

1. Fork kho lưu trữ
2. Tạo nhánh tính năng của bạn
3. Commit các thay đổi
4. Đẩy lên nhánh
5. Tạo Pull Request mới

## Giấy Phép

Dự án này được cấp phép theo Giấy phép MIT - xem file LICENSE để biết thêm chi tiết.
