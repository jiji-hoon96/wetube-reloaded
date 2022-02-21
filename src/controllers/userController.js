import User from "../models/User";
import bcrypt from "bcrypt";

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
  try {
    await User.create({
      name,
      email,
      username,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    {
      return res.status(400).render("join", {
        pageTitle,
        errorMessage: error._message,
      });
    }
  }
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username }); //username과 동일한 이름을 User.js에서 찾아서 user에 대입
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "없는 username 입니다",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "잘못된 Password 입니다",
    });
  }
  console.log("로그인성공했다 짜짜짜짜아안!!!!!!!");
  return res.redirect("/");
};
export const watch = (req, res) =>
  res.send("여기는 유저를 프로필을 보는 공간입니다");

export const logout = (req, res) => res.send("여기는 로그아웃페이지입니다");
