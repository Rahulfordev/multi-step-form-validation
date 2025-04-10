# 📟 Multi-Step Form with Validation

This is a **Multi-Step Form** built using **Next.js (App Router)**, **React Hook Form**, **Zod**, and **TailwindCSS**. It collects personal information in three steps and validates each input with Zod. The final step displays a summary before submission.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React Hook Form** – for form state and handling
- **Zod** – for schema validation
- **TailwindCSS** – for utility-first styling
- **React Query** (Optional) – for simulating API submission
- **Dark Mode** – via Tailwind's dark mode support

---

## 📸 Features

✅ Multi-step form with 3 steps  
✅ Field-level validation with error messages  
✅ "Next" and "Previous" step navigation  
✅ Final summary before submission  
✅ Form data stored in local state  
✅ API simulation using React Query
✅ Responsive design for mobile users  
✅ Dark mode toggle (TailwindCSS)

---

## 📁 Project Structure

```
/app
    - layout.js
    - page.js
  /components
    - DarkModeToggle.jsx
    - providers.jsx
    - Step1.jsx
    - Step2.jsx
    - Step2.jsx
    - Summary.jsx
    /common
        - Button.jsx
        - InputField.jsx
```

---

## 🧑‍💻 Getting Started

### 1⃣ Clone the Repository

```bash
git clone https://github.com/Rahulfordev/multi-step-form-validation.git
cd multi-step-form-validation
```

### 2⃣ Install Dependencies

Using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn
```

### 3⃣ Run the Development Server

Using **npm**:

```bash
npm run dev
```

Or using **yarn**:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the form in action.

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).
