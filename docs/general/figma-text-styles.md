# Text styles — Figma

Tài liệu mô tả cấu trúc **Text styles** trong file Figma (panel Text Styles). Mỗi dòng gồm **cỡ chữ / chiều cao dòng** (px). Trọng lượng chữ (Regular / Medium) được tách trong thư mục con. **Mobile body:** Regular và Medium **khác line-height** ở Body 1 và Body 2; **Body desktop:** hai weight dùng cùng cỡ và line-height.

## Typography trong code (`@theme inline`)

Trong [`src/app/globals.css`](../src/app/globals.css), các token `--text-*` sinh utility Tailwind **`text-*`** (cả cỡ chữ và line-height đi kèm).

- **Responsive:** mặc định thường là một **`text-mobile-*`**, từ `md:` trở lên gắn **`text-heading-*` hoặc `text-body-*`** tuỳ bản desktop designer chọn — **không bắt buộc cùng số** với mobile (ví dụ `text-mobile-heading-1 md:text-heading-4` hoặc `text-mobile-body-2 md:text-body-1`).
- **Weight:** không nằm trong token cỡ chữ `--text-*`; dùng utility **`font-body-regular`** / **`font-body-medium`** (token `--font-weight-body-regular`: 400, `--font-weight-body-medium`: 500 trong `@theme`) để khớp nhãn Figma *Regular* / *Medium*. Vẫn có thể dùng `font-normal` / `font-medium` (cùng giá trị số).

---

## 1. Moblie heading *(chính tả theo Figma: “Moblie”)*

| Tên style   | Font-size | Line-height | Utility Tailwind (mobile) |
|-------------|-----------|-------------|---------------------------|
| Headline 1  | 32px      | 38px        | `text-mobile-heading-1`    |
| Headline 2  | 28px      | 36px        | `text-mobile-heading-2`    |
| Headline 3  | 24px      | 32px        | `text-mobile-heading-3`    |
| Headline 4  | 16px      | 20px        | `text-mobile-heading-4`    |

**Responsive:** kết hợp với `md:text-heading-*` theo spec màn lớn — có thể là bất kỳ cấp desktop nào (vd. `text-mobile-heading-1 md:text-heading-4`), không nhất thiết trùng chỉ số với dòng bảng mobile.

---

## 2. Mobile body

### Regular *(chuẩn trong theme — Medium chỉ khác weight + lh trong Figma, chỉnh thêm trong JSX nếu cần)*

| Tên style | Font-size | Line-height | Utility Tailwind (mobile) |
|-----------|-----------|-------------|---------------------------|
| Body 1    | 15px      | 20px        | `text-mobile-body-1`       |
| Body 2    | 13px      | 18px        | `text-mobile-body-2`       |
| Body 3    | 11px      | 14px        | `text-mobile-body-3`       |
| Body 4    | 10px      | Auto *(Figma)* → `normal` trong CSS | `text-mobile-body-4` |

**Responsive:** kết hợp với `md:text-body-*` (hoặc `md:text-heading-*` nếu block được spec như heading trên desktop) theo thiết kế — chỉ số desktop **không cố định** theo dòng mobile (vd. `text-mobile-body-2 md:text-body-1`).

### Medium

Cùng cỡ chữ với Regular; font weight **Medium** (500). **Line-height Body 1 và Body 2 nhỏ hơn** Regular để chữ đậm không “cao” quá hàng.

| Tên style | Font-size | Line-height |
|-----------|-----------|-------------|
| Body 1    | 15px      | 18px        |
| Body 2    | 13px      | 16px        |
| Body 3    | 11px      | 14px        |
| Body 4    | 10px      | Auto *(Figma)* |

Trong panel Figma, các mục có thể hiển thị tiền tố **Ag** (ví dụ *Ag Body 1 · 15/20*) — đây là nhãn kiểu chữ trong file.

**Medium trong JSX:** dùng cùng utility cỡ `text-mobile-body-*` với **`font-medium`**, và nếu cần đúng lh Medium cho Body 1–2 thêm `leading-[18px]` / `leading-4` (16px) tương ứng.

---

## 3. Heading *(desktop / chung)*

| Tên style   | Font-size | Line-height | Utility Tailwind                          |
|-------------|-----------|-------------|-------------------------------------------|
| Headline 1  | 60px      | 60px        | `text-heading-1`                           |
| Headline 2  | 36px      | 44px        | `text-heading-2`                           |
| Headline 3  | 28px      | 36px        | `text-heading-3`                           |
| Headline 4  | 20px      | 28px        | `text-heading-4`                           |

**Responsive:** các utility trên là cỡ desktop; ghép với `text-mobile-heading-*` nào ở breakpoint nhỏ là **theo thiết kế**, không có quy tắc 1:1 (vd. hero mobile Headline 1 → desktop có thể là `md:text-heading-2` hoặc `md:text-heading-4`).

**Lưu ý:** trong danh sách Figma có **hai mục trùng tên** “Headline 4” với cùng **20px / 28px** — có thể là trùng lặp trong file hoặc hai style khác context (kiểm tra lại trong file gốc).

---

## 4. Body *(desktop / chung)*

**Medium** và **Regular** dùng **cùng bộ cỡ và line-height**; khác nhau ở **font weight**. Utilities `text-body-*` đã khớp cặp size/lh.

| Tên style | Font-size | Line-height | Utility Tailwind                          |
|-----------|-----------|-------------|-------------------------------------------|
| Body 1    | 18px      | 28px        | `text-body-1`                              |
| Body 2    | 16px      | 24px        | `text-body-2`                              |
| Body 3    | 14px      | 20px        | `text-body-3`                              |
| Body 4    | 12px      | 16px        | `text-body-4`                              |

Ví dụ chỉ desktop: `className="text-body-3 font-normal"` hoặc `font-medium`.

**Responsive:** khi cần hai cỡ (mobile + desktop), `md:text-body-*` được chọn khớp layout — không nhất thiết trùng “cấp” với `text-mobile-body-*` phía trước.

---

## Quy ước đặt tên trong Figma

Cấu trúc thường gặp:

`Nhóm chính / [Regular | Medium] / Tên style`

Ví dụ: `Mobile body / Regular / Body 1`, `Body / Medium / Body 2`.

---

## Ảnh tham chiếu

Ảnh chụp panel được lưu trong workspace:

- Tổng quan text styles (heading + body):  
  `/Users/bb/.cursor/projects/Users-bb-Desktop-DAT-ldp-thanhsen/assets/image-20d30f6e-3188-4be0-8e14-b43ce417b9b8.png`
- **Mobile body** — Regular và Medium (đầy đủ số liệu):  
  `/Users/bb/.cursor/projects/Users-bb-Desktop-DAT-ldp-thanhsen/assets/image-31aa97cd-cd05-412d-ba12-49dce062404d.png`
