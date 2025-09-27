import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikAndYup() {
  // Initialize formik
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full Name must be at least 3 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert("Form Submitted Successfully!\n" + JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h2>Formik + Yup Example</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div style={{ color: "red" }}>{formik.errors.fullName}</div>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        {/* Phone */}
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: "red" }}>{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={!formik.isValid || !formik.dirty}>
          Submit
        </button>
      </form>
    </div>
  );
}
