import { SelectDateInput, SelectForm } from "../../../components";

export const SalesReportDates = () => {
  return (
    <SelectDateInput>
      <SelectForm>
        <option value="">Punto de venta</option>
      </SelectForm>

      <SelectForm>
        <option value="">Empleados</option>
      </SelectForm>

      <SelectForm>
        <option value="PDF - General">PDF - General</option>
        <option value="PDF - Detallado">PDF - Detallado</option>
      </SelectForm>
    </SelectDateInput>
  );
};
