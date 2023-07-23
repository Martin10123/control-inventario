import { listCreateUser } from "../../../helpers";
import { InputForm } from "../../../components";

export const InfoUserTwo = () => {
  return (
    <>
      <h2
        style={{
          fontSize: "2rem",
          color: "#00c4e8",
          marginBottom: "1.5rem",
          lineHeight: 1.3,
        }}
      >
        Más información personal
      </h2>

      {listCreateUser.slice(4, 8).map(({ Icon, name, placeholder, type }) => (
        <InputForm
          key={name}
          icon={Icon}
          name="pointSale"
          placeholder={placeholder}
          type={type}
        />
      ))}
    </>
  );
};
