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

VI. NodeJs Server
1) Tạo folder backend
2) -> npm init (Sau đó ấn enter liên tục)
3) -> npm install express
4) "type": "module", (thêm vào ở package.json/backend)
5) Thêm (JSON viewer) vào google chrome
6) npm install --save-dev nodemon (Lưu lại data ở backend mà không phải reload)
- npm start

VII. Axios - Load Products from Backend
1) cd frontend -> npm install axios
2) Thêm 2 components: LoadingBox and MessageBox
3) const {data} là không thể thay đổi

VIII. Install ESlint (ESlint chuyên fix lỗi do nhiều lập trình viên có cách viết khác nhau viết code khác nhau)
1) install VSCode eslint extension
2) npm install -D eslint
3) ./node_modules/.bin/eslint --init
- How would you like to use ESLint? · problems
- What type of modules does your project use? · esm
- Which framework does your project use? · react
- Does your project use TypeScript? · No
- Where does your code run? · browser, node (ấn space để chọn)
- What format do you want your config file to be in? · JavaScript
4) Chú ý: .env

IX. Redux - store.js
1) cd frontend -> npm install redux-thunk
2) store.js
3) Folder : Actions và Constants
4) Lưu ý khi import thằng AI tabnine nó hay bị nhầm tên viết hoa và viết thường