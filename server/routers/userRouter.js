const express = require("express");
const jwt = require("jsonwebtoken");
const authenticateUser = require("../middlewares/authenticateUser.js");
const userController = require("../controllers/userController");
const {
	validateSignUp,
	validateSignIn,
} = require("../middlewares/validator");
const userRouter = express.Router();

// 회원가입
userRouter.post("/sign-up", validateSignUp, userController.signUpUser);

//로그인
userRouter.post("/login", validateSignIn, userController.signInUser);

//로그아웃
userRouter.post("/logout", userController.signOutUser);

//내 정보 조회
userRouter.get("/my-page", authenticateUser, userController.getUserInformation);

//내 정보 수정
userRouter.put("/my-page", authenticateUser, userController.updateUserInformation);

//회원탈퇴
userRouter.delete("/my-page", authenticateUser, userController.deleteUserInfomation);

//기존 비밀번호 확인
userRouter.get("/check-password", authenticateUser, userController.checkUserPassword);

//아이디 중복 확인
userRouter.get("/check-id", userController.checkUserId);

//닉네임 중복 확인
userRouter.get("/check-nickname", userController.checkUserNickname);

//이메일 인증 (feat.이메일 중복확인)
userRouter.get("/check-email", userController.checkUserEmail);

//임시 비밀번호 발급
userRouter.get("/help", userController.sendTemporaryPassword);

userRouter.get("/find-id", userController.sendUserId);

module.exports = userRouter;
