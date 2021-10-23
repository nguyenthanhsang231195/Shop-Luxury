I. Khởi tạo ReactJs
1) Tạo folder frontend
2) npx create-react-app frontend
3) -> cd frontend -> npm start
4) Chỉnh các file thông dụng : 
- /public : index.html
- /src : App.js/css; index.js; .gitignore
- Xóa các file rác không dùng đến
- Tạo file data.js(src); folder: images(public), videos(public) (thường sẽ dùng)
- Lưu ý nhớ chuyển file .gitignore và README.md ra ngoài folder frontend

II. Github
1) Tạo tài khoản
2) Làm theo các bước hướng dẫn:
- git init
- git add README.md (sau này dùng git add . = lấy tất cả các file)
- git commit -m "first commit" (đặt tên commit cho dễ nhớ)
- git branch -M main
- git remote add origin https://github.com/nguyenthanhsang231195/Shop-Luxury.git
- git push -u origin main (sau này chỉ dùng git push)

III. HomeScreen
* cd frontend ->
1) npm install react-router-dom
2) npm install react-bootstrap@next bootstrap@5.1.1 (Dùng Carousel)
3) Tạo folder Screens
- HomeScreen.js
- HomeScreen.css
4) Tạo folder Components
- Carousel
- HeaderComponent (Lưu các component ở phần Header)
- Lưu ý nhớ cài Route path="/"

IV. ProductScreen
* cd frontend ->
2) npm install redux
3) npm install react-redux
4) npm install react-router

V. CategoryScreen
- Lưu ý Components Filter
- Update : Category -> cd frontend -> npm install react-paginate (Dùng để chuyển trang)
(Chưa cần thiết vì không data lớn)
- Update : ProductScreen
