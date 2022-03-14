import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const multerUploader = multerS3({
  s3: s3,
  bucket: "jihoontube",
  acl: "public-read",
});

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn); //로그인 되기전에는 Boolean이 false이다
  res.locals.siteName = "JihoonTube";
  res.locals.loggedInUser = req.session.user || {};
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    //로그인 되어있으면 진행 아니면 로그인페이지로 이동
    return next();
  } else {
    req.flash("error", "Not Authrized");
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    //로그인 안되어 있으면 진행 아니면 home으로 이동
    return next();
  } else {
    req.flash("error", "Not Authrized");
    return res.redirect("/");
  }
};

export const avatarUpload = multer({
  dest: "uploads/avatars",
  limits: {
    fileSize: 300000,
  },
  storage: multerUploader,
});

export const videoUpload = multer({
  dest: "uploads/videos",
  limits: {
    fileSize: 1000000000,
  },
  storage: multerUploader,
});
