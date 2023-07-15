interface Props {
  styles?: object;
  titleError: string;
}

export const ShowError = ({ titleError, styles }: Props) => {
  return (
    <div
      style={{
        alignItems: "center",
        background: "#ff000066",
        borderRadius: "1.5rem",
        display: "flex",
        height: "3rem",
        justifyContent: "center",
        margin: "1rem 0",
        width: "100%",
        ...styles,
      }}
    >
      <p style={{ color: "#fff", fontSize: "1.1rem", textAlign: "center" }}>
        {titleError}
      </p>
    </div>
  );
};
