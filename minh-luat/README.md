1.trước mỗi task cập nhật develop:
git switch develop
git pull origin develop

2.Tạo nhánh mới
git switch -c feature/header-ui

3.Khi hoàn thành:
git status
git add .
git commit -m "feat: implement desktop header UI"
git push -u origin feature/header-ui

4.Tiếp tục làm task khác:
git switch develop
git pull origin develop
git switch -c feature/hero-ui
