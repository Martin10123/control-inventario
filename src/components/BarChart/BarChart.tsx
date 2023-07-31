type BarChartProps = {
  data: number[];
  labels: string[];
  title: string;
};

export const BarChart = ({ data, labels, title }: BarChartProps) => {
  const maxDataValue = Math.max(...data);
  const chartHeight = 300; // Altura del gráfico en píxeles

  return (
    <div>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          padding: "0.5rem",
          boxShadow: "1px 1px 6px #8080805e",
          borderRadius: "0.5rem",
          margin: "1rem 0 0",
        }}
      >
        {data.map((value, index) => (
          <div key={index} style={{ marginRight: "0px" }}>
            <div
              style={{
                height: `${(value / maxDataValue) * chartHeight}px`,
                width: "50px",
                backgroundColor: "#00c0e8",
                margin: "0 auto",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "height 0.3s ease",
              }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              {labels[index]}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div>Lunes</div>
        <div>Martes</div>
        <div>Miércoles</div>
        <div>Jueves</div>
        <div>Viernes</div>
      </div>
    </div>
  );
};
