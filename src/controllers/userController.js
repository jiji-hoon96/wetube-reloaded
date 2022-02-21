import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = async (req, res) => {
  const { name, email, username, password, passwordConfirm, location } =
    req.body;
  const pageTitle = "Join";
  if (password !== passwordConfirm) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "비밀번호가 동일하지않습니다",
    });
  }
  const exists = await User.exists({ $or: [{ email }, { username }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "email 또는 username이 이미 있는 값입니다",
    });
  }
  await User.create({
    name,
    email,
    username,
    password,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const watch = (req, res) =>
  res.send("여기는 유저를 프로필을 보는 공간입니다");

export const logout = (req, res) => res.send("여기는 로그아웃페이지입니다");
