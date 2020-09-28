## Project Folder Structure

```
codial
├─ .git
├─ .gitIgnore
├─ assets
│  ├─ css
│  │  ├─ chat_box.css
│  │  ├─ footer.css
│  │  ├─ header.css
│  │  ├─ home.css
│  │  ├─ layout.css
│  │  └─ user_profile.css
│  ├─ images
│  ├─ js
│  │  ├─ chat_engine.js
│  │  ├─ home_posts.js
│  │  ├─ home_post_comments.js
│  │  └─ toggle_likes.js
│  └─ scss
│     ├─ chat_box.scss
│     ├─ footer.scss
│     ├─ header.scss
│     ├─ home.scss
│     ├─ layout.scss
│     └─ user_profile.scss
├─ config
│  ├─ chat_sockets.js
│  ├─ environment.js
│  ├─ kue.js
│  ├─ middleware.js
│  ├─ mongoose.js
│  ├─ nodemailer.js
│  ├─ passport-google-oauth2-strategy.js
│  ├─ passport-jwt-strategy.js
│  ├─ passport-local-strategy.js
│  └─ view-helpers.js
├─ controllers
│  ├─ api
│  │  └─ v1
│  │     ├─ post_api.js
│  │     └─ users_api.js
│  ├─ comments_controller.js
│  ├─ home_controller.js
│  ├─ likes_controller.js
│  ├─ posts_controller.js
│  └─ users_controller.js
├─ dump.rdb
├─ gulpFile.js
├─ index.js
├─ mailers
│  └─ comments_mailer.js
├─ models
│  ├─ comment.js
│  ├─ friendship.js
│  ├─ like.js
│  ├─ post.js
│  └─ user.js
├─ package-lock.json
├─ package.json
├─ production_logs
│  ├─ 20200519-0000-01-access.log
│  ├─ 20200929-0000-01-access.log
│  └─ access.log
├─ public
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ chat_box-3aa9f1fb21.css
│  │  │  ├─ footer-80b8801692.css
│  │  │  ├─ header-5624c7deef.css
│  │  │  ├─ home-bacaa64d3a.css
│  │  │  ├─ layout-43e5d0f990.css
│  │  │  └─ user_profile-bf94b0b59a.css
│  │  ├─ js
│  │  │  ├─ chat_engine-a80580aa44.js
│  │  │  ├─ home_posts-9233d342ff.js
│  │  │  ├─ home_post_comments-bb6531bb93.js
│  │  │  └─ toggle_likes-6888e2eea1.js
│  │  └─ rev-manifest.json
│  └─ rev-manifest.json
├─ routes
│  ├─ api
│  │  ├─ index.js
│  │  └─ v1
│  │     ├─ index.js
│  │     ├─ posts.js
│  │     └─ users.js
│  ├─ comments.js
│  ├─ index.js
│  ├─ likes.js
│  ├─ posts.js
│  └─ users.js
├─ uploads
│  └─ users
│     └─ avatar
│        ├─ avatar-1586098024152
│        ├─ avatar-1586098050424
│        ├─ avatar-1586098107188
│        └─ avatar-1589046083378
├─ views
│  ├─ home.ejs
│  ├─ layout.ejs
│  ├─ mailers
│  │  └─ comments
│  │     └─ new_comment.ejs
│  ├─ user_profile.ejs
│  ├─ user_sign_in.ejs
│  ├─ user_sign_up.ejs
│  ├─ _chat_box.ejs
│  ├─ _comment.ejs
│  ├─ _footer.ejs
│  ├─ _header.ejs
│  └─ _post.ejs
└─ workers
   └─ comment_email_worker.js

```
