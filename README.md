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