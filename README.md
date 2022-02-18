1. 페이지 영역 나누기
   a. GlobalRouter
   / => 홈페이지
   /join => 회원가입페이지 (카카오톡,트위터,구글,홈페이지 자체 회원가입)
   /search => Video와 User을 찾는 페이지

---

b. UserRotuer
/users/:id/ => User의 정보를 살펴봄
/users/login => 로그인 완료 페이지 (로그인하면 로그아웃 버튼 생겨서 로그아웃하면 /홈페이지로 이동)
(로그인되었을때 자기것만 수정하고,삭제가능)
/users/edit => User의 정보를 수정
/users/delete => User의 정보를 지움

---

c. VideoRouter
/videos/:id/watch => Video를 보는 페이지
/videos/:id/upload => Video를 업로드하는 페이지
/videos/:id/edit => Video를 수정하는 페이지
/videos/:id/delete => Video를 지우는 페이지
/videos/comments => 비디오에 댓글을 작성하는 페이지
/videos/comments/delete => 비디오에 작성한 댓글을 지우는 페이지

---
