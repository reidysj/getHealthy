import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props: { children: any }) {
  if (!localStorage.getItem("token")) return <Navigate to="/" replace />;
  return props.children;
}
