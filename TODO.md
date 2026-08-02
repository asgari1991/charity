# Settings Page - User Management Card

## Steps:

### 1. ✅ Create `src/Components/Setting/UsersModal.jsx`
- Modal with headless-ui `Transition` + `Dialog` (matching existing modal patterns)
- Header: gradient `mainBlue → #6F8FA8`, title «مدیریت کاربران», close button
- **Users list section:**
  - Fetch `GET /user` on modal open
  - Table columns: ردیف، نام کاربری، نام، سطح دسترسی، تاریخ ایجاد
  - Show Persian date via `convertEnglishToPersianDateChatGpt`
  - `is_admin` badge: «مدیر» / «کاربر»
  - Loading state & empty state
- **Add new user section:**
  - Fields: نام کاربری (username), رمز عبور (password), نام (name)
  - Level select (`ListBox`): مدیر / کاربر → `is_admin`
  - `POST /user` with `{ username, password, name, is_admin }`
  - Validation (required fields)
  - On success: `GeneralSuccessModal`, refresh list, reset form
  - On error: `ErrorModal`

### 2. ✅ Rewrite `src/Components/Setting/Setting.jsx`
- `Header` with settings icon + title «تنظیمات»
- **Reusable grid layout** for future setting cards (`grid grid-cols-... gap-6`)
- Beautiful clickable card:
  - Rounded-2xl, gradient background, shadow with hover lift
  - Icon badge, title «مدیریت کاربران», description
  - Live user count badge (fetched from `/user`)
  - Arrow indicator
- Click card → open `UsersModal`

### 3. ✅ Update `TODO.md`
- Mark completed steps

## ✅ Done (scope confirmed with user):
- Only **list + add** user (NO delete)
- This is the **first card**; more setting cards will be added later
- API endpoints assumed: `GET /user`, `POST /user`

