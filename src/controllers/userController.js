export const edit = (req, res) =>
  res.send("여기는 유저의 정보를 수정하는 페이지입니다");

export const remove = (req, res) => {
  res.send("여기는 유저의 정보를 지우는 페이지입니다");
};
export const join = (req, res) => res.send("여기는 회원가입페이지입니다");
export const login = (req, res) => res.send("여기는 로그인 페이지입니다");
export const watch = (req, res) =>
  res.send("여기는 유저를 프로필을 보는 공간입니다");

export const logout = (req, res) => res.send("여기는 로그아웃페이지입니다");
