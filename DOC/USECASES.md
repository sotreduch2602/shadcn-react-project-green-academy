# Use Cases - Nền Tảng Thương Mại Điện Tử

## 1. Use Case Quản Lý Người Dùng

### 1.1 Đăng ký tài khoản mới

- **Actor**: Người dùng mới
- **Mô tả**: Người dùng tạo tài khoản mới trên hệ thống
- **Luồng xử lý**:
  1. Người dùng nhập email và mật khẩu
  2. Hệ thống xác thực thông tin
  3. Tạo tài khoản mới
  4. Thông báo đăng ký thành công

### 1.2 Đăng nhập

- **Actor**: Người dùng đã đăng ký
- **Mô tả**: Người dùng đăng nhập vào hệ thống
- **Luồng xử lý**:
  1. Người dùng nhập thông tin đăng nhập
  2. Hệ thống xác thực
  3. Cấp quyền truy cập
  4. Chuyển hướng đến trang chủ

### 1.3 Quản lý hồ sơ

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Cập nhật thông tin cá nhân và mật khẩu
- **Luồng xử lý**:
  1. Xem thông tin hiện tại
  2. Cập nhật thông tin mới
  3. Lưu thay đổi
  4. Thông báo cập nhật thành công

### 1.4 Đăng xuất

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Kết thúc phiên đăng nhập
- **Luồng xử lý**:
  1. Xác nhận đăng xuất
  2. Xóa token xác thực
  3. Chuyển hướng về trang đăng nhập

## 2. Use Case Quản Lý Sản Phẩm

### 2.1 Xem danh sách sản phẩm

- **Actor**: Người dùng
- **Mô tả**: Xem và lọc danh sách sản phẩm
- **Luồng xử lý**:
  1. Hiển thị danh sách sản phẩm
  2. Áp dụng bộ lọc (danh mục, giá, đánh giá)
  3. Phân trang kết quả
  4. Hiển thị thông tin sản phẩm

### 2.2 Tìm kiếm sản phẩm

- **Actor**: Người dùng
- **Mô tả**: Tìm kiếm sản phẩm theo tên
- **Luồng xử lý**:
  1. Nhập từ khóa tìm kiếm
  2. Hiển thị kết quả tìm kiếm
  3. Lọc và sắp xếp kết quả

### 2.3 Xem chi tiết sản phẩm

- **Actor**: Người dùng
- **Mô tả**: Xem thông tin chi tiết của sản phẩm
- **Luồng xử lý**:
  1. Chọn sản phẩm từ danh sách
  2. Hiển thị thông tin chi tiết
  3. Hiển thị đánh giá và bình luận

## 3. Use Case Quản Lý Giỏ Hàng

### 3.1 Thêm sản phẩm vào giỏ

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Thêm sản phẩm vào giỏ hàng
- **Luồng xử lý**:
  1. Chọn sản phẩm
  2. Chọn số lượng
  3. Thêm vào giỏ hàng
  4. Cập nhật tổng giá trị

### 3.2 Cập nhật giỏ hàng

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Thay đổi số lượng hoặc xóa sản phẩm
- **Luồng xử lý**:
  1. Chọn sản phẩm trong giỏ
  2. Cập nhật số lượng hoặc xóa
  3. Cập nhật tổng giá trị

### 3.3 Xem tổng giá trị

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Xem tổng giá trị giỏ hàng
- **Luồng xử lý**:
  1. Tính toán tổng tiền
  2. Hiển thị chi tiết
  3. Cập nhật theo thời gian thực

## 4. Use Case Xử Lý Đơn Hàng

### 4.1 Tạo đơn hàng

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Chuyển giỏ hàng thành đơn hàng
- **Luồng xử lý**:
  1. Kiểm tra giỏ hàng
  2. Nhập thông tin giao hàng
  3. Xác nhận đơn hàng
  4. Tạo đơn hàng mới

### 4.2 Thanh toán

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Thực hiện thanh toán đơn hàng
- **Luồng xử lý**:
  1. Chọn phương thức thanh toán
  2. Mô phỏng quy trình thanh toán
  3. Tạo hóa đơn kỹ thuật số
  4. Cập nhật trạng thái đơn hàng

### 4.3 Quản lý đơn hàng

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Theo dõi và quản lý đơn hàng
- **Luồng xử lý**:
  1. Xem trạng thái đơn hàng
  2. Hủy đơn hàng (nếu đang chờ)
  3. Xem chi tiết đơn hàng

## 5. Use Case Quản Lý Đánh Giá

### 5.1 Đánh giá sản phẩm

- **Actor**: Người dùng đã mua sản phẩm
- **Mô tả**: Đánh giá và nhận xét sản phẩm
- **Luồng xử lý**:
  1. Chọn sản phẩm cần đánh giá
  2. Chấm điểm và viết nhận xét
  3. Gửi đánh giá
  4. Hiển thị đánh giá mới

### 5.2 Xem đánh giá

- **Actor**: Người dùng
- **Mô tả**: Xem các đánh giá của sản phẩm
- **Luồng xử lý**:
  1. Chọn sản phẩm
  2. Hiển thị danh sách đánh giá
  3. Lọc và sắp xếp đánh giá

## 6. Use Case Quản Trị Hệ Thống

### 6.1 Quản lý sản phẩm (Admin)

- **Actor**: Quản trị viên
- **Mô tả**: Quản lý danh sách sản phẩm
- **Luồng xử lý**:
  1. Thêm sản phẩm mới
  2. Cập nhật thông tin sản phẩm
  3. Xóa sản phẩm
  4. Quản lý danh mục

### 6.2 Quản lý đơn hàng (Admin)

- **Actor**: Quản trị viên
- **Mô tả**: Quản lý đơn hàng trong hệ thống
- **Luồng xử lý**:
  1. Xem danh sách đơn hàng
  2. Cập nhật trạng thái đơn hàng
  3. Xem chi tiết đơn hàng
  4. Xử lý khiếu nại

## 7. Use Case Báo Cáo và Thống Kê

### 7.1 Xem lịch sử đơn hàng

- **Actor**: Người dùng đã đăng nhập
- **Mô tả**: Xem lịch sử đơn hàng cá nhân
- **Luồng xử lý**:
  1. Truy cập lịch sử đơn hàng
  2. Lọc theo khoảng thời gian
  3. Lọc theo trạng thái
  4. Tìm kiếm theo mã đơn hàng

## 8. Use Case Giao Diện Người Dùng

### 8.1 Responsive Design

- **Actor**: Người dùng
- **Mô tả**: Hiển thị giao diện phù hợp với thiết bị
- **Luồng xử lý**:
  1. Phát hiện kích thước màn hình
  2. Điều chỉnh bố cục
  3. Tối ưu hiển thị

### 8.2 Thông báo và Tương Tác

- **Actor**: Người dùng
- **Mô tả**: Hiển thị thông báo và tương tác
- **Luồng xử lý**:
  1. Hiển thị thông báo toast
  2. Hiển thị hộp thoại modal
  3. Hiển thị trạng thái tải
  4. Xử lý tương tác người dùng
