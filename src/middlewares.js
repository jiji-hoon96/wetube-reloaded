export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn); //로그인 되기전에는 Boolean이 false이다
  res.locals.siteName = "JihoonTube";
  res.locals.loggedInUser = req.session.user;
  next();
};
