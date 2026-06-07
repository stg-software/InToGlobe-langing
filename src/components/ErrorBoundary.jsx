import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            padding: "2rem",
            textAlign: "center",
            background: "#f9fafb",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚠️</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" }}>
            Algo salió mal
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "1.5rem", maxWidth: "400px" }}>
            Ocurrió un error inesperado. Por favor recarga la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              color: "#fff",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Recargar página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
